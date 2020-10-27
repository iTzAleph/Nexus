const Discord = require('discord.js');

module.exports = (client, message, args) => {
    var numero = ['1', '2', '3', '4', '5', '6']
    let embed = new Discord.MessageEmbed()
        .setTitle('***:game_die:Dado***')
        .addField('> ' + message.author.username + ' lanzo un dado','El dado saco: **' + numero[Math.floor(Math.random() * numero.length)] + '**')
        .setColor('RANDOM')
    message.channel.send(embed)
}