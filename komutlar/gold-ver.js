const db = require('quick.db')

const Discord = require('discord.js')

const client = new Discord.Client();

const sayıyo = require("ms")

exports.run = async (bot, message, args) => {

if(message.author.id !== `GOLD YETKİLİ ID`) if(message.author !== `917835705856708608`) return message.channel.send({ content: "Bu komutu sadece sahiplerim kullanabilir." })

  let prex = args[0]

  if (!prex) return message.channel.send({ content: '**Sahipim Lütfen Gold Verilecek Kişinin Id'sini Gönder.**' })
 
  let norw = args[1]
  .replace(`saniye`, `s`)
  .replace(`dakika`, `m`)
  .replace(`saat`, `h`)
  .replace(`gün`, `d`)
  

  db.set(`prexgold${prex}`, 'gold')

  
  message.delete()
  message.channel.send({ content: `**<@${prex}>** Adlı kullanıcı artık ${norw} süresine kadar gold üye oldu!` })
setTimeout(function() {
  
  db.delete(`prexgold${prex}`, 'gold')
  message.channel.send({ content: `Gold Süresi Doldu! <@${prex}>` })
   }, sayıyo(norw));

};


exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["goldver"],

  permLevel: 0

};

exports.help = {

  name: 'gold-ver',

  description: '[Admin Komutu]',

  usage: 'gold-ver '

};
