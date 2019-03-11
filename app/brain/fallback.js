const tools = require('../tools')

let resBot = null
class Fallback {
  responDefault (msg, bot) {
    resBot = ['😥 Maaf saya tidak mengerti ka..', 'Maksudnya apa ka ? 🤔', 'Aku gak mudeng ka 🙄', 'Hmmm 🤔', 'Bingung saya 😵', 'Gak ngerti aku..😓', 'Ngomong apa sih ka ? 🙄']
    resBot = tools.responseVarian(resBot)
    bot.sendMessage(msg.chat.id, resBot, { reply_to_message_id: msg.message_id })
  }
  errorMessage (msg, bot) {
    resBot = 'Maaf terjadi kesahalan'
    bot.sendMessage(msg.chat.id, resBot, { reply_to_message_id: msg.message_id })
  }
}

const fallback = new Fallback()
module.exports = fallback
