const Discord = require('discord.js')
var fs = require('fs');

module.exports.run = async(bot, message, args) => {

//  if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You're not permitted to use that command!")

    message.delete()

    const helpMsg = new Discord.MessageEmbed()
        .setDescription(`**Hey <@${message.author.id}> dit zijn al mijn commands!** \n \n 🎉 **Twitch** \n >twitch `)
        .setColor('#33ccff')
    const sentMessage = await message.channel.send(helpMsg);
    sentMessage.delete({ timeout: 10000 });

}


module.exports.help = {
    name: ">help"
}