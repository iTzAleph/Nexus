const Discord = require('discord.js');

module.exports = (client, message, args) => {
    var coin = ['Cara', 'Sello']
    let embed = new Discord.MessageEmbed()
        .setTitle('***Moneda***')
        .addField('> ' + message.author.username + ' lanzo una moneda','La moneda saco: **' + coin[Math.floor(Math.random() * coin.length)] + '**')
        .setColor('RANDOM')
    message.channel.send(embed)
}