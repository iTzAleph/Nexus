const Discord = require('discord.js');

module.exports = (client, message, args) => {
    
    if(message.author != '413757069615955969') return message.reply('No tienes el permiso para usar este comando.')
    let toEval = args.join(' ')
    if(!toEval) return message.reply('Ingrese lo que desea evaluar')
    try {
        if(args.join(' ').toLowerCase().includes('Token')){
            return;
    }
    let evaluated = eval(toEval)

    let beautify = require('beautify')
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Nexus Eval', client.user.displayAvatarURL())
        .setFooter('Pedido por ' + message.author.username, message.author.displayAvatarURL())
        .addField('> :inbox_tray: Entrada', '```js\n' + beautify(args.join(' '), { format: 'js' }) + '```')
        .addField('> :outbox_tray: Salida', '```js\n' + evaluated + '```')
        .setTimestamp()
    message.channel.send(embed)
} catch(err) {
    let beautify = require('beautify')
    let embed2 = new Discord.MessageEmbed()
        .setTimestamp()
        .addField('> Se a producido un error', '```js\n' + err + '```')
    message.channel.send(embed2)
}
}