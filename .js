const Discord = require('discord.js');
const config = require('../config');
let prefix = config.prefix;

module.exports = (client, message, args) => {
    message.channel.send('Para ver mi lista de comandos escribe: `'+ prefix +'help`')
}