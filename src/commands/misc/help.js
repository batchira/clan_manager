const { Client, EmbedBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');


module.exports = {
    name: 'help',
    description: 'ultimate clan master guide',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    deleted: Boolean,
  
    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
        .setTitle('ClanMaster - Help')
        .setDescription('Here are some of the amazing features that ClanMaster offers:')
        .setColor('#3498db')
        .addFields(
            { name: '🔧 Seamless Registration', value: 'New members can effortlessly join your clan by using our intuitive registration system. They can provide their in-game usernames, preferred games, and time zones, helping you build a comprehensive member roster.' },
            { name: '🎮 Roles and Permissions', value: 'Say goodbye to manual role assignment! ClanMaster automatically assigns roles based on registered games or member ranks, ensuring everyone has access to the right channels and info.' },
            { name: '📅 Events and Notifications', value: 'Planning events has never been this smooth! Schedule tournaments, meetings, or hangouts, and ClanMaster will notify members, increasing participation and coordination.' },
            { name: '🛡️ Moderation at Your Fingertips', value: 'Keep your server friendly and safe with ClanMaster\'s moderation features, tackling rule enforcement, profanity, and spam with ease.' },
            { name: '❓ Support and Helpdesk', value: 'Got questions? ClanMaster has answers! Our bot provides basic support, guiding members to the right resources when they need assistance.' }
        )
        //.setThumbnail('your_custom_thumbnail_url_here');
            /*
        const selectMenu = new SelectMenuOptionBuilder()
        .setCustomId('help_menu')
        .setPlaceholder('Select a topic')
        .addOptions([
            {
            label: 'How to create clan',
            value: 'how_to_create_clan',
            },
            {
            label: 'How to setup roles',
            value: 'how_to_setup_roles',
            },
            {
            label: 'Back to home help',
            value: 'back_to_home_help',
            },
            {
            label: 'How to setup banner and icon clan',
            value: 'how_to_setup_banner_icon_clan',
            },
        ]);

        const row = new ActionRowBuilder()
        .addComponents(selectMenu);
        */
        interaction.reply({ embeds: [embed]/*, components: [row] */});   
    },
  };