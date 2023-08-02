const { Client, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder ,PermissionsBitField, Colors} = require('discord.js');
module.exports = (msg) => {
  const user = msg.guild.members.cache.get(msg.author.id)
  if(user.permissions.has(PermissionsBitField.Flags.Administrator)){
    const embed = new EmbedBuilder()
    .setTitle('Clan manager')
    .setDescription('`Night Glory clans` is a custom bot made for Night Glory server to help clan leaders and co-leaders to manage their clans permissions and members')
    .addFields(
      { name: 'How To Create Clan', value: "**`&create`** `<ownerclan>` `<roleclan>` `<nameclan>`\n**And How To Setup Voice And Chat clan**\n\n**`&voice`** `<idclan>` `<id voice clan>`\n\n**`&chat`** `<idclan>` `<id chat clan>`" },
      { name: 'How To Create Clan', value: "**`&create`** `<ownerclan>` `<roleclan>` `<nameclan>`\n**And How To Setup Voice And Chat clan**\n\n**`&voice`** `<idclan>` `<id voice clan>`\n\n**`&chat`** `<idclan>` `<id chat clan>`" },
    )
    .setColor(Colors.Red)
    .setThumbnail(msg.guild.iconURL())
    .setFooter({text: `Requested by ${msg.author.username}`, iconURL: msg.guild.iconURL()})
    .setTimestamp()
    const message = {embeds: [embed]};  
    msg.reply(message)
  }else{
    return;
  }
}