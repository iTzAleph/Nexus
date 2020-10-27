const Discord = require('discord.js');

module.exports = (client, message, args) => {
    var server = message.guild;
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Icono de ' + server.name)
        .setTitle('Icon URL')
        .setURL(server.iconURL({dynamic: true}))
        .setImage(server.iconURL({size : 4096, dynamic: true}))
        .setFooter('Pedido por ' + message.author.username)
message.channel.send(embed);
}