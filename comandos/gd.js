const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let texto = args.join('%20')
    if(message.deletable) message.delete()

    if(!texto) return message.channel.send('Debe escribir un mensaje.')

    let embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setImage(`https://gdcolon.com/tools/gdlogo/img/${texto}`)
    message.channel.send(embed)
}