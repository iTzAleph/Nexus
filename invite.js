const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0])
    if(!usuario) return message.channel.send('Debe mencionar a algun bot dentro de este servidor')
    if(!usuario.user.bot) return message.channel.send('Debe mencionar a algun bot dentro de este servidor')

    let embed = new Discord.MessageEmbed()
        .setThumbnail(usuario.user.avatarURL())
        .setColor('RANDOM')
        .setAuthor(usuario.user.username, usuario.user.avatarURL())
        .setDescription(`> Invita a ${usuario.user.username} tu servidor \n [Click Aqui para invitar](https://discord.com/oauth2/authorize?client_id=${usuario.id}&permissions=8&scope=bot)`)
        .setFooter('Pedido por ' + message.author.username)
    message.channel.send(embed);

}