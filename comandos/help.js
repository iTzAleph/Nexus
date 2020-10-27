const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor("RANDOM")
        .setFooter("Pedido por " + message.author.username)
        .setTitle("Lista de comandos")
        .setThumbnail(client.user.avatarURL())
        .addField(`**${client.config.vercion}**`, " ¡Hola! yo soy Nexus Canary, la vercion beta de Nexus, estoy aqui para ayudarte a pasar un buen rato en este servidor. A continuacion tienes todos los comandos que puedes utilizar conmigo.")
        .addField("> Links", `[Invitame a tu servidor!](https://discord.com/api/oauth2/authorize?client_id=741435910876561410&permissions=8&scope=bot) \n [Servidor de soporte](https://discord.gg/vGXgWz9)`)
        .addField("> ***:information_source: Informacion***", "`ping` `server` `user` `bot` `stats`")
        .addField("> ***:joy:  Diverción***", "`hola` `confession` `say` `8ball` `dado` `coin` `meme` `memei`")
        .addField("> ***:speech_balloon: Interaccion***", "`cookie` `coffee` `me` `hug` `pat` `kiss`")
        .addField("> ***:game_die: Utiles***", "`invite` `icon` `avatar` `emoji`")
        message.channel.send(embed)

}