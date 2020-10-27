const Discord = require('discord.js');

module.exports = async(client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('No tienes permisos u,-,u')
    if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('No tengo permisos u,-,u')
    
    let Usuario = message.mentions.members.first()
    if(!Usuario) return message.channel.send('Debes mencionar a alguien.')
    
    let razon = args.slice(1).join(' ') 
    
    if(!razon) razon = 'Sin razon'
    
    message.channel.send('Se fue kickeado el '+Usuario.user.tag)
    Usuario.kick({reason: razon})
}