const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.member;

    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Avatar de ' + usuario.user.username)
        .setTitle('Avatar URL')
        .setURL(usuario.user.displayAvatarURL({dynamic: true}))
        .setImage(usuario.user.displayAvatarURL({size : 4096, dynamic: true}))
        .setFooter('Pedido por ' + message.author.username)
    message.channel.send(embed) 
}
