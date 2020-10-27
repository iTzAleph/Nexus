const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let texto = args.join(' ');
    if(message.deletable) message.delete();
    if(!texto) return message.channel.send('Debe escribir algo para confesar.');

        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setFooter('Por: Anónimo')
            .addField('> Nueva confesión:', texto)
    message.channel.send(embed);
}