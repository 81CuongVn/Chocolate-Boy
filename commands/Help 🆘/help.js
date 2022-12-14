const {
   MessageActionRow,
   MessageButton,
   MessageEmbed,
   MessageSelectMenu,
   Permissions
} = require("discord.js");
const fs = require("fs");
const {
   NeedHelpButtons,
   NeedHelpMenu,
   commandsData
} = require('../../functions/help_functions.js');
module.exports = {
   name: 'help',
   aliases: ['h','help me','komak'],
   category: 'Help š',
   usage: '[command-name]',
   description:'this shows you bot commands and categorys to help you.',
   cooldown: 2,
  async execute(client, message, args, prefix){
//======== Embeds
 function commandsData(commands){
      const content = commands.map(i => '`' + prefix + i.name + '`').join(' , ')
      let returned = '**' + content + '**';
      return returned
    }
  let help = new MessageEmbed()
   .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
   .setTitle(`${client.user.username} Help Commands :)`)
   .setURL(client.config.discord.server_support)
   .setFooter({ text: `Message Guild ${message.guild.name} | Made by Mr.SIN RE#1528 |`, iconURL: `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`})
   .setAuthor({ name: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }), url: '' })
   .setColor(client.colors.none)
   .setDescription(`**this embed show you bot commands and categorys.\nš§°| Commands Count: \n${client.emotes.reply}\`${client.commands.size}\`\nš§®| Category Count: \n${client.emotes.reply}\`${client.categories.size}\`**`)
   .addField(
         'Help š', 
         `${commandsData(client.commands.filter(c => c.category === 'Help š'))}`,
         false
   )
   .addField(
         'Infos š', 
         `${commandsData(client.commands.filter(c => c.category === 'Infos š'))}`,
         false
   )
   .addField(
         'Member š»', 
         `${commandsData(client.commands.filter(c => c.category === 'Member š»'))}`,
         false
   )
   .addField(
         'Setup š»', 
         `${commandsData(client.commands.filter(c => c.category === 'Setup š»'))}`,
         false
   )
   .addField(
         'Moderation šæ', 
         `${commandsData(client.commands.filter(c => c.category === 'Moderation šæ'))}`,
         false
   )
   .addField(
         'Ticket š«', 
         `${commandsData(client.commands.filter(c => c.category === 'Ticket š«'))}`,
         false
   )
   .addField(
         'Giveaway š', 
         `${commandsData(client.commands.filter(c => c.category === 'Giveaway š'))}`,
         false
   )
   .addField(
         'Music š¶', 
         `${commandsData(client.commands.filter(c => c.category === 'Music š¶'))}`,
         false
   )
   .addField(
         'Fun š­', 
         `${commandsData(client.commands.filter(c => c.category === 'Fun š­'))}`,
         false
   )
   .addField(
         'Nsfw š', 
         `${commandsData(client.commands.filter(c => c.category === 'Nsfw š'))}`,
         false
   )
   .addField(
         'VIP š', 
         `${commandsData(client.commands.filter(c => c.category === 'VIP š'))}`,
         false
   )
   .addField(
         'Owner š', 
         `${commandsData(client.commands.filter(c => c.category === 'Owner š'))}`,
         false
    )
   .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
   .setTimestamp()
   .addField('Important Links', `**[Invite Me](${client.config.discord.invite}) | [Support Server](${client.config.discord.server_support||"https://discord.gg/5GYNec4urW"})**`,false)
   const btn_1 = new MessageButton()
      .setStyle('LINK')
      .setLabel('Invite Me')
      .setEmoji('š¤')
      .setURL(client.config.discord.invite)    
  const btn_2 = new MessageButton()
    .setStyle('LINK')
    .setLabel('Support Server!')
    .setEmoji('š§°')
    .setURL(`${client.config.discord.server_support||"https://discord.gg/5GYNec4urW"}`) 
    const row_1 = new MessageActionRow()
    .addComponents([btn_1],[btn_2])
 if (args[0]) {
  const cmd = client.commands.get(args[0].toLowerCase());
      if (!cmd || !cmd.name||!cmd.aliases) {
        return message.reply(`**${client.emotes.error}| It seems like \`${args[0].toLowerCase()}\` is not a valid command! Please try Again!**`)
      }
   const embed = new MessageEmbed()
      .setColor(client.colors.none)
      .addField('Name', cmd.name)
      .addField('Description', cmd.description || 'No Description provided!')
      .addField('Aliase(s)', cmd.aliases.map((a) => `**\`${a}\`**`).join(", ") || 'No Aliases provided!')
      .setFooter({ text: `${client.user.username} Help || more info ${prefix}help || Made by Mr.SIN RE#1528 |`, iconURL: `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`})
      .setAuthor({ name: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }), url: '' })
      .addField('Important Links', `**[Invite Me](${client.config.discord.invite}) | [Support Server](${client.config.discord.server_support}||https://discord.gg/5GYNec4urW)**`)
     if (cmd.usage) {
      var usages = cmd.usage.split('\n').map(i => { return i})
       if (cmd.cooldown) embed.addField('Cooldown', `**\`${cmd.cooldown} Seconds\`**`)
        embed.addField('Usage', `**\`${usages.join('` \n`')}\`**`)
     }
  
    return message.reply({ 
             embeds: [embed], 
             components: [row]
            })
    }

  const row = new MessageActionRow()
    .addComponents([
      new MessageSelectMenu()
        .setCustomId("help_menu")
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder("š| Click me to show bot commands !!")
        .addOptions([
              {
                label: 'Infos Help',
                value: 'inf',
                description: 'send commands of Infosš Category',
                emoji: {
                  name: 'š',
                },
            },
            {
                label: 'Member Help',
                value: 'meb',
                description: 'send commands of Memberš» Category',
                emoji: {
                  name: 'š»',
                },
            },
            {
                label: 'Setup Help',
                value: 'stp',
                description: 'send commands of Setupš» Category',
                emoji: {
                  name: 'š»',
                },
            },
            {
                label: 'Moderation Help',
                value: 'mod',
                description: 'send commands of Moderationšæ Category',
                emoji: {
                  name: 'šæ',
                },
            },
            {
                label: 'Ticket Help',
                value: 'tic',
                description: 'send commands of Ticketš« Category',
                emoji: {
                  name: 'š«',
                },
            },
            {
                label: 'Giveaway Help',
                value: 'giv',
                description: 'send commands of Giveawayš Category',
                emoji: {
                  name: 'š',
                },
            },
            {
                label: 'Music Help',
                value: 'mus',
                description: 'send commands of Musicš¶ Category',
                emoji: {
                  name: 'š¶',
                },
            },
            {
                label: 'Fun Help',
                value: 'fun',
                description: 'send commands of Funš­ Category',
                emoji: {
                  name: 'š­',
                },
            },
            {
                label: 'Nsfw Help',
                value: 'nsw',
                description: 'send commands of Nsfwš Category',
                emoji: {
                  name: 'š',
                },
            },
            {
                label: 'VIP Help',
                value: 'vip',
                description: 'send commands of VIPš Category',
                emoji: {
                  name: 'š',
                },
            },
              {
                label: 'Owner Help',
                value: 'owr',
                description: 'send commands of Ownerš Category',
                emoji: {
                  name: 'š',
                },
            },
        ])
  ])
   return message.reply({ 
            embeds: [help],
            components: [row,row_1]
          })
          
   }
}
/**
 * @INFO
 * Bot Coded by Mr.SIN RE#1528 :) | https://dsc.gg/sizar-team
 * @INFO
 * Work for SIZAR Team | https://dsc.gg/sizar-team
 * @INFO
 * Please Mention Us SIZAR Team, When Using This Code!
 * @INFO
 */