const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (client, message, args) => {
    var gif = [
        'https://media.giphy.com/media/gTLfgIRwAiWOc/giphy.gif', 
        'https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif', 
        'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif', 
        'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif', 
        'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif', 
        'https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif', 
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif', 
        'https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif', 
        'https://media.giphy.com/media/ofF5ftkB75n2/giphy.gif', 
        'https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif', 
        'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif', 
        'https://media.giphy.com/media/sS7Jac8n7L3Ve/giphy.gif', 
        'https://media.giphy.com/media/U9lRsXbwlbL4k/giphy.gif'];
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0])
    if(!usuario) return message.reply('Debe mencionar al usuario al que quiere besar o///o.')
    var beso = [
        `**${usuario.user.username}** a sido besado por **${message.author.username}** owo`, 
        `**${usuario.user.username}** resibe un besito por **${message.author.username}** >///<`, 
        `**${message.author.username}** besa con amor a **${usuario.user.username}** >///<`,
        `**${message.author.username}** le dio un beso a **${usuario.user.username}** o///o`,
        `**${usuario.user.username}** ha recibido un beso de **${message.author.username}** o///o`,
    ]

    let embed = new Discord.MessageEmbed()
        .setDescription(beso[Math.floor(Math.random() * beso.length)])
        .setImage(gif[Math.floor(Math.random() * gif.length)])
        .setColor('RANDOM')
    message.channel.send(embed)
}