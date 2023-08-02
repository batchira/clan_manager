const { Client, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder ,PermissionsBitField, Colors} = require('discord.js');
//const user = msg.guild.members.cache.get(msg.author.id)
//user.permissions.has(PermissionsBitField.Flags.Administrator)
module.exports = (msg) => {
  const embed = new EmbedBuilder()
    .setTitle('Clan manager')
    .setDescription('`Night Glory clans` is a custom bot made for Game Night server to help clan leaders and co-leaders to manage their clans permissions and members')
    .addFields(
      { name: 'For Clan leaders', value: "**send a message to all clan members dms**\n`&dmclan <message>`\n\n**Move all your clan members to your voice channel**\n`&moveclan`\n\n" },
      { name: 'For Clan leaders and co-leaders', value: '**Send you the list of your clan members in your dms**\n`&clanmembers`\n\n**Add a user to your clan members (As long as the other person agrees)**\n`&add <id/user>`\n\n**Remove a user from your clan members**\n`&remove <id/user>`\n\n**Give permission to view the chat to a member (an only be used on your chat clan)**\n`&allow user <id/user>`\n\n**Remove the permission to view the chat from a member (can only be used on your chat clan)**\n`&deny user <id/user>`\n\n**Give permission to view the chat of your clan to another clan (an only be used on your chat clan) (in events between clans for example)**\n`&allow role <id/role>`\n\n**Remove the permission to view the chat of your clan to another clan (can only be used on your chat clan)**\n`&deny role <id/role>`' },
    )
    .setColor(Colors.Green)
    .setThumbnail(msg.guild.iconURL())
    .setFooter({text: `Requested by ${msg.author.username}`, iconURL: msg.guild.iconURL()})
    .setTimestamp()
  msg.reply({ embeds: [embed]})
}