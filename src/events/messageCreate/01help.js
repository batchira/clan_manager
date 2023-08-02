const { Client, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder ,PermissionsBitField} = require('discord.js');
const showUserHelp = require('../../embeds/showUserHelp')
//const user = msg.guild.members.cache.get(msg.author.id)
//user.permissions.has(PermissionsBitField.Flags.Administrator)
module.exports = async (client, msg) => {
    if (msg.author.bot) return;
    if (msg.content == '&help'){
       showUserHelp(msg)
    }
};