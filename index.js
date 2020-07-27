const discord = require('discord.js');
const botConfig = require("./botconfig.json");
const version = 'v1.0.0';
const fs = require("fs");
const active = new Map();
const axios = require('axios')
const client = new discord.Client();
const superagent = require("superagent");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) return console.log(`[DCOM] No commands found. Try to Re-download the resource`);

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`\u001B[33m[DCOM] > Command Loaded > ${f}`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("message", function(message) {
  if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
  if(message.content.includes("https://")) {
      message.delete()
  }
});


bot.on("ready", async () => {


  console.log(`READY`)

});

bot.on('ready', () => {
  let index = 0;
  setInterval(() => {
    if (index == 0) {
      index = index + 1
      bot.user.setActivity(`${bot.users.cache.size} fans!`, { type: 'LISTENING' })
    }
    else if (index == 1) {
      bot.user.setActivity(`Anthonity op twitch!`, { type: 'WATCHING' })
      index = index + 1
    }
    else if (index == 2) {
      bot.user.setActivity(`!help`, { type: 'LISTENING' })
      index = index + 1      
    }
    else {
      bot.user.setActivity(`@mbonibba op instagram`, { type: 'WATCHING' })
      index = 0      
    }
  }, 5000);
});


bot.on("message", async message => {
  if (message.author.bot) return
  if (message.channel.type === "dm") return
  var messageArray = message.content.split(" ");
  var command = messageArray[0];
  var args = messageArray.slice(1);
  var commands = bot.commands.get(command.slice(" "));

  var options = {
    active: active
}
 
if (commands) commands.run(bot, message, args, options);

});







bot.login(process.env.token);