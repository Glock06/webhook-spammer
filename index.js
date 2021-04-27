const Discord = require('discord.js');
const config = require('./config.json');

const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);



const embed = new Discord.MessageEmbed()
    .setTitle('config.embedtitle)
    .setDescription(config.embedtext)
    .setImage(config.embedimage)
    .setColor(config.embedcolor)


while(true){
    webhookClient.send('@everyone', {
        username: config.username,
        avatarURL: config.avatar,
        embeds: [embed],
    });

}

    




