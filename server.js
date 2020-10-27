const Discord = require('discord.js');
const emoji = require('./emoji');

module.exports = (client, message, args) => {

        var server = message.guild;
    let guild = message.guild;
    region = {
        europe: ":flag_eu: Europa",
        brazil: ":flag_br: Brasil",
        hongkong: ":flag_hk: Hong Kong",
        japan: ":flag_jp: Japón",
        russia: ":flag_ru: Rusia",
        singapore: ":flag_sg: Singapur",
        southafrica: ":flag_za: Sudáfrica",
        sydney: ":flag_au: Sydney",
        "us-central": ":flag_us: Central US",
        "us-east": ":flag_us: Este US",
        "us-south": ":flag_us: Sur US",
        "us-west": ":flag_us: Oeste US",
        "vip-us-east": ":flag_us: VIP US Este",
        "eu-central": ":flag_eu: Europa Central",
        "eu-west": ":flag_eu: Europa Oeste",
        london: ":flag_gb: London",
        amsterdam: ":flag_nl: Amsterdam",
        india: ":flag_in: India"
        };

        const moment = require("moment");
        require('moment-duration-format');

        const creado = moment.duration(Date.now() - server.createdAt).format("D [dias]");

    let embed = new Discord.MessageEmbed()
        .setAuthor(server.name, server.iconURL())
        .setThumbnail(server.iconURL({dynamic: true}))
        .setColor('RANDOM')
        .setFooter('Pedido por ' + message.author.username)
        .addField('> **ID**', server.id)
        .addField('> **Region**', `${region[guild.region]}`)
        .addField('> **Creado el**', ':calendar: ' + server.createdAt.toLocaleDateString() + ' (Hace ' + creado + ')')
        .addField('> **Dueño**', ':crown: ' + server.owner.user.tag + ' (' + server.owner.id + ')')
        .addField('> **Miembros**', ':mens: ' + server.memberCount, true)
        .addField('> **Roles**', ':triangular_flag_on_post: ' + server.roles.cache.size, true)
        .addField('> **Canales**', ':speech_left: ' + server.channels.cache.size, true)
    message.channel.send(embed);
}