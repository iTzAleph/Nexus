const Discord = require('discord.js');

module.exports = (client, message, args) => {
    var gif = [
        'https://cdn.discordapp.com/attachments/399448944889036801/763814757865226271/b7727421-a11f-4e12-94fc-e7f51492f38c.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/763402254874050560/6d6b151a-adcb-4973-8c61-baa246017812.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/760867061978628146/2b5dbf32-7143-4f77-b685-5e0994f97e3c.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/760867062674620486/fe2b454b-6cf1-45a6-8c27-93e5ca2f1307.gif',
        'https://imgur.com/GVfay7M.gif',
        'https://imgur.com/TA26hYv.gif',
        'https://imgur.com/o6A6rNz.gif',
        'https://imgur.com/ihCZpwJ.gif',
        'https://imgur.com/nFPFd2i.gif',
        'https://imgur.com/xFyFEaB.gif',
        'https://imgur.com/CYGpG62.gif',
        'https://imgur.com/sy4ZgWt.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/756952483112419378/0efac361-d124-4068-bbe7-f82f3b21278d.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/756177957608751284/AmbitiousSlimBongo-small.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/756175421887742082/719fbd6559ceefa1ef32204e06b5cd5a462e2799_hq.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/756144865234124910/d391ab67-521d-4345-8559-fcb29029c28c.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/756143663456714832/df586fca-87bc-4eec-b71d-70dcf3f625d9.gif',
        'https://imgur.com/qgfsj2q',
        'https://cdn.discordapp.com/attachments/399448944889036801/755745576645165056/3b6539446c8a08cac45027ca7d7e3d39.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/755732877806665788/1cda117cc72003dc28b6af80a25230e7e4db3866_hq.gif',
        'https://imgur.com/lJWq0qB',
        'https://cdn.discordapp.com/attachments/399448944889036801/754378451447971850/7855f2bc-a243-4042-a887-b9e8aabdbfab.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/754080679012204574/ec0a5ca1-2d19-452a-a8ea-7a57ff30b7f3.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/754079914080206848/599da8c6-9b3e-4007-9aed-4d7bdf1c8a80.gif',
        'https://cdn.discordapp.com/attachments/399448944889036801/754079914499637370/178864e2-5961-4c19-9b46-0ee3d00ff41d.gif',
    ];
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0])

    if(!usuario) { 
        var frase = baile = [
            `¡**${message.author.username}** se a puesto a bailar!`,
            `¡**${message.author.username}** se puso a bailar!`,
            `¡**${message.author.username}** baila, baila!`,
            `Parece que a **${message.author.username}** le encanta bailar. ¡Mira esos pasos!`,
            `¡Miren como baila **${message.author.username}**!`,
            `¡Miren los pasos de **${message.author.username}**!`,
    ]} else {
        var frase = baile2 = [
            `**${message.author.username}** y **${usuario.user.username}** estan bailando`,
            `**${message.author.username}** a empezado a bailar con **${usuario.user.username}**`,
            `**${message.author.username}** baila para **${usuario.user.username}**`,
            `**${usuario.user.username}**, parece que **${message.author.username}** quiere bailar contigo`,
    ]}

    let embed = new Discord.MessageEmbed()
        .setDescription(frase[Math.floor(Math.random() * frase.length)])
        .setImage(gif[Math.floor(Math.random() * gif.length)])
        .setColor('RANDOM')
    message.channel.send(embed)
}