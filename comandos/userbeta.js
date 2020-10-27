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
    
    let algo = usuario.user.flags
    if(!algo) algo = 'No tiene'
    else algo = usuario.user.flags.toArray()

    const flags = new Discord.UserFlags()
    badges = {
        'DISCORD_EMPLOYEE':'<:DiscordStaff:730664032419315773>',
        'DISCORD_PARTNER':'<:DiscordPartner:730664032675299358>',
        'HYPESQUAD_EVENTS':'<:HypeSquad:730664032096354406>',
        'HOUSE_BRAVERY':'<:HypeSquadBravery:730664032792608849>',
        'HOUSE_BRILLIANCE':'<:HypeSquadBrilliance:730664032423379004>',
        'HOUSE_BALANCE':'<:HypeSquadBalance:730664031937101921>',
        'EARLY_SUPPORTER':'<:DiscordNitroEarlySupporter:730664032662585414>',
        'TEAM_USER':'<:Team_User:740667003479785534>',
        'SYSTEM':'',
        'VERIFIED_BOT':'<:Bot_Verificado:754770315258757181>',
        'VERIFIED_DEVELOPER':'<:VerifiedBotDeveloper:730664032591413299>',
        'BUGHUNTER_LEVEL_1':'<:DiscordBugHunter:730664032305938444>',
        'BUGHUNTER_LEVEL_2':'<:9552_BugHunterLvl2:735355374999306311>',
    }

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
    .addField('> **Badges**', badges[algo], true)
    .addField('> **Cuenta creada el**', ':date: ' + usuario.user.createdAt.toLocaleDateString() + '\n (Hace ' + creada + ')', true)
    .addField('> **Se unio al servidor**', ':date: ' + usuario.joinedAt.toLocaleDateString() + '\n (Hace ' + unido + ')', true)
    .addField('> **Actividad**', ':video_game: ' + usuario.user.presence.activities[0], true)
    .addField('> **Numero de roles**', ':triangular_flag_on_post: ' + usuario.roles.cache.size, true)
    .addField('> **Servidores en comun**', ':desktop: ' + client.guilds.cache.filter(x => x.members.cache.find(x => x.user.id === usuario.user.id)).size, true)
    .addField('> **Roles**', `${usuario.roles.cache.map(x => x).join(" | ")}`)
    message.channel.send(embed)
}