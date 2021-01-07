const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.member;

    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Avatar de ' + usuario.user.username)
        .setDescription(`> [Avatar URL](${usuario.user.displayAvatarURL({size : 4096, dynamic: true})})`)
        .setImage(usuario.user.displayAvatarURL({size : 4096, dynamic: true}))
        .setFooter('Pedido por ' + message.author.username)
    message.channel.send(embed) 
}
