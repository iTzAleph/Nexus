const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let texto = args.join(' ');
    if(message.deletable) message.delete();
    if(!texto) return message.channel.send('Debe escribir un mensaje.');

    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(texto)
    message.channel.send(embed)
}