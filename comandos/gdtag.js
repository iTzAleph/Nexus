const Discord = require('discord.js');

module.exports = (client, message, args) => {
    if(message.deletable) message.delete();

    let icono = [
        "gatekeeper", 
        "gatekeeper.dark", 
        "keymaster", 
        "keymaster.huh", 
        "keymaster.scared", 
        "keymaster.scream", 
        "monster", 
        "monster.eyes", 
        "potbor", 
        "potbor.annoyed", 
        "potbor.huh", 
        "potbor.mad", 
        "potbor.right", 
        "potbor.talk", 
        "potbor.tired", 
        "scratch", 
        "scratch.annoyed", 
        "scratch.huh", 
        "scratch.mad", 
        "scratch.right", 
        "scratch.talk", 
        "shopkeeper", 
        "shopkeeper.annoyed", 
        "spooky"
    ]   

    let color = [
        "blue", 
        "brown", 
        "purple", 
        "aqua", 
        "green", 
        "grey", 
        "orange", 
        "pink", 
        "red"
    ]

    let captura = icono[Math.floor(icono.length * Math.random())]
    let colorize = color[Math.floor(color.length * Math.random())]

    let autor = message.member.nickname ? message.member.nickname : message.author.username

    let texto = args.join('%20')

    if(!texto) return message.channel.send('Debe escribir un mensaje.')

    let link = `https://gdcolon.com/tools/gdtextbox/img/${texto}?${colorize}=purple&name=${autor}&char=${captura}`
    
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(link)
    message.channel.send(embed)

}