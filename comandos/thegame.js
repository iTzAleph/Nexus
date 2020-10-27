const Discord = require('discord.js');

module.exports = (client, message, args) => {
    if(message.deletable) message.delete();
    message.channel.send('**The game**');
}