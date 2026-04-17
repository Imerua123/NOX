const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

// 📅 Расписание
const schedule = {
    Monday: "Понедельник:\n- Тренировка\n- Работа\n- Учеба",
    Tuesday: "Вторник:\n- Кодинг\n- Спорт",
    Wednesday: "Среда:\n- Отдых\n- Игры",
    Thursday: "Четверг:\n- Учеба\n- Проект",
    Friday: "Пятница:\n- Работа\n- Вечеринка",
    Saturday: "Суббота:\n- Отдых\n- Друзья",
    Sunday: "Воскресенье:\n- Чилл\n- Подготовка к неделе"
};

// 📌 День (Дания)
function getToday() {
    return new Date().toLocaleDateString("en-US", {
        weekday: "long",
        timeZone: "Europe/Copenhagen"
    });
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('расписание')
        .setDescription('Показать расписание на сегодня'),

    async execute(interaction) {
        const today = getToday();
        const text = schedule[today] || "Нет расписания";

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('full_schedule')
                .setLabel('Показать всю неделю')
                .setStyle(ButtonStyle.Primary)
        );

        await interaction.reply({
            content: `📅 Сегодня:\n${text}`,
            components: [row]
        });
    }
};
