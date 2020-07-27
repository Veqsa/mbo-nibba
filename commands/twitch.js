const Discord = require('discord.js')
var fs = require('fs');

module.exports.run = async(bot, message, args) => {

//  if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You're not permitted to use that command!")

    message.delete()

    const twitchLink = new Discord.MessageEmbed()
        .setDescription(`**Hey <@${message.author.id}> volg Anthonity op twitch!** \n en ontvang de @Twitch Follower role! \n \n https://www.twitch.tv/anthonity`)
        .setColor('#33ccff')
    const sentMessage = await message.channel.send(twitchLink);
    sentMessage.delete({ timeout: 10000 });

}


module.exports.help = {
    name: ">twitch"
}