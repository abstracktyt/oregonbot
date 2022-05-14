const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Указанное время больше, чем общее время текущей песни ${message.author}... попробуйте опять ? ❌\n*Доступное время **5сек, 10сек, 20 секудн, 1 минута**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Время, установленное для текущей песни **${ms(timeToMS, { long: true })}** ✅`);
    },
};