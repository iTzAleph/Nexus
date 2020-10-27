const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let persona = message.mentions.members.first() || message.guild.members.resolve(args[0])
    if(!persona) return message.channel.send(`Ten una galletita **${message.author.username}!!** :cookie:`)

    message.channel.send(`**${message.author.username}** Le a dado una galletita a **${persona.user.username}!!** :cookie:`)
}