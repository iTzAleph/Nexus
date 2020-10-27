const Discord = require('discord.js');

module.exports = (client, message, args) => {
    if (!args[0]) return message.channel.send('Ponga el emoji que desea ver.');

    let emoji = Discord.Util.parseEmoji(args.join(' '))
        if (!emoji) return message.channel.send('Ponga el emoji que desea ver.');
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setFooter('Pedido por ' + message.author.username)
        .setTitle(`***${emoji.name}***`)
        .setDescription(`[Emoji URL](https://cdn.discordapp.com/emojis/${emoji.id}.png?v=1)`)
        .setImage(`https://cdn.discordapp.com/emojis/${emoji.id}.png?v=1`)
    message.channel.send(embed);
}