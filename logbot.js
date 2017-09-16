const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./config.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Loglar yukleniyor lutfen bekleyin...`);
});


  
  client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} A: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;
  });
  
  
  

  

client.login(config.token);
        