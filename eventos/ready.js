module.exports = (client) => {

    client.user.setPresence( 
        {
        status: "online",
        activity: {
            name: `nx!help | ${client.config.vercion} | ${client.guilds.cache.size} servidores.`,
            type: "PLAYING"
            }
        }
    );

}