/*============== Jangan di ganti! ==============*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*PILIHAN STORE*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya1)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Store Jadibot',
               url: 'https://wa.me/p/5157541794323439/6285828377610'
             }

           },
                {
               urlButton: {
               displayText: 'Store Run Bot',
               url: 'https://wa.me/p/5195315473908561/6285828377610'
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(pilihanstore|.pilihanstore)$/i
handler.command = new RegExp
handler.help = ['.pilihanstore']
module.exports = handler
