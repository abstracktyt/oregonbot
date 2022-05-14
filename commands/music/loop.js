const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Вы должны сначала отключить текущую музыку в режиме петли (${client.config.app.px}повтор) ${message.author}... попробуйте опять ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Повтор **${queue.repeatMode === 0 ? 'Отключено' : 'Включенно'}** вся очередь будет повторяться бесконечно 🔁` : `Что-то пошло не так ${message.author}... попробуйте опять ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Вы должны сначала отключить текущую очередь в режиме повтора (${client.config.app.px}повтор) ${message.author}... попробуйте опять ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Режим повтора **${queue.repeatMode === 0 ? 'Отключено' : 'Включенно'}** текущая музыка будет повторяться бесконечно (вы можете зациклить очередь с опцией <queue>) 🔂` : `Что-то пошло не так ${message.author}... попробуйте опять ? ❌`);
        };
    },
};