const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`На данный момент, бот играет на громкости ${queue.volume} 🔊\n*Что-бы изменить громкость, введите от **1** до **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Громкость, которую вы хотите изменить, уже является текущей ${message.author}... попробуйте опять ? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Данная громкость не доступна, введите от **1** до **${maxVol}** ${message.author}... попробуйте опять ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Громкость была измененна на **${vol}**/**${maxVol}**% 🔊` : `Что-то пошло не так ${message.author}... попробуйте опять ? ❌`);
    },
};