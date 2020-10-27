const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let estados = {
        "online": ":green_circle: En linea",
        "dnd": ":no_entry_sign: No molestar",
        "idle": ":crescent_moon: Ausente",
        "offline": ":black_circle: Desconectado"
    }
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.member; 
    let actividad = usuario.presence.activities

    const moment = require("moment");
    require('moment-duration-format');

    const creada = moment.duration(Date.now() - usuario.user.createdAt).format("D [dias]");
    const unido = moment.duration(Date.now() - usuario.joinedAt).format("D [dias]");

    let embed = new Discord.MessageEmbed()
    .setAuthor(usuario.user.username, usuario.user.displayAvatarURL())
    .setThumbnail(usuario.user.displayAvatarURL({dynamic: true}))
    .setColor('RANDOM')
    .setFooter('Pedido por ' + message.author.username)
    .addField('> **ID**', usuario.id)
    .addField('> **Tag**', usuario.user.tag)
    .addField('> **Apodo**', `:pencil2: ${usuario.nickname != null ? usuario.nickname : 'No tiene'}`, true)
    .addField('> **Estado**', `${estados[usuario.presence.status]}`, true)
    .addField('> **Cuenta creada el**', ':date: ' + usuario.user.createdAt.toLocaleDateString() + '\n (Hace ' + creada + ')', true)
    .addField('> **Se unio al servidor**', ':date: ' + usuario.joinedAt.toLocaleDateString() + '\n (Hace ' + unido + ')', true)
    .addField('> **Actividades**', ':video_game: ' + usuario.user.presence.activities.join(" | "), true)
    .addField('> **Roles**', ':triangular_flag_on_post: ' + usuario.roles.cache.size, true)
    .addField('> **Roles**', `${usuario.roles.cache.map(x => x).join(" | ")}`)
    message.channel.send(embed)
}