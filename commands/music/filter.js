module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Укажите допустимый фильтр, чтобы включить или отключить ${message.author}... попробуйте опять ? ❌\n${actualFilter ? `Фильтр в настоящее время активен ${actualFilter} (${client.config.app.px}фильтр ${actualFilter} отключить).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Этот фильтр не существует ${message.author}... попробуйте опять ? ❌\n${actualFilter ? `Фильтр в настоящее время активен ${actualFilter}.\n` : ''}Список доступных фильтров ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Фильтр ${filter} сейчас **${queue.getFiltersEnabled().includes(filter) ? 'Включено' : 'Выключено '}** ✅\n*Напоминаю, чем длиннее музыка, тем дольше это займет.*`);
    },
};