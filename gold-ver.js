const db = require('quick.db')

const Discord = require('discord.js')

const client = new Discord.Client();

const sayıyo = require("ms")

exports.run = async (bot, message, args) => {

if(message.author.id !== `980447664871178272`) if(message.author !== `917835705856708608`) return message.channel.send("Bu komutu sadece sahiplerim kullanabilir.")

  let prex = args[0]

  if (!prex) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
 
  let amin = args[1]
  .replace(`saniye`, `s`)
  .replace(`dakika`, `m`)
  .replace(`saat`, `h`)
  .replace(`gün`, `d`)
  

  db.set(`prexgold${prex}`, 'gold')

  
  message.delete()
  message.channel.send(`**<@${prex}>** Adlı kullanıcı artık ${amin} süresine kadar gold üye oldu!`)
setTimeout(function() {
  
  db.delete(`prexgold${prex}`, 'gold')
  message.channel.send(`Gold Süresi Doldu! <@${prex}>`)
   }, sayıyo(amin));

};


exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["gold-ver"],

  permLevel: 0

};

exports.help = {

  name: 'gold-ver',

  description: '[Admin Komutu]',

  usage: 'gold-ver <ID>'

};

