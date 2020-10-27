const Discord = require('discord.js');

module.exports = (client, message, args) => {
    message.channel.send(`**${message.author.username}** se a tomado un café :coffee:`)
}