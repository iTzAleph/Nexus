const Discord = require('discord.js');

module.exports = (client, message, args) => {
    var gif = [
        'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
        'https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif',
        'https://media.giphy.com/media/GMFUrC8E8aWoo/giphy.gif',
        'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
        'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
        'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
        'https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif',
        'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
        'https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif',
        'https://media.giphy.com/media/EGauSkKQZuXxS/giphy.gif',
        'https://media.giphy.com/media/nUz7d1sUppGta/giphy.gif', 
        'https://media.giphy.com/media/rSNAVVANV5XhK/giphy.gif',
        'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif'
    ];
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0])
    if(!usuario) { 
        var frase = abrazo = [
            `¡Ten un abrazo **${message.author.username}**!`,
            `¡Dejame darte un abrazo **${message.author.username}**!`,
    ]} else {
        var frase = abrazo2 = [
            `**${usuario.user.username}** a sido abrazado por **${message.author.username}**`,
            `**${usuario.user.username}** resibe un lindo abrazo de **${message.author.username}**`, 
            `**${message.author.username}** abraza con amor a **${usuario.user.username}**`,
            `**${message.author.username}** le da un cariñoso abrazo a **${usuario.user.username}**`,
            `**${usuario.user.username}** recibe un caluroso abrazo de **${message.author.username}**`
        ]}
    let embed = new Discord.MessageEmbed()
        .setDescription(frase[Math.floor(Math.random() * frase.length)])
        .setImage(gif[Math.floor(Math.random() * gif.length)])
        .setColor('RANDOM')
    message.channel.send(embed)
}