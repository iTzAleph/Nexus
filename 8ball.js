const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let texto = args.join(' ');
    var rpts = [
        "Si", 
        "No", 
        "No lo se", 
        "Tal ves?", 
        "Eso creo", 
        "No lo creo", 
        "Perdon pero no puedo responder eso", 
        "Quisas",
        "Tal ves",
        "Yo creo que si", 
        "Yo creo que no", 
        "No me preguntes a mi solo soy un bot con respuestas random", 
        "Tu destino dice que si", 
        "Dale nomas", 
        "Porque no?", 
        "Porque?", 
        "Si", 
        "No", 
        "Nose"
    ];
    
    if(!texto) return message.reply('Escriba una pregunta para la bola 8 magica.');
    let embed = new Discord.MessageEmbed()
        .setTitle(':8ball: ***Bola 8 magica***')
        .setColor('RANDOM')
        .addField('> ' + message.author.username + ' pregunta:', texto)
        .addField('> Mi respuesta es: ', rpts[Math.floor(Math.random() * rpts.length)])
    message.channel.send(embed)
}