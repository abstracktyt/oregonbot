module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Раньше не играла музыка ${message.author}... попробуйте опять ? ❌`);

        await queue.back();

        message.channel.send(`Играет **previous** трек ✅`);
    },
};