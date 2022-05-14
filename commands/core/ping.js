const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Рассчитаный последний пинг ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} - **${client.ws.ping}ms** 🛰️`);
    },
};