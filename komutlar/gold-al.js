const db = require('quick.db')

const Discord = require('discord.js')

const client = new Discord.Client();

exports.run = async (bot, message, args) => {

if(message.author.id !== "GOLD ALACAK YETKİLİ ID") if(message.author.id !== "GOLD ALACAK KİŞİNİN ID'Sİ") return message.channel.send({ content: "Bu komutu sadece sahiplerim kullanabilir." })
  
  let prex = args[0]

  if (!prex) return message.channel.send({ content: 'Bir kullanıcının IDsini girmelisin?' })
  
  

  db.delete(`prexgold${prex}`, 'gold')

  
  message.delete()
  message.channel.send({ content: `**<@${prex}>** Adlı Kullanıcı artık Gold Üye Değil` })

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'goldal',

  description: '[Admin Komutu]',

  usage: 'gold-al '

};
