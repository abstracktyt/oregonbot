module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Музыка ${queue.current.title} продолжает играть ✅` : `Что-то пошло не так ${message.author}... попробуйте опять ? ❌`);
    },
};