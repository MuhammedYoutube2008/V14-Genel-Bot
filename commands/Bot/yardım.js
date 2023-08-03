const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("yardım")
        .setDescription("Botun yardım menüsünü gösterir."),

    run: async (client, interaction) => {


        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('help_menu')
                    .setPlaceholder('Hiçbir şey seçilmedi')
                    .addOptions(
                        {
                            label: 'Ana Menü',
                            description: 'Ana menüye geri dönersin.',
                            emoji: "📙",
                            value: 'home_option',
                        },
                        {
                            label: 'Bot Menüsü',
                            description: 'Bot ile ilgili yardım menüsünü gösterir.',
                            emoji: "📘",
                            value: 'bot_option',
                        },
                        {
                            label: 'Moderasyon Menüsü',
                            description: 'Koruma ile ilgili yardım menüsünü gösterir.',
                            emoji: "📗",
                            value: 'moderation_option',
                        },
                        {
                            label: 'Kullanıcı Menüsü',
                            description: 'Kullanıcı ile ilgili yardım menüsünü gösterir.',
                            emoji: "📕",
                            value: 'user_option',
                        },
                    ),
        );
        
        client.on("interactionCreate", async (interaction2) => {
            if (interaction2.user.id != interaction.user.id) return; 
            if (!interaction2.isStringSelectMenu()) return;


            const value = interaction2.values

            if (value[0] === "home_option") {



                const embed = new EmbedBuilder()
                    .setColor("#5865F2")
                    .setTitle(`${client.user.username} - Yardım Menüsü!`)
                    .setThumbnail(interaction2.user.displayAvatarURL({ dynamic: true }))
                    .addFields(
                        { name: '/yardım', value: 'Yardım Menüsünü Gösterir.', inline: true },
                        { name: '/davet', value: 'Botun Davet Linklerini Gösterir.', inline: true },
                        { name: '/istatistik', value: 'Botun İstatistiklerini Gösterir.', inline: true },
                    )
                    .setFooter({ text: `${interaction2.user.tag} tarafından istendi.`, iconURL: interaction2.user.displayAvatarURL({ dynamic: true }) })
                    .setTimestamp()

                interaction2.update({ embeds: [embed], components: [row] })
            }

            if (value[0] === "bot_option") {



                const embed = new EmbedBuilder()
                    .setColor("#5865F2")
                    .setTitle(`${client.user.username} - Yardım Menüsü!`)
                    .setThumbnail(interaction2.user.displayAvatarURL({ dynamic: true }))
                    .addFields(
                        { name: '/davet', value: 'Botun davet linkini gösterir.', inline: true },
                        { name: '/istatistik', value: 'Botun istatistiklerini gösterir.', inline: true },
                        { name: '/ping', value: 'Botun gecikmesini gösterir.', inline: true },
                        { name: '/shard', value: 'Botun shard bilgilerini gösterir.', inline: true },
    
                )
                    .setFooter({ text: `${interaction2.user.tag} tarafından istendi.`, iconURL: interaction2.user.displayAvatarURL({ dynamic: true }) })
                    .setTimestamp()

                interaction2.update({ embeds: [embed], components: [row] })
            }

            if (value[0] === "moderation_option") {


                const embed = new EmbedBuilder()
                    .setColor("#5865F2")
                    .setTitle(`${client.user.username} - Moderasyon Yardım Menüsü!`)
                    .setThumbnail(interaction2.user.displayAvatarURL({ dynamic: true }))
                    .addFields(
                        { name: '/ban', value: 'Belirtilen kullanıcıyı sunucudan banlarsın.', inline: true },
                        { name: '/unban', value: 'Belirtilen idli kullanıcının banı varsa banını kaldırır.', inline: true },
                        { name: '/nuke', value: 'Kanalı silip yeniden oluşturur.', inline: true },
                        { name: '/küfür-engel', value: 'Sunucuda küfür engel sistemini açar.', inline: true },
                        { name: '/reklam-engel', value: 'Sunucuda reklam engel sistemini açar.', inline: true },
                        { name: '/kick', value: 'Belirtilen kullanıcıyı sunucudan atarsın.', inline: true },
                        { name: '/rol ver', value: 'Belirtilen kişiye belirtilen rolü verir.', inline: true },
                        { name: '/rol al', value: 'Belirtilen kişiden belirtilen rolü alır.', inline: true },
                        { name: '/sil', value: 'Belirttiğiniz kadar mesaj siler.', inline: true },
                    )
                    .setFooter({ text: `${interaction2.user.tag} tarafından istendi.`, iconURL: interaction2.user.displayAvatarURL({ dynamic: true }) })
                    .setTimestamp()

                interaction2.update({ embeds: [embed], components: [row] })
            }

            if (value[0] === "user_option") {
                const embed = new EmbedBuilder()
                    .setColor("#5865F2")
                    .setTitle(`${client.user.username} - Yardım Menüsü!`)
                    .setThumbnail(interaction2.user.displayAvatarURL({ dynamic: true }))
                    .addFields(
                        { name: '/afk', value: 'AFK Olursun.', inline: true },
                        { name: '/sunucu-bilgi', value: 'Sunucunun bilgilerini gösterir.', inline: true },
                        { name: '/kullanıcı-bilgi', value: 'Belirtilen kullanıcının bilgilerini gösterir.', inline: true },
                        { name: '/yardım', value: 'Botun yardım menüsünü gösterir.', inline: true },
                        { name: '/avatar', value: 'Kendinizin veya bir başkasının profil fotoğrafını görüntülersiniz.', inline: true },
                        { name: '/emojiler', value: 'Sunucuda bulunan emojileri listeler.', inline: true },
                        { name: '/çeviri', value: 'Çeviri yaparsın.', inline: true },

                    )
                    .setFooter({ text: `${interaction2.user.tag} tarafından istendi.`, iconURL: interaction2.user.displayAvatarURL({ dynamic: true }) })
                    .setTimestamp()

                interaction2.update({ embeds: [embed], components: [row] })
            }
        })
        
        const embed = new EmbedBuilder()
            .setColor("#5865F2")
            .setTitle(`${client.user.username} - Yardım Menüsü!`)
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: '/yardım', value: 'Yardım Menüsünü Gösterir.', inline: true },
                { name: '/davet', value: 'Botun Davet Linklerini Gösterir.', inline: true },
                { name: '/istatistik', value: 'Botun İstatistiklerini Gösterir.', inline: true },
            )
            .setFooter({ text: `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

        interaction.reply({ embeds: [embed], components: [row] });


        const suredoldu = new EmbedBuilder()
        .setDescription(`Süre doldu reis !`)

        const editMessageAfterTimeout = () => {
            interaction.editReply({
                embeds: [suredoldu],
                components: []
            }).catch(() => { return })
        };

        setTimeout(editMessageAfterTimeout, 300000);

    },
};