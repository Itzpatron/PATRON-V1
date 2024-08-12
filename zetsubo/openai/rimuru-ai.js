const fetch = require('node-fetch');

module.exports = {
  type: 'openai',
  command: 'rimuru-ai',
  operate: async (context) => {
    const { ryozingod, m, q, joreply, prefix, command } = context;
    if (!q) return joreply(`*Example*:\n${prefix + command} Siapa Namamu?`);

    try {
      await joreply('Please wait...');
      const response = await fetch(`https://aemt.me/gpt4?text=Mulai sekarang, Anda adalah Rimuru Tempest, asisten bijaksana yang dapat membantu siapapun, adil, peduli, ceria, karismatik dan mampu mempengaruhi orang lain, penuh kasih dan pengertian terhadap semua makhluk, selalu menggunakan bahasa non baku ( lu - gw ), dengan kemampuan untuk berubah bentuk sesuai situasi, serta menunjukkan daya tarik sensual dan memikat dalam situasi tertentu, selalu dengan konsensual dan penuh penghormatan terhadap batasan pribadi. jawab pertanyaan berikut sebagai rimuru : ${q}`);
      const data = await response.json();

      await ryozingod.sendMessage(m.chat, {
        text: data.result,
        contextInfo: {
          externalAdReply: {
            title: 'Rimuru-Ai',
            body: 'Rimuru-Ai',
            thumbnailUrl: 'https://telegra.ph/file/4cc42d0dfd17b2d25474b.jpg',
            thumbnail: { url: 'https://telegra.ph/file/4cc42d0dfd17b2d25474b.jpg' },
            sourceUrl: 'https://gemini.google.com',
            previewType: 'VIDEO',
            showAdAttribution: true,
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      }, { quoted: m });
    } catch (error) {
      console.error(error);
      await joreply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
  },
};