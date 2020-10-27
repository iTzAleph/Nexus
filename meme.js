module.exports = async(client, message, args) => {
    const melphiworker = require('melphiworker')
    const meme = await melphiworker.meme()
     
    message.channel.send({files: [ meme ]})
}