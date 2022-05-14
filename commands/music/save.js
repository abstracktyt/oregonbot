module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`В данный момент музыка не воспроизводится ${message.author}... попробуйте опять ? ❌`);

        message.author.send(`Вы сохранили трек ${queue.current.title} | ${queue.current.author} с сервера ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Я отправил вам название музыки в личные сообщения ✅`);
        }).catch(error => {
            message.channel.send(`Не могу отправить вам личное сообщение ${message.author}... попробуйте опять ? ❌`);
        });
    },
};