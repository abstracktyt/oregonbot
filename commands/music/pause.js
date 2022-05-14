module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Данная музыка ${queue.current.title} остановлена ✅` : `Что-то пошло не так ${message.author}... try again ? ❌`);
    },
};