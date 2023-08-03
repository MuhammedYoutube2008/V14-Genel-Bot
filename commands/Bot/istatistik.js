const { EmbedBuilder, Colors, version, ActionRowBuilder, ButtonBuilder, ButtonStyle, Guild } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("istatistik")
        .setDescription("Botun istatistik bilgilerini gösterir."),


    run: async (client, interaction) => {
        let ben = interaction.client.user
            , toplamram = os.totalmem()
            , boştaolanram = os.freemem()
            , kullanılanram = toplamram - boştaolanram
            , yüzde = (kullanılanram / toplamram * 100).toFixed(2)
            , shard = await interaction.client.shard.broadcastEval((client) => ({ sunucu: client.guilds.cache.size, kanal: client.channels.cache.size, kullanıcı: client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0), rol: client.guilds.cache.reduce((acc, guild) => acc + guild.roles.cache.size, 0), ramkullanımı: process.memoryUsage().heapUsed }))
            , ramkullanımı = shard.reduce((acc, shards) => acc + shards.ramkullanımı, 0)
            , sunucu = shard.map(a => a.sunucu).reduce((acc, guild) => acc + guild, 0)
            , kanal = shard.map(a => a.kanal).reduce((acc, kanal) => acc + kanal, 0)
            , kullanıcı = shard.map(a => a.kullanıcı).reduce((acc, kullanıcı) => acc + kullanıcı, 0)
            , rol = shard.map(a => a.rol).reduce((acc, rol) => acc + rol, 0)
        const Uptime = moment
            .duration(client.uptime)
            .format(" D [gün], H [saat], m [dakika], s [saniye]");
        const embed = new EmbedBuilder()
            .setTitle("Fr3zy Bot - İstatistik!")
            .setDescription(`
\`\`•\`\` **|** Sunucu Sayısı: ** ${sunucu.toLocaleString().replace(/\./g, ",")}**
\`\`•\`\` **|** Kullanıcı Sayısı: **${kullanıcı.toLocaleString().replace(/\./g, ",")}**
\`\`•\`\` **|** Kanal Sayısı: **${kanal.toLocaleString().replace(/\./g, ",")}**
\`\`•\`\` **|** Ping: **${client.ws.ping}**
\`\`•\`\` **|** Çalışma Süresi: **${Uptime}**
\`\`•\`\` **|** Bellek Kullanımı: **${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2)}Mb**
\`\`•\`\` **|** Cpu: **${os.cpus().map(i => `${i.model}`)[0]}**
\`\`•\`\` **|** Discord.JS: **14.11.0**
\`\`•\`\` **|** Geliştirici: <@963347002052214824>
\`\`•\`\` **|** Ortak: <@676836853801943081>
`)
            .setImage("https://media.discordapp.net/attachments/1004368050038001804/1086953067301310524/standard_1.gif")
        interaction.reply({ embeds: [embed] })
    }
};
