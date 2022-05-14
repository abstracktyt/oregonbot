module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Музыка ${queue.current.title} пропущена ✅` : `Что-то пошло не так ${message.author}... попробуйте опятьы ? ❌`);
    },
};