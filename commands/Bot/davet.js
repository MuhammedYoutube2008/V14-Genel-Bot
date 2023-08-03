const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("davet")
        .setDescription("Botun davet linklerini gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("Fr3zy Bot - İstatistik!")
            .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setImage("https://media.discordapp.net/attachments/1004368050038001804/1086953067301310524/standard_1.gif")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.com/oauth2/authorize?client_id=1123355704959443025&scope=bot&permissions=8"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.gg/d4a9Knkd8z"),
                new ButtonBuilder()
                    .setLabel("Oy Ver")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://top.gg/tr/bot/1123355704959443025")

            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};
