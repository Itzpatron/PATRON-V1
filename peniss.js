const loadPlugins = (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(folder => {
const folderPath = path.join(directory, folder)
if (fs.lstatSync(folderPath).isDirectory()) {
const files = fs.readdirSync(folderPath)
files.forEach(file => {
const filePath = path.join(folderPath, file)
if (filePath.endsWith('.js')) {
delete require.cache[require.resolve(filePath)]
const plugin = require(filePath)
plugin.filePath = filePath
plugins.push(plugin)
}
})
}
})
return plugins
}

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
baklis,
fpoll,
pirgam,
penghitaman,
bakdok,
aipong,
joreply,
qcontact,
qloc2,
qloc,
qvideo,
qinvite,
qgif,
qtoko,
qtext,
qvn,
qdoc,
qpay,
ryobut,
ryobug,
ryovoice,
ryoreqphone,
qevent,
force2,
force,
dust,
loading,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
isGroup,
groupOwner,
isGroupOwner,
groupMembers,
prefixRegex,
prefix,
isCmd,
command,
args,
pushname,
text,
q,
fatkuns,
quoted,
mime,
qmsg,
isMedia,
botNumber,
itsMe,
orgkaya,
kontributor,
iniseller,
contacts,
isContacts,
isReseller,
isDeveloper,
isAfkOn,
dafontSearch,
dafontDown,
scp1,
ffstalk,
githubstalk,
npmstalk,
mlstalk,
textpro,
photooxy,
nulll,
mengkece,
overlaid,
overpix,
latx,
fakedoc,
fakejpg
}

let handled = false
for (const plugin of plugins) {
if (plugin.command === command) {
await plugin.operate(context)
handled = true
break
}
}

if (!handled) {
switch (command) {
case 'bijipler': {
m.reply('anjay')
}
break
default:
}
}