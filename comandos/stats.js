const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setTitle(':bar_chart: **Estadisticas**')
        .addField('> Servidores', `:satellite: ${client.guilds.cache.size.toLocaleString()}`)
        .addField('> Usuarios', `:mens: ${client.users.cache.size.toLocaleString()}`)
        .addField('> Canales', `:speech_left: ${client.channels.cache.size.toLocaleString()}`)
        .setFooter('Pedido por ' + message.author.username)
        .setColor('RANDOM')
    message.channel.send(embed);
}