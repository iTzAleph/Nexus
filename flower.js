const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let persona = message.mentions.members.first() || message.guild.members.resolve(args[0])
    if(!persona) return message.channel.send(`Ten una flor **${message.author.username}!!** 7w7 :rose:`)

    message.channel.send(`**${message.author.username}** Le a dado una flor a **${persona.user.username}!!** 7w7 :rose:`)
}