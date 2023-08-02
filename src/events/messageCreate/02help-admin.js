const showAdminHelp = require('../../embeds/showAdminHelp')
module.exports = async (client, msg) => {
    if (msg.author.bot) return;
    if (msg.content == '&help-admin'){
       showAdminHelp(msg)
    }
};