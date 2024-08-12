const axios = require("axios");
const fetch = require("node-fetch");

module.exports = {
    type: 'openai',
    command: 'animdif',
    operate: async (context) => {
        const { ryozingod, m, q, joreply, prefix, command } = context;
        if (!q) return joreply(`*Example*:\n${prefix+command} 1girl, long hair, solo, choker, bare shoulders, blue eyes, fang, looking at viewer, upper body, White hair, blush, closed mouth, off shoulder, bangs, bow, collarbone, 4k`);
        
        async function animedif(data) {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/Ojimi/anime-kawai-diffusion",
                {
                    headers: { Authorization: "Bearer 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" },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );
            const result = await response.blob();
            let arrayBuffer = await result.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer, 'base64');
            return buffer;
        }

        await joreply(mess.wait);
        let penis = await animedif(q);
        ryozingod.sendFile(m.chat, penis, 'anu.jpg', `Result From : ${q}`, m);
    }
};