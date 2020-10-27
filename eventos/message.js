const Discord = require('discord.js');
const { prefix } = require('../config');
const client = new Discord.Client();

module.exports = (client, message) => {

    let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(RegMention)) {
        message.reply('Mi prefix es `' + prefix + '`, para ver mi lista de comandos use `' + prefix + 'help`.')
    }

    if(!message.content.startsWith(client.config.prefix)) return;
    if(message.author.bot) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);  
    const command = args.shift().toLowerCase()

    let cmd = client.comandos.get(command);
    if(!cmd) return;

    cmd(client, message, args);

}