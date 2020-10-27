const Discord = require('discord.js');

module.exports = (client, message, args) => {
let ping = Math.floor(message.client.ws.ping);

message.channel.send(":ping_pong: Pong!")
    .then(m => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`> :incoming_envelope: Ping Mensajes: \`${m.createdTimestamp - 
        message.createdTimestamp} ms\`\n:satellite_orbital:  Ping DiscordAPI: \`${ping} ms\``)
        .setColor('RANDOM')

        m.edit(embed);
    })

}