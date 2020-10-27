const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0])
    if(!usuario) return message.reply('Debe mencionar a alguien.')

    numero = Math.floor(Math.random() * 101)
    if (numero === 101) 'xd'
    
    message.channel.send('**' + message.author.username + '** y **' + usuario.user.username + '** tienen un **' + numero + '%** de compatibilidad.')
}