const { SlashCommandBuilder } = require('discord.js');

const schedule = {
    Monday: "Понедельник:\n- Тренировка\n- Работа\n- Учеба",
    Tuesday: "Вторник:\n- Кодинг\n- Спорт",
    Wednesday: "Среда:\n- Отдых\n- Игры",
    Thursday: "Четверг:\n- Учеба\n- Проект",
    Friday: "Пятница:\n- Работа\n- Вечеринка",
    Saturday: "Суббота:\n- Отдых\n- Друзья",
    Sunday: "Воскресенье:\n- Чилл\n- Подготовка к неделе"
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('всянеделя')
        .setDescription('Показать расписание на всю неделю'),

    async execute(interaction) {
        const fullText = Object.values(schedule).join("\n\n");

        await interaction.reply({
            content: fullText,
            ephemeral: true
        });
    }
};
