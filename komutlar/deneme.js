const Discord = require("discord.js")
exports.run = async (bot, message, args) => {
  let goldyok = db.fetch(`prexgold${message.author.id}`)
  if (!goldyok) return message.channel.send({ content: "Bu Komut Gold Üyeler için tasarlanmıştır" })

message.channel.send({ content: "Gold Üye Olduğun İçin Kullandın (Norw)" })
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'deneme',

  description: '',

  usage: 'deneme'

};
