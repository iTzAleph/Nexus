const Discord = require('discord.js');

module.exports = (client, message, args) => {
    const moment = require("moment");
    require('moment-duration-format');

    const actividad = moment.duration(client.uptime).format("D [dias], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setFooter(' Pedido por ' + message.author.username)
    .setAuthor('Información de Nexus Canary', client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField('> Links', `[Invitame a tu servidor!](https://discord.com/api/oauth2/authorize?client_id=741435910876561410&permissions=8&scope=bot)`)
    .addField('> Creador', ':wrench: <@!413757069615955969>', true)
    .addField('> Lenguaje', `:pencil:  JavaScript`, true)
    .addField('> Versión', ':arrow_up: ' + client.config.version, true)
    .addField('> Librería', ':dividers: discord.js v12', true)
    .addField('> Memoria', `:floppy_disk: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField('> Tiempo en línea', `:clock1: ${actividad}`, true)
    .addField('> Servidores', `:satellite: ${client.guilds.cache.size.toLocaleString()}`, true)
    .addField('> Usuarios', `:mens: ${client.users.cache.size.toLocaleString()}`, true)
    .addField('> Canales', `:speech_left: ${client.channels.cache.size.toLocaleString()}`, true)
    message.channel.send(embed) 

}
