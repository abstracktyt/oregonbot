module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        queue.destroy();

        message.channel.send(`Музыка остановилась на этом сервере, увидимся в следующий раз ✅`);
    },
};