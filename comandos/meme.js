module.exports = async(client, message, args) => {
    const melphiworker = require('melphiworker')
    let memes = await melphiworker.memes()
     
    message.channel.send({files: [ memes ]})
}