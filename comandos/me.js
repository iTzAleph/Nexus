module.exports = (client, message, args) => {
    let texto = args.join(' ');
    if(message.deletable) message.delete();
    if(!texto) return message.channel.send('Debe escribir lo que esta haciendo');
    message.channel.send(`**${message.author.username}** *${texto}*`)
}