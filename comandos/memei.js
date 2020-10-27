module.exports = async(client, message, args) => {
    const melphiworker = require('melphiworker')
    const meme_imagen = await melphiworker.meme_imagen()

    message.channel.send({files: [ meme_imagen ]})
}