/*[-- require --]*/
const { 
	WAConnection,
	MessageType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { image } = MessageType
const msgHdlr = require('./msghdlr')
const welcome = require('./lib/welcome')
const { banner } = require('./lib/functions')
const { color } = require('./lib/color')
const moment = require("moment-timezone")
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	fake1,
	cr,
	BotPrefix,
	owner,
	authorbot,
	author,
	pack
} = settingan

const client = new WAConnection()
client.version = [2, 2199, 6];
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")

/*[-- first auth --]*/
async function auth() {
client.logger.level = 'warn'
console.log(banner.string)
client.on('qr', qr => {
   console.log(color(time,"white"),color('[','white'),color('∆','red'),color(']','white'),color('Qr code siap untuk scan','white'),color('AINE','green'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.on('connecting', () => {
	console.log(color(time,"white"),color("[STATUS]","green"), "Connecting...")
})
client.on('open', () => {
	console.log(color(time,"white"),color("[STATUS]", "green"), "Connected")
})
client.sendMessage(`${owner}@s.whatsapp.net`, `Successfully connected by Aine`, MessageType.text)
await client.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
}
/*[-- function --]*/
async function start(){
	client.on('group-participants-update', async (mem) => {
		await welcome(client, mem , image)
	})
	client.on('chat-update', async (mek) => {
		await msgHdlr(client , mek)
	})
}

auth()
start()
				
	
