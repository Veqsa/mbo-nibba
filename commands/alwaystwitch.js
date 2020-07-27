const Discord = require('discord.js')
var fs = require('fs');

module.exports.run = async(bot, message, args) => {


    message.delete()

    const twitchLink = new Discord.MessageEmbed()
        .setDescription(`**Hey <@${message.author.id}> wilt dat iedereen Anthonity volgt op twitch!** \n Dan ontvang je de @Twitch Follower role! \n \n https://www.twitch.tv/anthonity`)
        .setColor('#33ccff')
    message.channel.send(twitchLink)

}


module.exports.help = {
    name: ">atwitch"
}