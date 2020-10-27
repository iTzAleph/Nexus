const Discord = require('discord.js');

module.exports = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes los permisos necesarios para usar este comando.")
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tengo permisos para borrar mensages.")

    let cantidad = parseInt(args[0])
    
    if (!args[0]) return message.channel.send("Ingresa la cantidad de mensages que desea eliminar.");

    if (cantidad > 100) return message.channel.send("No puedes eliminar más de 100 mensajes.")
    message.channel.bulkDelete(cantidad);
    message.channel.send(`**${cantidad}** han sido eliminados.`)
}