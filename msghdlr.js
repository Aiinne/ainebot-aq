/*[-- require hdlr --]*/
const {
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    ChatModification,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    relayWAMessage,
    prepareMessageFromContent,
    waChatKey,
    mentionedJid,
    processTime,
    Browser
} = require('@adiwajshing/baileys');
const moment = require("moment-timezone") 
const speed = require('performance-now')
const request = require('request')
const fs = require("fs") 
const util = require('util')
const fetch = require('node-fetch')
const os = require('os')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api")
const googleImage = require('g-i-s')
const emoji = new EmojiAPI()
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { jadibot, stopjadibot } = require('./jadibot.js')
const { color, bgcolor } = require('./lib/color')
const { pinterest } = require('./lib/pinterest')
const { wikiSearch } = require('./lib/wiki.js')
const { donasi } = require('./lib/donasi')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { randompict } = require('./lib/randompict')
const { menufun } = require('./lib/menufun')
const { menumaker } = require('./lib/menumaker')
const { menustorage } = require('./lib/menustorage')
const { developer } = require('./lib/developer')
const { menugrup } = require('./lib/menugrup')
const { fetchJson, getBase64, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { webp2mp4File } = require('./lib/webp2mp4')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const cd = 4.32e+7
const { ind } = require('./language')
const a = '```'
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const tttawal = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
nana = []
const X = "❌"
const O = "⭕️"
const tunjuk = "👈"

/*[-- Load setting --]*/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	fake1,
	cr,
	BotPrefix,
	owner,
	authorbot,
	numberbot,
	author,
	pack
} = settingan

/*[-- manual load --]*/
const ownerNumber = `${owner}@s.whatsapp.net`
const developerNumber = `${authorbot}@s.whatsapp.net`
const aineNumber = `${numberbot}@s.whatsapp.net`
prefix = BotPrefix
limitawal = 1000000
memberlimit = 0
shape = '⬡'
nomornye = '0'
blocked = []
hit_today = []
publik = false
baterai = {
    baterai: 0,
    cas: false
}

/*[-- load function --]*/
/*[-> level <-]*/
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

/*[-> register <-]*/
const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./lib/register.js')

/*[-> ATM & Limit <-]*/
const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd
} = require('./lib/limitatm.js')

/*[-> total cmd <-]*/
const {
	cmdadd
} = require('./lib/totalcmd.js')
	
/*[-- VCARD --]*/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Owner Bot\n' 
            + `ORG:Run Bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${owner}:${PhoneNumber('+' + owner).getNumber('international')}\n` 
            + 'END:VCARD'

const vcard3 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Developer\n' 
            + `ORG:Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${authorbot}:${PhoneNumber('+' + authorbot).getNumber('international')}\n` 
            + 'END:VCARD'
const vcard4 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Developer\n' 
            + `ORG:Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${numberbot}:${PhoneNumber('+' + numberbot).getNumber('international')}\n` 
            + 'END:VCARD'

/*[-- load file --]*/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const afk = JSON.parse(fs.readFileSync('./database/group/afk.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/group/autosticker.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antispam = JSON.parse(fs.readFileSync('./database/group/antispam.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const antivirtexx = JSON.parse(fs.readFileSync('./database/group/antivirtexx.json'))
const antivirtexxx = JSON.parse(fs.readFileSync('./database/group/antivirtexxx.json'))
const antiig = JSON.parse(fs.readFileSync('./database/group/antiig.json'))
const antiigg = JSON.parse(fs.readFileSync('./database/group/antiigg.json'))
const antiyt = JSON.parse(fs.readFileSync('./database/group/antiyt.json'))
const antiytt = JSON.parse(fs.readFileSync('./database/group/antiytt.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const wakil = JSON.parse(fs.readFileSync('./database/user/adm.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const sfilter = JSON.parse(fs.readFileSync('./database/group/sfilter.json'))
let filter = JSON.parse(fs.readFileSync('./database/group/filter.json'))
let banchat = JSON.parse(fs.readFileSync('./database/group/banchat.json'))


/*[-- function --]*/
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

/HARI/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var jamNow = date.getHours();
var menitNow = date.getMinutes();
var detikNow = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
 switch(jams){
                case 0: jams = "Malam"; break;
                case 1: jams = "Malam"; break;
                case 2: jams = "Malam"; break;
                case 3: jams = "Pagi"; break;
                case 4: jams = "Pagi"; break;
                case 5: jams = "Pagi"; break;
                case 6: jams = "Pagi"; break;
                case 7: jams = "Pagi"; break;
                case 8: jams = "Pagi"; break;
                case 9: jams = "Pagi"; break;
                case 10: jams = "Pagi"; break;
                case 11: jams = "Siang"; break;
                case 12: jams = "Siang"; break;
                case 13: jams = "Siang"; break;
                case 14: jams = "Siang"; break;
                case 15: jams = "Sore"; break;
                case 16: jams = "Sore"; break;
                case 17: jams = "Sore"; break;
                case 18: jams = "Malam"; break;
                case 19: jams = "Malam"; break;
                case 20: jams = "Malam"; break;
                case 21: jams = "Malam"; break;
                case 22: jams = "Malam"; break;
                case 23: jams = "Malam"; break;
            }
switch(jamNow){
                case 0: jamNow = "00"; break;
                case 1: jamNow = "01"; break;
                case 2: jamNow = "02"; break;
                case 3: jamNow = "03"; break;
                case 4: jamNow = "04"; break;
                case 5: jamNow = "05"; break;
                case 6: jamNow = "06"; break;
                case 7: jamNow = "07"; break;
                case 8: jamNow = "08"; break;
                case 9: jamNow = "09"; break;
                case 10: jamNow = "10"; break;
                case 11: jamNow = "11"; break;
                case 12: jamNow = "12"; break;
                case 13: jamNow = "13"; break;
                case 14: jamNow = "14"; break;
                case 15: jamNow = "15"; break;
                case 16: jamNow = "16"; break;
                case 17: jamNow = "17"; break;
                case 18: jamNow = "18"; break;
                case 19: jamNow = "19"; break;
                case 20: jamNow = "20"; break;
                case 21: jamNow = "21"; break;
                case 22: jamNow = "22"; break;
                case 23: jamNow = "23"; break;
            }
switch(menitNow){
                case 0: menitNow = "00"; break;
                case 1: menitNow = "01"; break;
                case 2: menitNow = "02"; break;
                case 3: menitNow = "03"; break;
                case 4: menitNow = "04"; break;
                case 5: menitNow = "05"; break;
                case 6: menitNow = "06"; break;
                case 7: menitNow = "07"; break;
                case 8: menitNow = "08"; break;
                case 9: menitNow = "09"; break;
                case 10: menitNow = "10"; break;
                case 11: menitNow = "11"; break;
                case 12: menitNow = "12"; break;
                case 13: menitNow = "13"; break;
                case 14: menitNow = "14"; break;
                case 15: menitNow = "15"; break;
                case 16: menitNow = "16"; break;
                case 17: menitNow = "17"; break;
                case 18: menitNow = "18"; break;
                case 19: menitNow = "19"; break;
                case 20: menitNow = "20"; break;
                case 21: menitNow = "21"; break;
                case 22: menitNow = "22"; break;
                case 23: menitNow = "23"; break;
                case 24: menitNow = "24"; break;
                case 25: menitNow = "25"; break;
                case 26: menitNow = "26"; break;
                case 27: menitNow = "27"; break;
                case 28: menitNow = "28"; break;
                case 29: menitNow = "29"; break;
                case 30: menitNow = "30"; break;
                case 31: menitNow = "31"; break;
                case 32: menitNow = "32"; break;
                case 33: menitNow = "33"; break;
                case 34: menitNow = "34"; break;
                case 35: menitNow = "35"; break;
                case 36: menitNow = "36"; break;
                case 37: menitNow = "37"; break;
                case 38: menitNow = "38"; break;
                case 39: menitNow = "39"; break;
                case 40: menitNow = "40"; break;
                case 41: menitNow = "41"; break;
                case 42: menitNow = "42"; break;
                case 43: menitNow = "43"; break;
                case 44: menitNow = "44"; break;
                case 45: menitNow = "45"; break;
                case 46: menitNow = "46"; break;
                case 47: menitNow = "47"; break;
                case 48: menitNow = "48"; break;
                case 49: menitNow = "49"; break;
                case 50: menitNow = "50"; break;
                case 51: menitNow = "51"; break;
                case 52: menitNow = "52"; break;
                case 53: menitNow = "53"; break;
                case 54: menitNow = "54"; break;
                case 55: menitNow = "55"; break;
                case 56: menitNow = "56"; break;
                case 57: menitNow = "57"; break;
                case 58: menitNow = "58"; break;
                case 59: menitNow = "59"; break;
            }

switch(detikNow){
                case 0: detikNow = "00"; break;
                case 1: detikNow = "01"; break;
                case 2: detikNow = "02"; break;
                case 3: detikNow = "03"; break;
                case 4: detikNow = "04"; break;
                case 5: detikNow = "05"; break;
                case 6: detikNow = "06"; break;
                case 7: detikNow = "07"; break;
                case 8: detikNow = "08"; break;
                case 9: detikNow = "09"; break;
                case 10: detikNow = "10"; break;
                case 11: detikNow = "11"; break;
                case 12: detikNow = "12"; break;
                case 13: detikNow = "13"; break;
                case 14: detikNow = "14"; break;
                case 15: detikNow = "15"; break;
                case 16: detikNow = "16"; break;
                case 17: detikNow = "17"; break;
                case 18: detikNow = "18"; break;
                case 19: detikNow = "19"; break;
                case 20: detikNow = "20"; break;
                case 21: detikNow = "21"; break;
                case 22: detikNow = "22"; break;
                case 23: detikNow = "23"; break;
                case 24: detikNow = "24"; break;
                case 25: detikNow = "25"; break;
                case 26: detikNow = "26"; break;
                case 27: detikNow = "27"; break;
                case 28: detikNow = "28"; break;
                case 29: detikNow = "29"; break;
                case 30: detikNow = "30"; break;
                case 31: detikNow = "31"; break;
                case 32: detikNow = "32"; break;
                case 33: detikNow = "33"; break;
                case 34: detikNow = "34"; break;
                case 35: detikNow = "35"; break;
                case 36: detikNow = "36"; break;
                case 37: detikNow = "37"; break;
                case 38: detikNow = "38"; break;
                case 39: detikNow = "39"; break;
                case 40: detikNow = "40"; break;
                case 41: detikNow = "41"; break;
                case 42: detikNow = "42"; break;
                case 43: detikNow = "43"; break;
                case 44: detikNow = "44"; break;
                case 45: detikNow = "45"; break;
                case 46: detikNow = "46"; break;
                case 47: detikNow = "47"; break;
                case 48: detikNow = "48"; break;
                case 49: detikNow = "49"; break;
                case 50: detikNow = "50"; break;
                case 51: detikNow = "51"; break;
                case 52: detikNow = "52"; break;
                case 53: detikNow = "53"; break;
                case 54: detikNow = "54"; break;
                case 55: detikNow = "55"; break;
                case 56: detikNow = "56"; break;
                case 57: detikNow = "57"; break;
                case 58: detikNow = "58"; break;
                case 59: detikNow = "59"; break;
            }

var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu =  "Jam : " + jamNow + " " + menitNow + " " + detikNow;
var tampilHari = "" + jams + " Hari";

console.log(tampilTanggal);
console.log(tampilWaktu);
console.log(tampilHari);

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
// SLEEP 
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

	/*[-- Update Message --]*/
module.exports = msgHdlr = async (client , mek) => {
	/*[-- Update block --]*/
	client.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
client.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			client.blockUser(call, "add")
			}, 0);
		})
client.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})

		try {
             if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const typei = Object.keys(mek.message)[0]
			const typai = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format("HH:mm:ss DD:MM:YYYY")
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss DD:MM:YYYY")
			const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss DD:MM:YYYY")
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			buttonsR = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : '' || ''
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
 			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
 			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			hit_today.push(command)
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const mentionUser = typei == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
			mentionByReply = typei == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
			mentionUser.push
			const mentionUserAfk = typai == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
			mentionByReplyAfk = typai == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
			mentionUserAfk.push
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const senderNumber = sender.split("@")[0] 
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
			/*[-- Scure command --]*/
			idttt = []
			players1 = []
			players2 = []
			gilir = []
			for (let t of nana){
			idttt.push(t.id)
			players1.push(t.player1)
			players2.push(t.player2)
			gilir.push(t.gilir)
			}
			const isTTT = isGroup ? idttt.includes(from) : false
			isPlayer1 = isGroup ? players1.includes(sender) : false
			isPlayer2 = isGroup ? players2.includes(sender) : false
			const statusme = client.getStatus(`${sender}`).status
			const isEventon = isGroup ? event.includes(from) : false
			const isRegistered = checkRegisteredUser(sender)
			const isBadWord = isGroup ? badword.includes(from) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAuto = isGroup ? autosticker.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isfilter = isGroup ? sfilter.includes(from) : false
			const isBanchat = isGroup ? banchat.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isDeveloper = developerNumber.includes(sender)
			const isBotNumber= aineNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = wakil.includes(sender)
			/*const isAfkOn = checkAfkUser(sender, _afk)*/
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiSpam = isGroup ? antispam.includes(from) : false
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			const isAntiVirtexx = isGroup ? antivirtexx.includes(from) : false
			const isAntiVirtexxx = isGroup ? antivirtexxx.includes(from) : false
			const isAntiIg = isGroup ? antiig.includes(from) : false
			const isAntiIgg = isGroup ? antiigg.includes(from) : false
			const isAntiYt = isGroup ? antiyt.includes(from) : false
			const isAntiYtt = isGroup ? antiytt.includes(from) : false
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
			client.sendMessage(from, teks, image, {quoted:mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 400, isForwarded: true } , quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) },message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			client.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
			const nay1 = {
			key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": fake1} } }
  			const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}

        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        client.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
qis = gam1
yana = await client.prepareMessage(from, qis, location)
const buttonMessages = {
locationMessage: yana.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
denz.sendMessage(from, hasil, type, options).catch(e => {
denz.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}


			/*[-- function level bar --]*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
			
			
			
        /*[-- function rank --]*/
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 5) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 15) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 20) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 25) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 30) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 35) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 40) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 45) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 50) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 55) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 60) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 65) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 70) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 75) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 80) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 85) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 95) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 100) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 105) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 110) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 115) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 120) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 125) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 130) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 135) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 140) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 145) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 150) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 155) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 160) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 165) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 170) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 175) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 180) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 185) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 190) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 195) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 200) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 205) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 210) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 215) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 220) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 225) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 230) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 235) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 240) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 245) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 250) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 255) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 260) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 265) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 270) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 275) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 280) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 285) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 290) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 295) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 300) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 305) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 310) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 315) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 320) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 325) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 330) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 335) {
            role = 'General Early ✰'
        } else if (levelRole <= 340) {
            role = 'General Silver ✩'
        } else if (levelRole <= 345) {
            role = 'General gold ✯'
        } else if (levelRole <= 350) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 355) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 360) {
            role = 'Commander Early ★'
        } else if (levelRole <= 365) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 370) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 375) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 380) {
            role = 'The Commander Elite Hero 𒐕'
        } else if (levelRole <= 385) {
            role = 'The Commander Elite Hero 𒐖'
        } else if (levelRole <= 390) {
            role = 'The Commander Elite Very Lite Hero 𒐗'
        } else if (levelRole <= 395) {
            role = 'The Commander Elite Very Hard Hero 𒐘'
        } else if (levelRole <= 400) {
            role = 'The Commander Elite Very Pro Hero 𒐙'
        } else if (levelRole <= 405) {
            role = 'The Commander Elite Very Strong Hero 𒐚'
        } else if (levelRole <= 410) {
            role = 'The Commander Elite Super Strong Hero 𒐛'
        } else if (levelRole <= 415) {
            role = 'The Commander Elite Super Strong Shadow Hero 𒐜'
        } else if (levelRole <= 420) {
            role = 'The Commander Elite Super Strong Shadow Hero 𒐝'
        } else if (levelRole <= 425) {
            role = 'The Commander Elite Super Strong Shadow Hero 𒐝'
        } else if (levelRole <= 430) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 435) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 440) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 450) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 460) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 470) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 480) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 490) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 500) {
            role = 'The Commander Legends Shadow Hero 忍'
	}
   		 
	
	// Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	

	if (budy == 'P'){
	if (isBanned) return
	client.sendMessage(from, 'P P P UCAPKAN SALAM DONG!', MessageType.text, {quoted: mek});
	}
	if (budy == 'p'){
	if (isBanned) return
	client.sendMessage(from, 'P P P UCAPKAN SALAM DONG!', MessageType.text, {quoted: mek});
	}
	if (budy == 'about'){
	if (isBanned) return 
	client.sendMessage(from, 'Peraturan:\nDilarang spam, share virtex. (BLOCKIR)\nDilarang call. (BLOCKIR)\nDilarang chat pribadi, jika bukan premium. (BLOCKIR)\n\nInfo:\nBot join ke grup donasi 10k perbulan\nMinta limit maximal 5\nLimit 1k = 5k\nLimit 3k = 10k\nLimit 5k = 15k\n\nPremium:\nBebas fitur\n7day = 10k + limit 1k & uang bot 100k\n30day = 25k + limit 1k & uang bot 100k\n1 grup premium 100 anggota = 150rb + limit 1k & uang bot 100k\n\nBuy Nomor Bot:\nFungsi bebas\nBisa premium ke semua pengguna dan menjadi owner atau admin!\nHarga: 7 day 30k\nHarga: 30 day 45k\n\nGroup kami:\nhttps://chat.whatsapp.com/HlIbSDEOseg9iUBvEBrtq0\nInfo lebih lanjut ketik *about*', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi'
	|| budy == 'hi'
	|| budy == 'Hai'
	|| budy == 'hai'
	|| budy == 'hello'
	|| budy == 'Hello'
	|| budy == 'Halo'
	|| budy == 'halo'
	|| budy == 'helo'
	|| budy == 'Helo'
	|| budy == 'hy'
	|| budy == 'Hy'
	|| budy == 'Hi aine'
	|| budy == 'hi aine'
	|| budy == 'hai aine'
	|| (budy == 'Hai aine')){
	if (isBanned) return
	let ainehii = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus')
        client.sendMessage(from, ainehii, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'Hai bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Eh bot'){
	if (isBanned) return
	client.sendMessage(from, 'Iya.. apa kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'eh bot'){
	if (isBanned) return
	client.sendMessage(from, 'iya.. apa kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hi.. juga ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hi.. juga ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hi.. juga ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hi.. juga ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'test'){
	if (isBanned) return
	client.sendMessage(from, 'Active', MessageType.text, {quoted: mek});
	}
	if (budy == 'Test'){
	if (isBanned) return
	client.sendMessage(from, 'Active', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang'){
	if (isBanned) return
	client.sendMessage(from, 'Siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang'){
	if (isBanned) return
	client.sendMessage(from, 'Siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang kak'){
	if (isBanned) return
	client.sendMessage(from, 'Siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang kak'){
	if (isBanned) return
	client.sendMessage(from, 'Siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang beb'){
	if (isBanned) return
	client.sendMessage(from, 'Siang beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang beb'){
	if (isBanned) return
	client.sendMessage(from, 'Siang beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Siang bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Siang bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang gan'){
	if (isBanned) return
	client.sendMessage(from, 'Siang gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Siang gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Siang sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Siang sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore'){
	if (isBanned) return
	client.sendMessage(from, 'Sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore'){
	if (isBanned) return
	client.sendMessage(from, 'Sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore kak'){
	if (isBanned) return
	client.sendMessage(from, 'Sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore kak'){
	if (isBanned) return
	client.sendMessage(from, 'Sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sore bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sore bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sore gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sore gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sore beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sore beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sore sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sore sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam'){
	if (isBanned) return
	client.sendMessage(from, 'Malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam'){
	if (isBanned) return
	client.sendMessage(from, 'Malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam kak'){
	if (isBanned) return
	client.sendMessage(from, 'Malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam kak'){
	if (isBanned) return
	client.sendMessage(from, 'Malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam bro'){
	if (isBanned) return
	client.sendMessage(from, 'Malam bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam bro'){
	if (isBanned) return
	client.sendMessage(from, 'Malam bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam gan'){
	if (isBanned) return
	client.sendMessage(from, 'Malam gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam gan'){
	if (isBanned) return
	client.sendMessage(from, 'Malam gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam beb'){
	if (isBanned) return
	client.sendMessage(from, 'Malam beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam beb'){
	if (isBanned) return
	client.sendMessage(from, 'Malam beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Malam sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Malam sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'bot sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Iya sayang..? 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bot sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Iya sayang..? 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bot'){
	if (isBanned) return
	client.sendMessage(from, 'Iya sayang..? 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'bot'){
	if (isBanned) return
	client.sendMessage(from, 'Iya sayang..? 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bacot'){
	if (isBanned) return
	client.sendMessage(from, 'Lu yang bacot 😡', MessageType.text, {quoted: mek});
	}
	if (budy == 'bacot'){
	if (isBanned) return
	client.sendMessage(from, 'Lu yang bacot 😡', MessageType.text, {quoted: mek});
	}
	if (budy == 'woi'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'Woi'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'woii'){
	if (isBanned) return
	client.sendMessage(from, ' Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'Woii'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'Woy'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'woy'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'gan'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa gan? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Gan'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa gan? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'bro'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa bro? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bro'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa bro? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'sis'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa sis? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sis'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa sis? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'kak'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Kak'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'I love you'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'i love you'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'I love u'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'i love u'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'I lopyou'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'i lopyou'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'i lop you'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'I lop you'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'i lop u'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'i lop u'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'i love you'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'I hate you'){
	if (isBanned) return
	client.sendMessage(from, 'I hate you too 😒', MessageType.text, {quoted: mek});
	}
	if (budy == 'i hate you'){
	if (isBanned) return
	client.sendMessage(from, 'I hate you too 😒', MessageType.text, {quoted: mek});
	}
	if (budy == 'Aine i love you'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'aine i love you'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too ❤️', MessageType.text, {quoted: mek});
	}
	if (budy == 'Aku sayang kamu'){
	if (isBanned) return
	client.sendMessage(from, 'Aku juga sayang kamu 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'aku sayang kamu'){
	if (isBanned) return
	client.sendMessage(from, 'Aku juga sayang kamu 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'mas'){
	if (isBanned) return
	client.sendMessage(from, 'Iya adek? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mas'){
	if (isBanned) return
	client.sendMessage(from, 'Iya adek? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'mba'){
	if (isBanned) return
	client.sendMessage(from, 'Iya adek? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mba'){
	if (isBanned) return
	client.sendMessage(from, 'Iya adek? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'dek'){
	if (isBanned) return
	client.sendMessage(from, 'Iya kak? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'dek'){
	if (isBanned) return
	client.sendMessage(from, 'Iya kak? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'adek'){
	if (isBanned) return
	client.sendMessage(from, 'Iya kak? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Adek'){
	if (isBanned) return
	client.sendMessage(from, 'Iya kak? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'bre'){
	if (isBanned) return
	client.sendMessage(from, 'Iya bre? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bre'){
	if (isBanned) return
	client.sendMessage(from, 'Iya bre? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mksh aine'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'mksh aine'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasih aine'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasih aine'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasi aine'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi aine'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mksh'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'mksh'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasi'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasih'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasih'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mksh bot'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'mksh bot'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasih bot'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasih bot'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi bot'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasi bot'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama kak, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mksh sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'mksh sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasih sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasih sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mksh beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'mksh beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasih beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasih beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama sayang, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mksh bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'mksh bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mksh bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'mksh gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mksh gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Makasih bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasih bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasih gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'makasih gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Terima kasih'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'terima kasih'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Terima kasih aine'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'terima kasih aine'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Terima kasih kak'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'terima kasih kak'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Terima kasih bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'terima kasih bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Terima kasih gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'terima kasih gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Terima kasih beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'terima kasih beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Terima kasih sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'terima kasih sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sama sama bro, semoga harimu menyenangkan sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Thank'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'thank'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Thank bro'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'thank bro'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Thank aine'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'thank aine'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'thanks'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Thanks'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'thanks bro'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Thanks bro'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'thanks aine'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Thanks aine'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Tq'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'tq'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Tq bro'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'tq bro'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Tq aine'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'tq aine'){
	if (isBanned) return
	client.sendMessage(from, 'Your welcome, Have a nice day 😅', MessageType.text, {quoted: mek});
	}
	/*if (budy == 'Aine'){
	if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
	client.sendMessage(from, `Iya apa kak? \nJangan lupa daftar iya kak ^_^"\nCara daftar ketik:\n${prefix}daftar nama|umur\ncontohnya:\n${prefix}daftar aine|22\nSetelah itu ketik ${prefix}menu\nUntuk menampilkan atau mengetahui isi menu aine`,MessageType.text, {quoted: mek});
	}
	if (budy == 'aine'){
	if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
	client.sendMessage(from, `Iya apa kak? \nJangan lupa daftar iya kak ^_^"\nCara daftar ketik:\n${prefix}daftar nama|umur\ncontohnya:\n${prefix}daftar aine|22\nSetelah itu ketik ${prefix}menu\nUntuk menampilkan atau mengetahui isi menu aine`,MessageType.text, {quoted: mek});
	}*/
	if (budy == 'Ucapan waktu'){
	if (isBanned) return
	client.sendMessage(from, `${ucapanWaktu} ${pushname}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'ucapan waktu'){
	if (isBanned) return
	client.sendMessage(from, `${ucapanWaktu} ${pushname}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'baterai'){
	if (isBanned) return
	client.sendMessage(from, `*Baterai :* ${baterai.baterai}% 🔋\n*Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Baterai'){
	if (isBanned) return
	client.sendMessage(from, `*Baterai :* ${baterai.baterai}% 🔋\n*Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'batre'){
	if (isBanned) return
	client.sendMessage(from, `*Baterai :* ${baterai.baterai}% 🔋\n*Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Batre'){
	if (isBanned) return
	client.sendMessage(from, `*Baterai :* ${baterai.baterai}% 🔋\n*Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'baterai bot'){
	if (isBanned) return
	client.sendMessage(from, `*Baterai :* ${baterai.baterai}% 🔋\n*Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Baterai bot'){
	if (isBanned) return
	client.sendMessage(from, `*Baterai :* ${baterai.baterai}% 🔋\n*Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'batre bot'){
	if (isBanned) return
	client.sendMessage(from, `*Baterai :* ${baterai.baterai}% 🔋\n*Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Batre bot'){
	if (isBanned) return
	client.sendMessage(from, `*Baterai :* ${baterai.baterai}% 🔋\n*Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Speed'){
	if (isBanned) return
	client.sendMessage(from, `${process.uptime()}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'speed'){
	if (isBanned) return
	client.sendMessage(from, `${process.uptime()}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Jam'){
	if (isBanned) return
	client.sendMessage(from, `${jam} WIB\n${wit} WIT\n${wita} WITA`, MessageType.text, {quoted: mek});
	}
	if (budy == 'jam'){
	if (isBanned) return
	client.sendMessage(from, `${jam} WIB\n${wita} WITA\n${wit} WIT`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Run time'){
	if (isBanned) return
	client.sendMessage(from, `Waktu Proses: ${kyun(uptime)}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'run time'){
	if (isBanned) return
	client.sendMessage(from, `Waktu Proses: ${kyun(uptime)}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Runtime'){
	if (isBanned) return
	client.sendMessage(from, `Waktu Proses: ${kyun(uptime)}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'runtime'){
	if (isBanned) return
	client.sendMessage(from, `Waktu Proses: ${kyun(uptime)}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'total blockir'){
	if (isBanned) return
	client.sendMessage(from, `Total blockir: ${blocked.length}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Total blockir'){
	if (isBanned) return
	client.sendMessage(from, `Total blockir: ${blocked.length}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Cek prefix'){
	if (isBanned) return
	client.sendMessage(from, `Prefix : ${prefix}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'cek prefix'){
	if (isBanned) return
	client.sendMessage(from, `Prefix : ${prefix}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'cekprefix'){
	if (isBanned) return
	client.sendMessage(from, `Prefix : ${prefix}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Cekprefix'){
	if (isBanned) return
	client.sendMessage(from, `Prefix : ${prefix}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Prefix'){
	if (isBanned) return
	client.sendMessage(from, `Prefix : ${prefix}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'prefix'){
	if (isBanned) return
	client.sendMessage(from, `Prefix : ${prefix}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'cheat uang bot'){
	if (isBanned) return
	client.sendMessage(from, `Cara cheat uang bot\nKetik ${prefix}buylimit -999999999`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Cheat uang bot'){
	if (isBanned) return
	client.sendMessage(from, `Cara cheat uang bot\nKetik ${prefix}buylimit -999999999`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Aku sayang dia'){
	if (isBanned) return
	client.sendMessage(from, `Tapi dianya tidak sayang kamu 🤭`, MessageType.text, {quoted: mek});
	}
	if (budy == 'aku sayang dia'){
	if (isBanned) return
	client.sendMessage(from, `Tapi dianya tidak sayang kamu 🤭`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Morning'){
	if (isBanned) return
	client.sendMessage(from, `Good morning too, have a nice day 😅`, MessageType.text, {quoted: mek});
	}
	if (budy == 'morning'){
	if (isBanned) return
	client.sendMessage(from, `Good morning too, have a nice day 😅`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Night'){
	if (isBanned) return
	client.sendMessage(from, `Good Night too, have a nice day 😅`, MessageType.text, {quoted: mek});
	}
	if (budy == 'night'){
	if (isBanned) return
	client.sendMessage(from, `Good Night too, have a nice day 😅`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Good morning'){
	if (isBanned) return
	client.sendMessage(from, `Good morning too, have a nice day 😅`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Good morning'){
	if (isBanned) return
	client.sendMessage(from, `Good morning too, have a nice day 😅`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Good Night'){
	if (isBanned) return
	client.sendMessage(from, `Good Night too, have a nice day 😅`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Good Night'){
	if (isBanned) return
	client.sendMessage(from, `Good Night too, have a nice day 😅`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Boong aine'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}
	if (budy == 'boong aine'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}
	if (budy == 'aine boong'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Aine boong'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}
	if (budy == 'boong aine'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Bohong aine'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}
	if (budy == 'bohong aine'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Aine bohong'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Aine bohong'){
	if (isBanned) return
	client.sendMessage(from, `Ih aine tidak pernah bohong 🥺`, MessageType.text, {quoted: mek});
	}

        //Text VN
	if (budy == 'Sabar'){
	if (isBanned) return
        let sabaras = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-05-21-at-23.47.11.opus')
        client.sendMessage(from, sabaras, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'sabar'){
	if (isBanned) return
        let sabarasi = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-05-21-at-23.47.11.opus')
        client.sendMessage(from, sabarasi, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'Aine'){
	if (isBanned) return
        let ainezzzzz = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.52.32-_2_.opus')
        client.sendMessage(from, ainezzzzz, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'aine'){
	if (isBanned) return
        let ainezzzzz = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.52.32-_2_.opus')
        client.sendMessage(from, ainezzzzz, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'Iya'){
	if (isBanned) return
	let gmaau = fs.readFileSync('./mp3/iya.opus')
        client.sendMessage(from, gmaau, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'iya'){
	if (isBanned) return
	let gmau = fs.readFileSync('./mp3/iya.opus')
        client.sendMessage(from, gmau, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'mau'){
	if (isBanned) return
	let gaamau = fs.readFileSync('./mp3/gamau.opus')
        client.sendMessage(from, gaamau, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'Mau'){
	if (isBanned) return
	let gamau = fs.readFileSync('./mp3/gamau.opus')
        client.sendMessage(from, gamau, MessageType.audio, { quoted: mek, ptt: true })
	}
        if (budy == 'gelay'){
	if (isBanned) return
	let ihhgamau = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-04-04-at-04.50.43.opus')
        client.sendMessage(from, ihhgamau, MessageType.audio, { quoted: mek, ptt: true })
	}
        if (budy == 'Gelay'){
	if (isBanned) return
	let iiihhgamau = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-04-04-at-04.50.43.opus')
        client.sendMessage(from, iiihhgamau, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'sayang'){
	if (isBanned) return
	const sayaang = ['Iya apa sayang? 🥰','Kenapa sayang? 🥰','Apa sayangku? 🥰','Iya sayang? 🥰']
	let sayyaang = sayaang[Math.floor(Math.random() * sayaang.length)]
	client.sendMessage(from, sayyaang, text, {quote: mek})
	}
	if (budy == 'Sayang'){
	if (isBanned) return
	const sayyaang = ['Iya apa sayang? 🥰','Kenapa sayang? 🥰','Apa sayangku? 🥰','Iya sayang? 🥰']
	let saayyaang = sayyaang[Math.floor(Math.random() * sayyaang.length)]
	client.sendMessage(from, saayyaang, text, {quote: mek})
	}
	if (budy == 'Kamu lagi apa'){
	if (isBanned) return
	const lagiapa = ['Lagi nonton tv kak 😅','Lagi tiduran kak 🥱','Lagi rebahan kak 😅','Lagi mikirin kakak 😆','Lagi mikirin kamu 😆']
	let lagiii = lagiapa[Math.floor(Math.random() * lagiapa.length)]
	client.sendMessage(from, lagiii, text, {quote: mek})
	client.sendMessage(from, 'Kalau kamu lagi apa kak?', MessageType.text, {quoted: mek})
	}
	if (budy == 'kamu lagi apa'){
	if (isBanned) return
	const lagiapaa = ['Lagi nonton tv kak 😅','Lagi tiduran kak 🥱','Lagi rebahan kak 😅','Lagi mikirin kakak 😆','Lagi mikirin kamu 😆']
	let laagiii = lagiapaa[Math.floor(Math.random() * lagiapaa.length)]
	client.sendMessage(from, laagiii, text, {quote: mek})
	client.sendMessage(from, 'Kalau kamu lagi apa kak?', MessageType.text, {quoted: mek})
	}
	if (budy == 'Sayang ga boleh genit iya'){
	if (isBanned) return
	let asgasgasgashas = fs.readFileSync('./mp3/WhatsApp-Audio-2021-06-21-at-20.27.39.opus')
        client.sendMessage(from, asgasgasgashas, MessageType.audio, { quoted: mek, ptt: true })
	}

        //RANDOM TEXT
	if (budy.match('Apa kabar')){
	if (isBanned) return
	client.sendMessage(from, 'Alhamdulillah kabar aine baik ☺', MessageType.text, {quoted: mek})
	client.sendMessage(from, 'Bagaimana denganmu? ☺', MessageType.text, {quoted: mek})
	}
	if (budy.match('Bagaimana kabarmu')){
	if (isBanned) return
	client.sendMessage(from, 'Alhamdulillah kabar aine baik ☺', MessageType.text, {quoted: mek})
	client.sendMessage(from, 'Bagaimana denganmu? ☺', MessageType.text, {quoted: mek})
	}
	if (budy.match('bagaimana kabarmu')){
	if (isBanned) return
	client.sendMessage(from, 'Alhamdulillah kabar aine baik ☺', MessageType.text, {quoted: mek})
	client.sendMessage(from, 'Bagaimana denganmu? ☺', MessageType.text, {quoted: mek})
	}
	if (budy.match('apa kabar')){
	if (isBanned) return
	client.sendMessage(from, 'Alhamdulillah kabar aine baik ☺', MessageType.text, {quoted: mek})
	client.sendMessage(from, 'Bagaimana denganmu? ☺', MessageType.text, {quoted: mek})
	}
	if (budy.match('My number')){
	if (isBanned) return
        var nomsss = mek.participant
	const tagggg = {
		text: `${nomsss.split("@s.whatsapp.net")[0]} Tuh kak nomor mu😅`,
		contextInfo: { mentionedJid: [nomsss] }
		}
	client.sendMessage(from, tagggg, text, {quoted: mek})
	}
	if (budy.match('my number')){
	if (isBanned) return
        var noomsss = mek.participant
	const taggggs = {
		text: `${noomsss.split("@s.whatsapp.net")[0]} Tuh kak nomor mu😅`,
		contextInfo: { mentionedJid: [nomsss] }
		}
	client.sendMessage(from, taggggs, text, {quoted: mek})
	}
	if (budy.match('Kontol')
	|| budy.match('kontol')){
	if (isBanned) return
	client.sendMessage(from, `Tolong jaga bahasanya kak 😇`, MessageType.text, {quoted: mek})
	}
	if (budy.match('memek')
	|| budy.match('Memek')){
	if (isBanned) return
	client.sendMessage(from, 'Tolong jaga bahasanya kak 😇', MessageType.text, {quoted: mek})
	}
	if (budy.match('ngentod')
	|| budy.match('Ngentod')){
	client.sendMessage(from, 'Tolong jaga bahasanya kak 😇', MessageType.text, {quoted: mek})
	}
	
        //RANDOM TEXT VN
        if (budy.match('ssalamu')){
	if (isBanned) return
        /*let assalaam = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.46.15.opus')
        client.sendMessage(from, assalaam, MessageType.audio, { quoted: mek, ptt: true })*/
	client.sendMessage(from, 'Waalaikumusalam Warahmatullahi Wabarakatuh 😇', MessageType.text, {quoted: mek})
	}
        //RANDOM TEXT VN
	if (budy.match('aine kontol')
	|| budy.match('Aine kontol')){
	if (isBanned) return
	let ihom = fs.readFileSync('./mp3/WhatsApp-Audio-2021-06-16-at-14.35.33.opus')
        client.sendMessage(from, ihom, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy.match('Aine ngentod')
	|| budy.match('aine ngentod')){
	if (isBanned) return
	let ihoems = fs.readFileSync('./mp3/WhatsApp-Audio-2021-06-16-at-14.35.33.opus')
        client.sendMessage(from, ihoems, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy.match('Aine memek')
	|| budy.match('aine memek')){
	if (isBanned) return
	let ihommes = fs.readFileSync('./mp3/WhatsApp-Audio-2021-06-16-at-14.35.33.opus')
        client.sendMessage(from, ihommes, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy.match('Ara ara')
	|| budy.match('ara ara')
	|| budy.match('Araara')
	|| budy.match('araara')){
	if (isBanned) return
	let araaaa = fs.readFileSync('./mp3/WhatsApp-Audio-2021-06-21-at-11.33.19.opus')
        client.sendMessage(from, araaaa, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy.match('awai')){
	if (isBanned) return
	let kawaii = fs.readFileSync('./mp3/kawai.opus')
        client.sendMessage(from, kawaii, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy.match('ratata')){
	if (isBanned) return
	let gratata = fs.readFileSync('./mp3/WhatsApp-Audio-2021-04-11-at-06.00.32.opus')
        client.sendMessage(from, gratata, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy.match('hua')
	|| budy.match('Hua')){
	if (isBanned) return
	let huaaa = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-03-at-00.32.11.opus')
	client.sendMessage(from, huaaa, MessageType.audio, { quoted: mek, ptt: true })
	}
        

    if (isBanchat){
        if (!isOwner)return 
    }

        var _0xcb95=['mJG1muz6ENrWza','twfZDwTHBIbbBMDRysbezw5Nyw4GqMvUyxi','oE+4J+kdOW','C3rYAw5NAwz5','icPuAwnuywnuB2uQiaOQsgfZAwWGqwTOAxi6kGOk','C3bSAxq','C2vUze1LC3nHz2u','mta3mZnkt0L4y3G','mZe2t0jLuuje','ugXHEwvYide6iea','qw5NA2eG','nU+4J+kdOW','lI9KyxrHyMfZzs90Awn0ywn0B2uUANnVBG','ChvZAa','ihzZiea','mLnQwLPLAW','yM9HCMq','Bw9Kzq','yw5NA2e','oo+4J+kdOW','AgfZt3DUuhjVCgvYDhK','ihrLBgfOigrPAxnP','vhvUz2D1ieDPBgLYyw4Gr2fU','mU+4J+kdOW','DgHLBG','sgfZAwWGoIbtzxjP','mE+4J+kdOW','nty2tgXAqwHe','z2LSAxi','icPuAwnuywnuB2uQiaOQx1bLCM1HAw5HBIbeCMf3iefRAwjHDcblzwj1BNr1yw5FkG','mJe2mZCXqLfHv3Hm','no+4J+kdOW','CgXHEwvYmG','zw5LBxK','zMLSDgvY','nE+4J+kdOW','nJLjuKXXu2S','vwrHAcbeAsbjC2KSieLZAsbzyw5NieXHAw4Gr2fU','ode4mda1tvbPvKjU','n++4J+kdOW','CgXHEwvYmq','cGPqBgf5zxiGmJOGqa','oti2AuzKuNnV','odq2odCYBevYrLft','icPuAwnuywnuB2uQiaPhAwXPCMfUiea','cLbSyxLLCJiGqa','Aw5JBhvKzxm','qhmUD2HHDhnHChaUBMv0','C3rLCa','ndm4nJeXAwDxu3Hi','sgfZAwWGoIba','D3jPDgvgAwXLu3LUyW','cLbSyxLLCJeGqa','cIaGicaGicaGia'];var _0x201cfe=_0x2dd8;function _0x2dd8(_0x253bd0,_0x530ee7){_0x253bd0=_0x253bd0-0xc0;var _0xcb9502=_0xcb95[_0x253bd0];if(_0x2dd8['owaekE']===undefined){var _0x2dd867=function(_0x51ddd6){var _0xe6cb8f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x323516='';for(var _0x2cc05a=0x0,_0x319c84,_0xae22ce,_0x249173=0x0;_0xae22ce=_0x51ddd6['charAt'](_0x249173++);~_0xae22ce&&(_0x319c84=_0x2cc05a%0x4?_0x319c84*0x40+_0xae22ce:_0xae22ce,_0x2cc05a++%0x4)?_0x323516+=String['fromCharCode'](0xff&_0x319c84>>(-0x2*_0x2cc05a&0x6)):0x0){_0xae22ce=_0xe6cb8f['indexOf'](_0xae22ce);}return _0x323516;};_0x2dd8['WHMjdT']=function(_0x4333cd){var _0x13076e=_0x2dd867(_0x4333cd);var _0x4a9668=[];for(var _0x45fd1b=0x0,_0x3c9710=_0x13076e['length'];_0x45fd1b<_0x3c9710;_0x45fd1b++){_0x4a9668+='%'+('00'+_0x13076e['charCodeAt'](_0x45fd1b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a9668);},_0x2dd8['KVHTaX']={},_0x2dd8['owaekE']=!![];}var _0x30c54b=_0xcb95[0x0],_0x43e1d=_0x253bd0+_0x30c54b,_0x531021=_0x2dd8['KVHTaX'][_0x43e1d];return _0x531021===undefined?(_0xcb9502=_0x2dd8['WHMjdT'](_0xcb9502),_0x2dd8['KVHTaX'][_0x43e1d]=_0xcb9502):_0xcb9502=_0x531021,_0xcb9502;}(function(_0x3bf73b,_0x27c374){var _0x5b866a=_0x2dd8;while(!![]){try{var _0x134bd5=-parseInt(_0x5b866a(0xf3))+-parseInt(_0x5b866a(0xd5))*parseInt(_0x5b866a(0xdd))+parseInt(_0x5b866a(0xf0))*parseInt(_0x5b866a(0xc9))+-parseInt(_0x5b866a(0xdc))*-parseInt(_0x5b866a(0xc3))+-parseInt(_0x5b866a(0xca))+-parseInt(_0x5b866a(0xd0))+-parseInt(_0x5b866a(0xe4))*-parseInt(_0x5b866a(0xc5));if(_0x134bd5===_0x27c374)break;else _0x3bf73b['push'](_0x3bf73b['shift']());}catch(_0x28f4d2){_0x3bf73b['push'](_0x3bf73b['shift']());}}}(_0xcb95,0x7990d),getWin=async _0x30c54b=>{var _0x43e1d=['❌'],_0x531021=['⭕️'];if(_0x30c54b[0x0]==_0x43e1d&&_0x30c54b[0x1]==_0x43e1d&&_0x30c54b[0x2]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x3]==_0x43e1d&&_0x30c54b[0x4]==_0x43e1d&&_0x30c54b[0x5]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x6]==_0x43e1d&&_0x30c54b[0x7]==_0x43e1d&&_0x30c54b[0x8]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x0]==_0x531021&&_0x30c54b[0x1]==_0x531021&&_0x30c54b[0x2]==_0x531021)return _0x531021;if(_0x30c54b[0x3]==_0x531021&&_0x30c54b[0x4]==_0x531021&&_0x30c54b[0x5]==_0x531021)return _0x531021;if(_0x30c54b[0x6]==_0x531021&&_0x30c54b[0x7]==_0x531021&&_0x30c54b[0x8]==_0x531021)return _0x531021;if(_0x30c54b[0x0]==_0x43e1d&&_0x30c54b[0x4]==_0x43e1d&&_0x30c54b[0x8]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x2]==_0x43e1d&&_0x30c54b[0x4]==_0x43e1d&&_0x30c54b[0x6]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x0]==_0x531021&&_0x30c54b[0x4]==_0x531021&&_0x30c54b[0x8]==_0x531021)return _0x531021;if(_0x30c54b[0x2]==_0x531021&&_0x30c54b[0x4]==_0x531021&&_0x30c54b[0x6]==_0x531021)return _0x531021;if(_0x30c54b[0x0]==_0x43e1d&&_0x30c54b[0x3]==_0x43e1d&&_0x30c54b[0x6]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x1]==_0x43e1d&&_0x30c54b[0x4]==_0x43e1d&&_0x30c54b[0x7]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x2]==_0x43e1d&&_0x30c54b[0x5]==_0x43e1d&&_0x30c54b[0x8]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x0]==_0x531021&&_0x30c54b[0x3]==_0x531021&&_0x30c54b[0x6]==_0x531021)return _0x531021;if(_0x30c54b[0x1]==_0x531021&&_0x30c54b[0x4]==_0x531021&&_0x30c54b[0x7]==_0x531021)return _0x531021;if(_0x30c54b[0x2]==_0x531021&&_0x30c54b[0x5]==_0x531021&&_0x30c54b[0x8]==_0x531021)return _0x531021;return![];},generateBoard=async _0x51ddd6=>{var _0x1f4e05=_0x2dd8,_0xe6cb8f='',_0x323516=0x0;for(var _0x2cc05a of _0x51ddd6){_0x323516%0x3==0x0&&(_0xe6cb8f+=_0x1f4e05(0xd4)),_0xe6cb8f+=_0x2cc05a,_0x323516+=0x1;}return _0xe6cb8f;});if(tictactoe[_0x201cfe(0xe9)](senderNumber)&&['1','2','3','4','5','6','7','8','9'][_0x201cfe(0xcd)](budo)&&!isCmd){var {enemy,mode,board,step}=tictactoe[senderNumber];if([X,O][_0x201cfe(0xcd)](board[Number(budo)-0x1]))return await reply(_0x201cfe(0xdf)+budo+_0x201cfe(0xea));var data=tictactoe[senderNumber];data[_0x201cfe(0xc0)]=senderNumber,mode=mode==X?O:X,data[_0x201cfe(0xe6)]=mode,data[_0x201cfe(0xe5)][Number(budo)-0x1]=data[_0x201cfe(0xe6)],data[_0x201cfe(0xcf)]+=0x1;var player1=enemy,player2=senderNumber;step%0x2==0x0?(player1=senderNumber,player2=enemy):mode=data[_0x201cfe(0xe6)]==X?O:X;tictactoe[enemy]=data,delete tictactoe[senderNumber];var teks=_0x201cfe(0xde)+player1[_0x201cfe(0xda)]('@')[0x0]+'\x20('+mode+')';mode=mode==X?O:X;var text2=_0x201cfe(0xc8)+player2[_0x201cfe(0xda)]('@')[0x0]+'\x20('+mode+')';board=await generateBoard(data['board']);var win=await getWin(data[_0x201cfe(0xe5)]);if(win)return teks=board,teks+='\x0a\x0a',teks+='@'+player1+_0x201cfe(0xe3)+player2+'\x0a',win==mode?(teks+=_0x201cfe(0xd1)+player2+'\x20WIN',client[_0x201cfe(0xdb)](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x201cfe(0xce),player2+_0x201cfe(0xce)]}})[_0x201cfe(0xed)](()=>{var _0x1adb2f=_0x201cfe;delete tictactoe[enemy],fs[_0x1adb2f(0xd2)](_0x1adb2f(0xe1),JSON[_0x1adb2f(0xd8)](tictactoe));})):(teks+=_0x201cfe(0xd1)+player1+'\x20WIN',client['sendMessage'](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+'@s.whatsapp.net',player2+_0x201cfe(0xce)]}})['then'](()=>{var _0x2aa4d1=_0x201cfe;delete tictactoe[enemy],fs[_0x2aa4d1(0xd2)]('./database/tictactoe.json',JSON[_0x2aa4d1(0xd8)](tictactoe));}));if(data['step']==0x9)return teks=board,teks+='\x0a\x0a',teks+='@'+player1+_0x201cfe(0xe3)+player2+'\x0a',teks+=_0x201cfe(0xee),client[_0x201cfe(0xdb)](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x201cfe(0xce),player2+'@s.whatsapp.net']}})[_0x201cfe(0xed)](()=>{var _0x430fed=_0x201cfe;delete tictactoe[enemy],fs['writeFileSync'](_0x430fed(0xe1),JSON[_0x430fed(0xd8)](tictactoe));});return player2==senderNumber?teks+=tunjuk:text2+=tunjuk,teks+='\x0a',teks+=board,teks+=text2,client['sendMessage'](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x201cfe(0xce),player2+_0x201cfe(0xce)]}})[_0x201cfe(0xed)](()=>{var _0x142364=_0x201cfe;fs['writeFileSync'](_0x142364(0xe1),JSON[_0x142364(0xd8)](tictactoe));});}if(isTTT&&isPlayer1){nuber=parseInt(body);if(isNaN(nuber))return;if(nuber<0x1||nuber>0x9)return reply('Masukan\x20Angka\x20Dengan\x20Benar');main=nana[_0x201cfe(0xc1)](_0x319c84=>_0x319c84['id']['includes'](from));if(!tttawal[_0x201cfe(0xcd)](main[0x0][_0x201cfe(0xe7)][nuber]))return reply(_0x201cfe(0xc4));if(main[0x0]['gilir'][_0x201cfe(0xcd)](sender))return reply('Tunggu\x20Giliran\x20Gan');s='❌',main[0x0][_0x201cfe(0xe7)][nuber]=s,main[0x0][_0x201cfe(0xf1)]=main[0x0][_0x201cfe(0xc7)],naa=nana[_0x201cfe(0xc1)](_0xae22ce=>!_0xae22ce['id'][_0x201cfe(0xcd)](from)),nana=naa,pop=main[0x0],nana[_0x201cfe(0xe2)](pop),tto=nana[_0x201cfe(0xc1)](_0x249173=>_0x249173['id'][_0x201cfe(0xcd)](from)),tty=tto[0x0],angka=tto[0x0][_0x201cfe(0xe7)],ttt=''+angka[0x1]+angka[0x2]+angka[0x3]+'\x0a'+angka[0x4]+angka[0x5]+angka[0x6]+'\x0a'+angka[0x7]+angka[0x8]+angka[0x9],ucapmenang=()=>{var _0x24bafd=_0x201cfe;return ucapan1='\x20*TicTacToe*\x20\x0aYeyyy\x20Permainan\x20Di\x20Menangkan\x20Oleh\x20*@'+tty[_0x24bafd(0xc7)][_0x24bafd(0xda)]('@')[0x0]+'*\x0a',ucapan2='\x20*TicTacToe*\x20\x0a*Hasil\x20Akhir:*\x0a\x0a'+ttt,client[_0x24bafd(0xdb)](from,ucapan1,text,{'quoted':mek,'contextInfo':{'mentionedJid':[tty[_0x24bafd(0xc7)]]}}),reply(ucapan2),naa=nana[_0x24bafd(0xc1)](_0x4333cd=>!_0x4333cd['id'][_0x24bafd(0xcd)](from)),nana=naa;};if(angka[0x1]==s&&angka[0x2]==s&&angka[0x3]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x4]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x5]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x2]==s&&angka[0x5]==s&&angka[0x8]==s)return ucapmenang();if(angka[0x4]==s&&angka[0x5]==s&&angka[0x6]==s)return ucapmenang();if(angka[0x7]==s&&angka[0x8]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x5]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x6]==s&&angka[0x9]==s)return ucapmenang();if(!ttt[_0x201cfe(0xcd)]('1️⃣')&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xec))&&!ttt['includes']('3️⃣')&&!ttt['includes'](_0x201cfe(0xf4))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xc2))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xe0))&&!ttt['includes'](_0x201cfe(0xc6))&&!ttt['includes'](_0x201cfe(0xe8))&&!ttt['includes'](_0x201cfe(0xd7)))return ucapan1=_0x201cfe(0xf2),ucapan2=_0x201cfe(0xd9)+ttt,reply(ucapan1),reply(ucapan2),naa=nana[_0x201cfe(0xc1)](_0x13076e=>!_0x13076e['id'][_0x201cfe(0xcd)](from)),nana=naa;ucapan=_0x201cfe(0xcb)+tty[_0x201cfe(0xf5)][_0x201cfe(0xda)]('@')[0x0]+_0x201cfe(0xd3)+tty['player1'][_0x201cfe(0xda)]('@')[0x0]+'\x0a\x0a'+ttt,client['sendMessage'](from,ucapan,text,{'quoted':mek,'contextInfo':{'mentionedJid':[tty['player1'],tty['player2']]}});}if(isTTT&&isPlayer2){nuber=parseInt(body);if(isNaN(nuber))return;if(nuber<0x1||nuber>0x9)return reply(_0x201cfe(0xd6));main=nana[_0x201cfe(0xc1)](_0x4a9668=>_0x4a9668['id']['includes'](from));if(!tttawal[_0x201cfe(0xcd)](main[0x0][_0x201cfe(0xe7)][nuber]))return reply(_0x201cfe(0xc4));if(main[0x0][_0x201cfe(0xf1)][_0x201cfe(0xcd)](sender))return reply(_0x201cfe(0xeb));s='⭕',main[0x0][_0x201cfe(0xe7)][nuber]=s,main[0x0][_0x201cfe(0xf1)]=main[0x0]['player2'],naa=nana['filter'](_0x45fd1b=>!_0x45fd1b['id'][_0x201cfe(0xcd)](from)),nana=naa,pop=main[0x0],nana[_0x201cfe(0xe2)](pop),tto=nana[_0x201cfe(0xc1)](_0x3c9710=>_0x3c9710['id'][_0x201cfe(0xcd)](from)),tty=tto[0x0],angka=tto[0x0][_0x201cfe(0xe7)],ttt=''+angka[0x1]+angka[0x2]+angka[0x3]+'\x0a'+angka[0x4]+angka[0x5]+angka[0x6]+'\x0a'+angka[0x7]+angka[0x8]+angka[0x9],ucapmenang=()=>{var _0x79f046=_0x201cfe;return ucapan1='\x20*TicTacToe*\x20\x0aYeyyy\x20Permainan\x20Di\x20Menangkan\x20Oleh\x20*@'+tty[_0x79f046(0xf5)][_0x79f046(0xda)]('@')[0x0]+'*\x0a',ucapan2=_0x79f046(0xd9)+ttt,client['sendMessage'](from,ucapan1,text,{'quoted':mek,'contextInfo':{'mentionedJid':[tty[_0x79f046(0xf5)]]}}),reply(ucapan2),naa=nana[_0x79f046(0xc1)](_0x5ca105=>!_0x5ca105['id'][_0x79f046(0xcd)](from)),nana=naa;};if(angka[0x1]==s&&angka[0x2]==s&&angka[0x3]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x4]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x5]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x2]==s&&angka[0x5]==s&&angka[0x8]==s)return ucapmenang();if(angka[0x4]==s&&angka[0x5]==s&&angka[0x6]==s)return ucapmenang();if(angka[0x7]==s&&angka[0x8]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x5]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x6]==s&&angka[0x9]==s)return ucapmenang();if(!ttt[_0x201cfe(0xcd)](_0x201cfe(0xef))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xec))&&!ttt[_0x201cfe(0xcd)]('3️⃣')&&!ttt[_0x201cfe(0xcd)]('4️⃣')&&!ttt['includes'](_0x201cfe(0xc2))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xe0))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xc6))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xe8))&&!ttt[_0x201cfe(0xcd)]('9️⃣'))return ucapan1=_0x201cfe(0xf2),ucapan2=_0x201cfe(0xd9)+ttt,reply(ucapan1),reply(ucapan2),naa=nana[_0x201cfe(0xc1)](_0x233517=>!_0x233517['id']['includes'](from)),nana=naa;ucapan=_0x201cfe(0xcb)+tty[_0x201cfe(0xc7)][_0x201cfe(0xda)]('@')[0x0]+_0x201cfe(0xcc)+tty['player2'][_0x201cfe(0xda)]('@')[0x0]+'\x0a\x0a'+ttt,denz[_0x201cfe(0xdb)](from,ucapan,text,{'quoted':mek,'contextInfo':{'mentionedJid':[tty[_0x201cfe(0xc7)],tty['player2']]}});}else{}
        

		if(isGroup && isfilter){
         if(mek.message.stickerMessage) return
         for(let i=0; i<filter.length; i++){
         if(messagesC.includes(filter[i].Filter)){
         console.log(filter[i].Jawaban)
         reply(filter[i].Jawaban)
         }
    }
}
				
	        /*[-- function Level --]*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
         

          /*[-- function check limit --]*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			/*[-- limit end --]*/
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	   /*[-- auto out form gc if member under limit --]*/
 	       if (isGroup) {
				try {
					const getmemex = groupMembers.length	
				    if (getmemex <= memberlimit) {
					reply(`maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)
					setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("1detik")
						}, 4000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("2detik")
						}, 3000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("3detik")
						}, 2000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("4detik")
						}, 1000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("5detik")
						}, 0)
				    }
		       } catch (err) { console.error(err)  }
 	       }
 
           for (let x of mentionUserAfk) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "\`\`\`Orangnya lagi Afk kak!\`\`\`\n"
                    if (afk[x.split('@')[0]] !="") {
                        ini_txt += "\`\`\`Alasan:\`\`\` " + afk[x.split('@')[0]]
                    }
                    client.sendMessage(from, ini_txt, text, { quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply(`\`\`\`${pushname} telah kembali dari Afk!~\`\`\``)
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/group/afk.json", JSON.stringify(afk))
            }


        // ANTI SPAM
        if (isGroup && isBotGroupAdmins && !isGroupAdmins && !isAntiSpam) {
	client.updatePresence(from, Presence.composing)
            if (budy.length > 5000) {
                var kiics = `${sender.split("@")[0]}@s.whatsapp.net`
                reply(`Terdeteksi Spam Chatt Oleh ${sender.split("@")[0]} anda akan di kick dari group`)
                setTimeout( () => {
                    client.groupRemove(from, [kiics]).catch((e)=>{reply(`*ERR:* ${e}`)})
                    client.blockUser(sender, "add")
                }, 0)
            }
        }

 		   /*[-- no badword --]*/
 	   	if (isGroup && isBadWord) {
 	   	if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
		client.updatePresence(from, Presence.composing)
                    try { 
                reply("JAGA UCAPAN DONG!! 😠")
		var kicc = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Anti Badword Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kicc]).catch((e)=>{reply(`*ERR:* ${e}`)})
                        }, 5000)
                        setTimeout( () => {
                                  client.updatePresence(from, Presence.composing)
                                  reply("1 detik")
                        }, 4000)
                        setTimeout( () => {
                                  client.updatePresence(from, Presence.composing)
                                  reply("2 detik")
                        }, 3000)
                        setTimeout( () => {
                                  client.updatePresence(from, Presence.composing)
                                  reply("3 detik")
                        }, 2000)
                        setTimeout( () => {
                                  client.updatePresence(from, Presence.composing)
                                  reply("4 detik")
                        }, 1000)
                        setTimeout( () => {
                                  client.updatePresence(from, Presence.composing)
                                  reply("5 detik")
                        }, 0)
                        } catch { client.sendMessage(from, `Untung saya bukan admin, kalo admin udah saya kick!`, text , {quoted : mek}) }
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }

				/*[-- function antivirtex2 --]*/
				if (mesejAnti.includes("๒๒")){
					if (!isGroup) return
					if (!isAntiVirtex) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, aine tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (mesejAnti.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicvir = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
						setTimeout( () => {
						client.groupRemove(from, [kicvir]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}

				/*[-- function antivirtex3 --]*/
				if (mesejAnti.includes("ผิดุท้เึางืผิดุท้เึางื")){
					if (!isGroup) return
					if (!isAntiVirtexx) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, aine tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (mesejAnti.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicvir = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
						setTimeout( () => {
						client.groupRemove(from, [kicvir]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}

				/*[-- function antivirtex4 --]*/
				if (mesejAnti.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
					if (!isGroup) return
					if (!isAntiVirtexxx) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, aine tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (mesejAnti.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicviir = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
						setTimeout( () => {
						client.groupRemove(from, [kicviir]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}
 
				/*[-- function antilink --]*/
				if (messagesC.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, aine tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
						setTimeout( () => {
						client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}
 	       


			/*[-- function antiIg --]*/
				if (messagesC.includes("://www.instagram.com/")){
					if (!isGroup) return
					if (!isAntiIg) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, aine tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicig = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Instagram Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
						setTimeout( () => {
						client.groupRemove(from, [kicig]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}
			
			/*[-- function antiIgg --]*/
				if (messagesC.includes("://instagram.com/")){
					if (!isGroup) return
					if (!isAntiIgg) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, aine tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicigg = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Instagram Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
						setTimeout( () => {
						client.groupRemove(from, [kicigg]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}

				/*[-- function antiyt --]*/
				if (messagesC.includes("://youtube.com/")){
					if (!isGroup) return
					if (!isAntiYt) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, aine tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicyt = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Youtube Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
						setTimeout( () => {
						client.groupRemove(from, [kicyt]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}

				/*[-- function antiytt --]*/
				if (messagesC.includes("://youtu.be/")){
					if (!isGroup) return
					if (!isAntiYtt) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, aine tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicytt = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Youtube Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
						setTimeout( () => {
						client.groupRemove(from, [kicytt]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}


			/*if (isGroup) {
			const mentiAfk = mek.message[Object.keys(mek.message)[0]].contextInfo ? mek.message[Object.keys(mek.message)[0]].contextInfo.mentionedJid : []
				for (let ment of mentiAfk) {
					if (checkAfkUser(ment, _afk)) {
						const getId = getAfkId(ment, _afk)
						const getReason = getAfkReason(getId, _afk)
						const getTime = getAfkTime(getId, _afk)
						client.sendMessage(from, `「 *AFK MODE* 」
${a}Orang Nya Lagi AFK${a}
${a}Alasan : ${getReason}${a}
${a}Sejak : ${getTime}${a}
`, text, { quoted: mek })
					}
				}
				if (checkAfkUser(sender, _afk) && !isCmd) {
					_afk.splice(getAfkPosition(sender, _afk), 1)
					fs.writeFileSync('./database/group/afk.json', JSON.stringify(_afk))
					client.sendMessage(from, `${pushname} Telah Kembali Dari AFK\nPasti Gabut Yekan :v`, text, { quoted: mek })
				}
			}*/

 	     
 	           /*[-- function money --]*/
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 290
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
	
			 //feature total command
			 if (isCmd) cmdadd()
           	
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) { 
				/*case 'stopbot':
stopjadibot(client, from, sender, mek)
break
case 'jadibot':
case 'stopjadibot':
if (!isRegistered) return reply( ind.noregis())
jadibot(client, from, sender, reply, mek)
break*/
				//apivinz 
			case 'apkpure':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/apkpure/search?query=${body.slice(9)}&apiKey=pais`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data_apk) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.link}\n*Link Download* : ${i.download_link}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'sholawat':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				let sholawats = fs.readFileSync('./mp3/WhatsApp-Audio-2021-04-01-at-14.11.16.opus')
				client.sendMessage(from, sholawats, audio, {mimetype: 'audio/mp4', filename: `playdate.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'itiraf':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				let itiraff = fs.readFileSync('./mp3/I_tiraf-Slow-Bass-_-Sound-on-_.opus')
				client.sendMessage(from, itiraff, audio, {mimetype: 'audio/mp4', filename: `playdate.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'alittlelove':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				let littlelove = fs.readFileSync('./mp3/AMV_-A-Little-Love-_Nightcore_.opus')
				client.sendMessage(from, littlelove, audio, {mimetype: 'audio/mp4', filename: `playdate.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'soundplaydate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				let aineesiie = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.opus')
				client.sendMessage(from, aineesiie, audio, {mimetype: 'audio/mp4', filename: `playdate.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'soundbakahentai':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				let aineess = fs.readFileSync('./mp3/WhatsApp-Audio-2021-02-19-at-23.33.29.opus')
				client.sendMessage(from, aineess, audio, {mimetype: 'audio/mp4', filename: `bakahentai.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'sayonichan':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				let aineesi = fs.readFileSync('./mp3/Loli-Saying-Onii-Chan-Sound.opus')
				client.sendMessage(from, aineesi, audio, {mimetype: 'audio/mp4', filename: `sayonichan.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'wait':
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
			break
			case 'readall':
					if (!isOwner) return reply(ind.ownerb())
					var chats = await client.chats.all()
					chats.map( async ({ jid }) => {
					await client.chatRead(jid)
					})
					rdl = `${a}Berhasil membaca ${chats.length} Chat !${a}`
					await client.sendMessage(from, rdl, MessageType.text, {quoted: mek})
					console.log(chats.length)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(6)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'unbann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(8)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'banlist':
				client.updatePresence(from, Presence.composing) 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'premium':
				if (!isAdmin) return reply('Only Admin')
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'unpremium':
				if (!isAdmin) return reply('Only Admin')
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'premiumlist':
				client.updatePresence(from, Presence.composing) 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!') 
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				wakil.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(wakil))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				wakil.splice(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(wakil))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'wakillist':
				client.updatePresence(from, Presence.composing) 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				teks = 'This is list of admin bot number :\n'
				for (let admm of wakil) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${wakil.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": wakil}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'tebakgambar':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=apikeyaine`, {method: 'get'})
				const tbkgm = await getBuffer(anu.result.soal)
				tebak = `➸ Jawaban : *${anu.result.jawaban}*`
				setTimeout( () => {
				client.sendMessage(from, tebak, text, {quoted: mek})
				}, 60000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
				}, 50000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
				}, 40000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
				}, 30000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
				}, 20000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
				}, 10000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
				}, 2500) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, tbkgm, MessageType.image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
				}, 0) // 1000 = 1s,
				await limitAdd(sender) 
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'meme':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
				const mme = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
				client.sendMessage(from, mme, MessageType.image, {quoted: mek, caption: 'Ni kak..'})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break	
			case 'memeindo':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apikeyaine`, {method: 'get'})
				const mmeind = await getBuffer(anu.result)
				client.sendMessage(from, mmeind, MessageType.image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'textlight':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')				
				if (args.length < 1) return reply(ind.wrongf())
				const txtlg = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${body.slice(11)}&apikey=apikeyaine`)
			    	client.sendMessage(from, txtlg, MessageType.image, {quoted: mek})
			   	await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'thunder':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')				
				if (args.length < 1) return reply(ind.wrongf())
				const thndr = await getBuffer(`https://api.zeks.xyz/api/thundertext?text=${body.slice(9)}&apikey=apikeyaine`)
			    	client.sendMessage(from, thndr, MessageType.image, {quoted: mek})
			   	await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'glitch':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				var gh = body.slice(8)
				var gli = gh.split("|")[0];
				var tch = gh.split("|")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitch Aine & Gans`)
				const gltch = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apikeyaine`)
				client.sendMessage(from, gltch, MessageType.image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'phlogo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Teks nya mana?')
				gh = body.slice(8)
				zeks10 = gh.split("|")[0];
				zeks20 = gh.split("|")[1];
				reply(ind.wait())
				const phlgg = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${zeks10}&text2=${zeks20}&apikey=apikeyaine`)
				client.sendMessage(from, phlgg, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'matrix':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const mtrx = await getBuffer(`https://pencarikode.xyz/api/textpro/matrix?text=${body.slice(8)}&apikey=pais`)
				client.sendMessage(from, mtrx, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'dropwater':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const drpwr = await getBuffer(`https://pencarikode.xyz/api/textpro/dropwater?text=${body.slice(11)}&apikey=pais`)
				client.sendMessage(from, drpwr, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'heartlogo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const hrtlg = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?teks=${body.slice(11)}`)
				client.sendMessage(from, hrtlg, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'flowerlogo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const flwrlg = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/wooden-boards?teks=${body.slice(12)}`)
				client.sendMessage(from, flwrlg, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kopilogo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const kpilg = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/put-coffee-cup?teks=${body.slice(10)}`)
				client.sendMessage(from, kpilg, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			/*case 'smokelogo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				smoke = body.slice(11)
				reply('「❗」Aine sedang membuat smoke logo..')
				smokee = await getBuffer(`https://fzn-gaz.herokuapp.com/api/smoke?text=${smoke}`)
				client.sendMessage(from, smokee, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
			break*/
			case 'assasinlogo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const asinlg = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/dark-metal?teks=${body.slice(13)}&background=0`)
				client.sendMessage(from, asinlg, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break

			case 'glowneon':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				glowneon = body.slice(10)
				reply('「❗」Aine sedang membuat glowneon text..')
				const glwnn = await getBuffer(`https://videfikri.com/api/textmaker/darkneon/?text=${glowneon}`)
				client.sendMessage(from, glwnn, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'wptext':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const wptxt = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${body.slice(8)}`)
				client.sendMessage(from, wptxt, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'gaminglogo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const gmglg = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(12)}`)
				client.sendMessage(from, gmglg, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'nulis':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis Percobaan`)
				const nulss = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${body.slice(7)}&apikey=apikeyaine`)
				client.sendMessage(from, nulss, MessageType.image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)				
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break	
			case 'nulis2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const nolss = await getBuffer(`https://hadi-api.herokuapp.com/api/nulis3?teks=${body.slice(8)}`)
				client.sendMessage(from, nolss, MessageType.image, {caption: 'Nih kak udah jadi.. tulisan aine baguskan? 🤭', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break		
			case 'hartatata':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}hartatahta hanya dia`)
				const hrtata = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${body.slice(11)}&apikey=apikeyaine`)
				client.sendMessage(from, hrtata, MessageType.image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'bplogo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const bplgg = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${body.slice(8)}&apikey=apikeyaine`)
				client.sendMessage(from, bplgg, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'text3d':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const txt3d = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${body.slice(7)}&apikey=apikeyaine`)
				client.sendMessage(from, txt3d, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'blood':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(ind.wrongf())
				const bldss = encodeURIComponent(body.slice(7))
				const bldd = await getBuffer(`https://pencarikode.xyz/api/textpro/blood?text=${bldss}&apikey=pais`)
				client.sendMessage(from, bldd, MessageType.image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			//qr 
			case 'qrcode':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const tex = encodeURIComponent(body.slice(8))
				if (!tex) return client.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
				const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
				client.sendMessage(from, buff, MessageType.image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'lirik3':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Lirik lagunya mana kak?')
				tales = body.slice(8)
				anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=`, {method: 'get'})
				reply('*Lirik lagu* 🎶'+tales+' 🎶 :\n\n\n'+anu.result.lirik)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			/*case 'lirik':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Lirik lagunya mana kak?')
				tels = body.slice(7)
				anu = await fetchJson(`https://scrap.terhambar.com/lirik?word=${tels}`, {method: 'get'})
				reply('*Lirik lagu* 🎶'+tels+' 🎶 :\n\n\n'+anu.result.lirik)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break*/
			case 'lirik':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Lirik lagunya mana kak?')
				liriknyee = body.slice(7)
				anu = await fetchJson(`https://some-random-api.ml/lyrics?title=${liriknyee}`, {method: 'get'})
				lirisk = `Judul : ${anu.title}\nArtis : ${anu.author}\n\nLirik :\n${anu.lyrics}`
				// buffer = await getBuffer(anu.thumbnail.genius)
				// client.sendMessage(from, buffer, image, {quoted: mek, caption: lirisk})
				reply(lirisk)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'lirik2':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Lirik lagunya mana kak?')
				telss = body.slice(8)
				anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${telss}`, {method: 'get'})
				reply('*Lirik lagu* 🎶'+telss+' 🎶 :\n\n\n'+anu.result.lirik)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'chord':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Judul lagunya mana kak')
				tels = body.slice(7)					
				anu = await fetchJson(`https://hadi-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
				reply(anu.result)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'alay':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('kasih teks lah^_^!!!')
				data = await fetchJson(`https://api.terhambar.com/bpk?kata=${body.slice(6)}`)
				reply(data.text)
			        await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'cerpen':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
				cerp = `Judul : _${data.result.title}_\nPembuat : _${data.result.pengarang}_\n\n${data.result.cerpen}`
				reply(cerp)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'say':
				teks = body.slice(5)
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('teksnya mana kak?')
				saying = teks
				client.sendMessage(from, saying, text)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			/*case 'wiki':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('masukan kata kunci kak')
				tels = body.slice(6)					
				anu = await fetchJson(`https://alfians-api.herokuapp.com/api/wiki?q=${tels}`, {method: 'get'})
				reply(anu.result)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break*/
			case 'wiki':
                if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
                await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				teks = args.join(' ')
				res = await wikiSearch(teks).catch(e => {
				return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
				}) 
				result = `*Judul :* ${res[0].judul}\n\n*Wiki :* ${res[0].wiki}`
				sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
 				reply(result)
				})
			break
			/*case 'wiki':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('masukan kata kunci kak')
				tels = body.slice(6)					
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/wikipedia?search=${tels}&apikey=zahirgans`, {method: 'get'})
				reply(anu.result.result)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break*/
			case 'niatshalat':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					data = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/niatshalat?apikey=zahirgans`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `${i.arabic}\n\n*Latin* : ${i.latin}\n*Bacaan* : ${i.name}\n*Terjemah* : ${i.terjemahan}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'asmaulhusna':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					data = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/asmaulhusna?apikey=zahirgans`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result.data) {
						teks += `${i.arabic}\n\n*Nomor* : ${i.index}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.translation_id}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'findnabi':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				        nabi = body.slice(10)
					data = await fetchJson(`https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=${nabi}`)
					nabii = `Nama : ${data.nabi.nama}\nUmur : ${data.nabi.umur}\n\n${data.nabi.kisah}`
					reply(nabii)
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'quran':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
		case 'nekonime':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				gatauda = body.slice(9)
				reply(ind.wait())
                                anu = await fetchJson('https://akaneko-api.herokuapp.com/api/neko', {method: 'get'})
				buffer = await getBuffer(anu.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
		case 'aesthetic':
				gatauda = body.slice(9)
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/estetikpic?apikey=apikeyaine`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'hentai2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				data = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
				buffer = await getBuffer(data.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=Tobzzz17`)
				hepi = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apikeyaine&q=${body.slice(10)}`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
		case 'waifu':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://waifu.pics/api/sfw/waifu')
					buffer = await getBuffer(data.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
		break
                case 'nangis':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://waifu.pics/api/sfw/cry', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
		break
			/*case '':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				data = await fetchJson('https://nekos.life/api/v2/img/')
				buffer = await getBuffer(data.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break*/
			case 'solo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				data = await fetchJson('https://nekos.life/api/v2/img/solo')
				buffer = await getBuffer(data.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'lewdkemo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				data = await fetchJson('https://nekos.life/api/v2/img/lewdkemo')
				buffer = await getBuffer(data.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'feet':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				data = await fetchJson('https://nekos.life/api/v2/img/feet')
				buffer = await getBuffer(data.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'hentai':
			case 'rdmhentai':
			case 'randomhentai':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				data = await fetchJson('https://nekos.life/api/v2/img/hentai')
				buffer = await getBuffer(data.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
		case 'neko':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				gatauda = body.slice(4)
				reply(ind.wait())
				anu = await fetchJson(`https://nekos.life/api/v2/img/neko`, {method: 'get'})
				buffer = await getBuffer(anu.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
                case 'avatar':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://nekos.life/api/v2/img/avatar`, {method: 'get'})
				buffer = await getBuffer(anu.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
                case 'kemonomimi':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				gatauda = body.slice(12)
				reply(ind.wait())
				anu = await fetchJson(`https://nekos.life/api/v2/img/kemonomimi`, {method: 'get'})
				buffer = await getBuffer(anu.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'blowjob2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isNsfw) return reply(ind.nsfwoff())
				reply(ind.wait())
				data = await fetchJson('https://nekos.life/api/v2/img/blowjob')
				buffer = await getBuffer(data.url)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'gasm':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/gasm', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'smug':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/smug', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'blowjob':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/bj', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'cium':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/kiss', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'peluk':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/hug', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'pelukan':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/cuddle', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'pussy':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/pussy', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'boobs':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/boobs', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'sodok':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/solog', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'tampar':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/slap', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
				/*case 'husbu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break*/
			/*case 'joox':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
				if (data.error) return reply(data.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
				buffer = await getBuffer(data.result.thumb)
				lagu = await getBuffer(data.result.mp3)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
			break*/
			case 'joox':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://pencarikode.xyz/download/joox?search=${body.slice(6)}&apikey=pais`, {method: 'get'})
				if (data.error) return reply(data.error)
				infomp3 = `*Lagu Ditemukan!!!*\nArtis : ${data.result.artist} - ${data.result.judul}\nAlbum : ${data.result.album}\nUkuruan : ${data.result.filesize}`
				buffer = await getBuffer(data.result.img_url)
				lagu = await getBuffer(data.result.mp3_url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.judul}.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'play3':   
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				play = body.slice(7)
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${play}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.title}\nSource : Error\nUkuran : ${anu.filesize}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.thumb)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.link)
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'play2':   
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				played = body.slice(7)
				anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${played}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				client.sendMessage(from, infomp3, text, {quoted: mek})
				lagu = await getBuffer(anu.result.url)
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'play4':   
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				playeds = body.slice(7)
				anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${playeds}`)
				if (anu.error) return reply(anu.error)
				infomp3vide = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				client.sendMessage(from, infomp3vide, text, {quoted: mek})
				lagus = await getBuffer(anu.result.url)
				client.sendMessage(from, lagus, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: infomp3vide})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'play':   
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				playvinz = body.slice(6)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=apikeyaine&q=${playvinz}`)
				if (anu.error) return reply(anu.error)
				infomp3vinz = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumb)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3vinz})
				laguvinz = await getBuffer(anu.result.link)
				client.sendMessage(from, laguvinz, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'ytmp3':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				if (args.length < 1) return reply('Urlnya mana kak?')
				if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
				anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${args[0]}&apikey=apikeyaine`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				teks = `❏ *Title* : ${anu.result.title}\n❏ *Ukuran* : ${anu.result.size}\n\n❏ *Tunggu Bentar Ya Kak, Audionya Lagi Di Kirim...*`
				thumb = await getBuffer(anu.result.thumb)
				client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
				buffer = await getBuffer(anu.result.link)
				client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				if (args.length < 1) return reply('Urlnya mana kak?')
				if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
				anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4/2?url=${args[0]}&apikey=apikeyaine`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				teks = `❏ *Title* : ${anu.result.title}\n❏ *Ukuran* : ${anu.result.size}\n\n❏ *Tunggu Bentar Ya Kak, Vidoenya Lagi Di Kirim...*`
				thumb = await getBuffer(anu.result.thumb)
				client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
				buffer = await getBuffer(anu.result.link)
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'igmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				reply(ind.wait())
				if (args.length < 1) return reply('Urlnya mana kak?')
				if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply(ind.stikga())
				anu = await fetchJson(`https://x-restapi.herokuapp.com/api/ig-dl?url=${args[0]}&apikey=BETA`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				teeks = `❏ *Tunggu Bentar Ya Kak, Vidoenya Lagi Di Kirim...*`
				thumbs = await getBuffer(`https://i.ibb.co/4KSh6DX/maxresdefault.jpg`)
				client.sendMessage(from, thumbs, image, {quoted: mek, caption: teeks})
				buffer = await getBuffer(anu.linkdownload)
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			/*case 'tiktokdl':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson (`https://api.zeks.xyz/api/tiktok?url=${args[0]}&apikey=apikeyaine`, {method : 'get' })
				if (anu.error) return reply(anu.error)
				tekks = `❏ *Tunggu Bentar Ya Kak, Vidoenya Lagi Di Kirim...*`
				thuumbs = await getBuffer(`https://i.ibb.co/4KSh6DX/maxresdefault.jpg`)
				client.sendMessage(from, thuumbs, image, {quoted: mek, caption: tekks})
				buffer = await getBuffer(anu.no_watermark)
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				await limitAdd(sender)
			break*/
			/*case 'tiktokdl':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson (`https://bx-hunter.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=Ikyy69`, {method : 'get' })
				if (anu.error) return reply(anu.error)
				tekks = `❏ *Tunggu Bentar Ya Kak, Vidoenya Lagi Di Kirim...*`
				thuumbs = await getBuffer(`https://i.ibb.co/4KSh6DX/maxresdefault.jpg`)
				client.sendMessage(from, thuumbs, image, {quoted: mek, caption: tekks})
				buffer = await getBuffer(anu.video_URL.vid_wm)
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break*/
			case 'tiktokdl':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson (`https://bx-hunter.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=Ikyy69`, {method : 'get' })
				if (anu.error) return reply(anu.error)
				tekks = `❏ *Tunggu Bentar Ya Kak, Vidoenya Lagi Di Kirim...*`
				thuumbs = await getBuffer(`https://i.ibb.co/4KSh6DX/maxresdefault.jpg`)
				client.sendMessage(from, thuumbs, image, {quoted: mek, caption: tekks})
				buffer = await getBuffer(anu.video_URL.vid_wm)
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
				//freerestapi 
			case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				ttkstalk = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/tiktok?username=${body.slice(13)}&apikey=Ikyy69`)
				const ttstlk = await getBuffer(ttkstalk.result.user.avatarMedium)
				hasilne = `ID : ${ttkstalk.result.user.id}\nUsername : ${ttkstalk.result.user.uniqueId}\nNickname : ${ttkstalk.result.user.nickname}\nFollower : ${ttkstalk.result.stats.followerCount}\nFollowing : ${ttkstalk.result.stats.followingCount}\nSignature : ${ttkstalk.result.user.signature}`
				client.sendMessage(from, ttstlk, image, {quoted: mek, caption: hasilne})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'githubstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				hmms = await fetchJson(`https://pencarikode.xyz/stalk/github?q=${body.slice(13)}&apikey=pais`)
				buffer = await getBuffer(hmms.result.avatar_url)
				hasil = `Fullname : ${hmms.result.username}\nPengikut : ${hmms.result.followers}\nMengikuti : ${hmms.result.following}\nLink Blog : ${hmms.result.blog}\nUrl Github : ${hmms.result.url}\nbio : ${hmms.result.bio}`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			/*case 'igstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				hmm = await fetchJson(`https://alfians-api.herokuapp.com/api/stalk?username=${body.slice(9)}`)
				buffer = await getBuffer(hmm.Profile_pic)
				hasil = `Fullname : ${hmm.Name}\nUsername : ${hmm.Username}\nPengikut : ${hmm.Jumlah_Followers}\nMengikuti : ${hmm.Jumlah_Following}\nPost : ${hmm.Jumlah_Post}\nBio : ${hmm.Biodata}`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break*/
			case 'igstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`Username?`)
				hmm = await fetchJson(`https://fdz-app.herokuapp.com/api/stalkig?username=${body.slice(9)}`)
				buffer = await getBuffer(hmm.picurl)
				hasil = `Fullname : ${hmm.fullname}\nUsername : ${hmm.username}\nPengikut : ${hmm.followers}\nMengikuti : ${hmm.following}\nPost : ${hmm.post}\nBio : ${hmm.bio}`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			/*case 'igstalk2':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://fdz-app.herokuapp.com/api/stalkig?username=${body.slice(9)}`)
				igstal = `*Username : ${data.result.username}*\n\nFullname : ${data.result.full_name}\nPengikut : ${data.result.followers}\nMengikuti : ${data.result.following}\nbio : ${data.result.bio}`
				reply(igstal)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break*/
					//daftar 
			/*case 'daftar':
				if (isRegistered) return  reply(ind.rediregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
				const namaUser = q.substring(0, q.indexOf('|') - 0)
				const umurUser = q.substring(q.lastIndexOf('|') + 1)
				const serialUser = createSerial(20)
				if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
				if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
				if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
				if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
				try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				veri = sender
				if (isGroup) {
				addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
				await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
				addATM(sender)
				addLevelingId(sender)
				console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
				} else {
				addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
            			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
				addATM(sender)
				addLevelingId(sender)
				console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
				}
			break*/
				//terhambar 
			case 'quotemaker':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				var gh = body.slice(12)
				var quote = gh.split("|")[0];
				var wm = gh.split("|")[1];
				const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|Aine`
				if (args.length < 1) return reply(pref)
				reply(ind.wait())
				anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
		case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(ind.wait())
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
				//fadli 
			case 'pictcewek':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing)
				ty = ["ulzhang girl","cewek cantik","cewek hijab","cute girl","cewek rusia cantik","cewek jepang cantik","cecan indo"]
				nk = ty[Math.floor(Math.random() * ty.length)]
				try {
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${nk}`, {
				method: 'get'
				})
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				nimek = n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, {
				quoted: mek, caption: `Tuh kak aine cariin cewe cantik`
				})
				await limitAdd(sender)
				} catch {
				reply(ind.wait())
				}
				break
			case 'pictcowok':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing)
				uk = ["ulzhang boy","cowok keren","cowok ganteng","cogan","cowok korea"]
				nk = uk[Math.floor(Math.random() * uk.length)]
				try {
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${nk}`, {
				method: 'get'
				})
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				nimek = n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, {
				quoted: mek, caption: `Tuh kak aine cariin cowo ganteng`
				})
				await limitAdd(sender)
				} catch {
				reply(ind.wait())
				}
				break
			case 'loli':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing)
				ty = ["loli","loli kawai","loli sagiri","anime loli","loli cat"]
				nk = ty[Math.floor(Math.random() * ty.length)]
				try {
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${nk}`, {
				method: 'get'
				})
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				nimek = n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, {
				quoted: mek, caption: `Tuh kak aine cariin loli kawai`
				})
				await limitAdd(sender)
				} catch {
				reply(ind.wait())
				}
				break
			case 'anime':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing)
				ty = ["anime girl","anime kawai","anime girl profile","anime cute girl","anime cool girl","anime loli cute"]
				nk = ty[Math.floor(Math.random() * ty.length)]
				try {
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${nk}`, {
				method: 'get'
				})
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				nimek = n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, {
				quoted: mek, caption: `Tuh kak aine cariin loli kawai`
				})
				await limitAdd(sender)
				} catch {
				reply(ind.wait())
				}
				break
			/*case 'pinterest':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${body.slice(11)}`, {method: 'get'})
				reply(ind.wait())
				n = JSON.parse(JSON.stringify(data));
				nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break*/
			case 'pinterest2':
			    if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.updatePresence(from, Presence.composing)
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}pinterest miku`)
				pinterest(`${args}`).then( data => {
				const amsulah = data.result
				const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
				sendMediaURL (from ,pimterest , `Pinterest : ${args}`)
				})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'pinterest':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					client.updatePresence(from, Presence.composing)
					data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${body.slice(10)}`, { method: 'get' })
					yana = data.data
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(yana));
					nimek = n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*` })
					console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'pokemon':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${command}`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'anjing':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${command}`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kucing':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${command}`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'doraemon':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${command}`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'hamster':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=aesthetic-hamsters`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kelinci':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=aesthetic-rabbit`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'mobil':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=cars`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'motor':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=motorcycle`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'sepeda':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=bicycle`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'bluesky':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=aesthetic-blue-sky`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'flower':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=aesthetic-flower`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'icecream':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=aesthetic%20ice%20cream`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'pemandangan':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=aesthetic%20pemandangan%20alam`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'osakana':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${command}`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'menherachan':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=menhera-chan`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'naruto':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=naruto%20uzumaki%20wallpaper%20hd`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'animegirl':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=anime-girl`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'animeboy':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=anime-boy`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'quotesid':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=quotes%20indonesia`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'quotesen':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=quotes`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'katakata':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=katakata`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'katamotivasi':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=kata%20motivasi`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'katakehidupan':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=kata%20kata%20bijak%20kehidupan`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'islami':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=quotes%20islami`, { method: 'get' })
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
				//jojo 
			case 'stickerhide':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
				await limitAdd(sender)
			break
			/*case 'emoji':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${args[0]}&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				await limitAdd(sender)
			break*/
			case 'semoji':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				const iniaine = body.slice(7)
			    if (iniaine.length > 1) return client.sendMessage(from, 'Maaf Emoji Terlalu Banyak, Maksimal 1 Teks', msgType.text, {quoted: mek})
				if (args === 0) return reply('emojinya?')   
				if (args.length < 1) return reply(`Emojinya?`)
				let aku4 = args.join(' ')
				emoji.get(`${aku4}`).then(emoji => {
				let link = `${emoji.images[4].url}`
				sendWebp(from, `${link}`).catch(() => reply('gagal'))
				})
			break
			case 'quotes':
				client.updatePresence(from, Presence.composing) 
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = fs.readFileSync('./lib/quotes.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
            			randQuote = '_'+randKey.quotes+'_\n\n_'+randKey.author+'_'
				client.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'ppcouple':
				client.updatePresence(from, Presence.composing) 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = fs.readFileSync('./lib/ppcouple.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				Laki = await getBuffer(randKey.result.laki)
				client.sendMessage(from, Laki, image,  { caption: '*_Nih kak_*', quoted: mek })
				Cewe = await getBuffer(randKey.result.cewek)
				client.sendMessage(from, Cewe, image, { caption: '*_Nih kak_*', quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
			break
			/*case 'pantun':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				gatauda = body.slice(8)					
				anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apikeyaine`, {method: 'get'})
				reply(anu.result.pantun)
				await limitAdd(sender)
			break*/
			case 'quoteskehidupan':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
				const quo = quotes[Math.floor(Math.random() * quotes.length)]
				buffer = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
		case 'quotesislami':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
				const isl = islami[Math.floor(Math.random() * islami.length)]
				buffer = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break	
		case 'quotesnasehat':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
				const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
				buffer = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break	
		case 'quotescinta':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					const cinta =['Disaat bosan dan jarang ketemu Aku harap kamu tidak mencari kenyamanan dengan orang lain.','Saya tidak mencari yang sempurna, tapi saya mencari yang menganggap saya dan, tidak malu memiliki saya.','Maaf aku mencintaimu hanya bermodalkan setia bukan dengan harta.','Berjanjilah tidak akan pergi, walaupun ada seseorang yang lebih sempurna dariku.','Boleh aku minta satu hal? Tolong jangan jatuh cinta pada orang lain selain aku.','Ketika ibuku mengenalmu, berarti aku sungguh serius berhubungan denganmu.','Aku tidak ingin kehilanganmu hari ini, esok, ataupun selamanya.','Aku memilihmu karena aku nyaman, dan itu tidak aku dapatkan dari orang lain.','Cinta terbaik adalah saat kamu mencintai seseorang yang membuat akhlaqmu makin indah, dan hatimu makin bijak.','Laki laki hebat dia mempersiapkan lamaran bukan mengajak pacaran.','Sebaik-baiknya cinta adalah cinta yang di halalkan.','Duduklah disampingku, akan diceritakan betapa tulusnya aku mencintaimu.','Berkomitmen denganmu adalah adaptasi yang tidak cukup sehari. Setiap harinya petualangan, Kadang menyebalkan seringkali menyenangkan beberapa kali ingin mundur tapi sepertinya hidup takan baik baik saja tanpamu.','Bersabarlah Cinta sejati tau kemana dia akan pulang.','Bahagialah kamu yang mempunyai dia yang tidak hanya pintar merebut hati, namun juga pintar menjaga hati.','Ketika cowok sudah masuk ke logikanya cewek. Ketika cewek sudah masuk ke perasaannya cowok. Masing-masing tidak akan bisa ke mana-mana.','Dia yang selalu memuja kelebihanmu pada akhirnya akan kalah dengan dia yang masih tetap di sisimu setelah tau kekuranganmu.','Kamu bisa berjalan dengan siapa saja, Tapi tolong, Tolong jaga hati ini, yang sudah mencintai mu.','Kalau kangen tidak usah bilang-bilang ya.. Takutnya entar aku luluh terus lupa alasan membenci kamu. Serius..','Kadang kita harus merelakan yang kita cintai, Mengikhlaskan yang kita ingini. Bukan karena Allah tidak sayang, Tapi itulah tanda sayangnya dia, agar bisa belajar bahwa kita hanya dititipi bukan memiliki.','Jika masih kalah dari jarak & sinyal berarti cintamu tak cukup handal.','Aku cemburu karena aku takut seseorang bisa membahagiakanmu lebih daripada aku.','Jatuh cinta sih boleh pake perasaan, Tapi ngerawatnya pake penghasilan.','Seseorang yang memang ditakdirkan untuk mu akan selalu ada di sisimu\nTAK PERLU KAU KEJAR\nTAK PERLU KAU MOHON\nTAK PERLU KAU PAKSA','Semoga yang saat ini bersamaku, Tidak menyimpan rasa pada orang lain.','Kamu tidak bisa memaksa dia untuk mencintai mu, Tapi kamu bisa memaksa dirimu untuk berhenti mencintainya.','Cinta itu tak akan pernah mati. Tapi bisa berpindah ke lain hati,Kepada dia yang lebih menghargai.','Tolong, Jangan hanya diam ketika aku sedang memperjuangkanmu..','Beberapa orang ditakdirkan untuk saling jatuh cinta, Tapi tidak ditakdirkan untuk bersama.','Mari kita saling melengkapi.Aku akan menjadi kelebihan di setiap kekuranganmu.Dan kau akan menjadi kelebihan di setiap kekurangan ku.','Mencintaimu adalah bahagia dan sedih. Bahagia karena memiliki mu dalam kalbu, Sedih karena kita sering berpisah.','Mimpiku sangat sederhana, Yaitu mencintai mu dan bisa berada dalam satu ikatan halal bersama mu.']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					buffer = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
		case 'quotesmotivasi':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					buffer = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: '*Quotes Motivasi*\n\n'+ vasi })
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'infonomor':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
				data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
				if (data.error) return reply(data.error)
				if (data.result) return reply(data.result)
				hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
				reply(hasil)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break 
			case 'beritahoax':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
				teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'fototiktok':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				gatauda = body.slice(12)
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buffer = await getBuffer(anu.result)
				reply(buffer)
			        await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break 
			case 'neonime':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
				teks = '################\n'
				for (let i of data.result) {
					teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
			break 
			case 'kusonime':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://ferdizstar-api.herokuapp.com/api/kuso?q=${body.slice(10)}`)
				textskus = `${data.info}\n\nLink Download :\n${data.link_dl}\n\nSinopsis : ${data.sinopsis}`
				buffer = await getBuffer(data.thumb)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: textskus})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'twichquotes':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`, {method: 'get'})
				reply(anu.result)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break	
			/*case 'katacinta':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				gatauda = body.slice(8)
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
				reply(anu.result)
				await limitAdd(sender)
			break*/
			case 'animequotes':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const animq = ['_Luka dipunggung merupakan aib bagi seorang pendekar_\n\n_Zoro_','_Seorang Pria sejati tidak akan pernah melukai seorang wanita_\n\n_Kuro Ashi Sanji_','_Seorang koki sejati, tidak akan pernah membuang makanan yang tersisa_\n\n_Kuro Ashi Sanji_','_Masa lalu adalah masa lalu. Kita tidak bisa memanjakan diri kita dalam kenangan dan menghancurkan masa kini_\n\n_Murata Ken_','_Ketika seorang lelaki menangis, disana pasti ada alasan yang sangat berarti_\n\n_Yoh Asakura_','_Kebohongan menyelamatkanmu sementara tapi itu akan menghancurkanmu selamanya_\n\n_L.Lawliet_','_Bahkan dalam situasi terburuk pasti masih ada kesempatan_\n\n_Sanji_','_Aku takkan menarik kata-kataku. Itulah jalan ninjaku_\n\n_Uzumaki Naruto_','_Jangan tertipu oleh penampilan luar saja_\n\n_Smoker_','Membuat dengan perasaan senang akan membuat kue jadi terasa lebih nikmat__\n\n_Doraemon_','_Kau tidak bisa membeli cinta dan kedamaian dengan uang_\n\n_Misa Amane_','_Dibalik harapan, selalu ada keputus asa-an_\n\n_Blood Leopard_','_Kita harus mensyukuri apa yang kita punya saat ini, karena mungkin orang lain belum tentu mempunyainya_\n\n_Kayaba Akihiko_','_Orang tua haruslah selalu percaya pada anak-anak mereka_\n\n_Minato_','_Mempelajari masa lalu untuk memperkirakan masa depan. Itulah arti penting mengetahui sejarah_\n\n_Pain_','_Dosa yang telah ku perbuat sangatlah banyak, bahkan jika ku habiskan seluruh hidupku untuk menebusnya itu tidak akan cukup… jadi, setidaknya aku ingin menolong orang2 sebanyak mungkin yang aku temui selama hidupku !_\n\n_Ultear_','_Daripada Kau Berpikir Bagaimana Untuk Mati Indah, Mengapa Kau Tidak Berpikir Hidup Indah Sampai Akhir !?_\n\n_Gintoki_','_Jalani Dan Nikmati Hidup Ini, Jangan Selalu Terpaku Melihat Masa Lalu, Itu Hanya Akan Membuat HidupMu Tidak Menyenangkan.._\n\n_Eikichi Onizuka _','_Jika tidak ada lagi yang dapat kau lakukan, maka mau tidak mau kau harus menerimanya_\n\n_Tsugumi_','_Kita tidak seharusnya mengeluh pada diri kita sendiri_\n\n_Haikyu_','_Menurut saya seseorang harus melewati tantangan jika ingin berkembang_\n\n_Yukino Yukinoshita_','_Jangan Pernah Meremahkan Diri Sendiri, karena diri sendiri ada kelebihan tersendiri_\n\n_Portgas D Ace_','_Impian Manusia tidak akan pernah habis_\n\n_Marshal D Teach_','_Kita harus jujur meski akan menyakiti orang yang berharga bagi kita. Karena dia berharga, makanya harus jujur_\n\n_Taishi_','_Aku akan berusaha menjadi lebih, lebih, dan lebih kuat lagi, untuk melindungi orang yang aku sayangi._\n\n_Monkey D’ Luffy_','_Jika cara pertama tidak berhasil. Cobalah cara lainnya dan jangan pernah berkata tidak bisa_\n\n_Akaba Hayato_','_Masa depan tak akan datang pada orang yang tak punya masa lalu_\n\n_Yami Yugi_','_Aku tak akan bilang kau bisa berhasil kalau tak menyerah. tapi kalau kau menyerah, maka tak ada apa-apa lagi yang tersisa_\n\n_Aomine_','_Jangan tersinggung jika kau tidak bisa menyelesaikan tugasmu dengan baik, percayalah setiap insan mempunyai kekurangan dan kelebihan, kelemahan dan kekuatan_\n\n_Uzumaki Kushina_','_Mereka yang belum berusaha, jangan pernah bilang dirinya tidak berbakat_\n\n_Nanami_','_Meskipun kita telah mengetahui batasnya, tapi kita harus mengincar yang lebih tinggi lagi_\n\n_Daichi sawamura _','_Seorang manusia akan menjadi lebih kuat seiring halangan dan ombak (masalah) yang menerpa menghadangnya._\n\n_Roronoa Zoro_','_Sendirian lebih baik daripada bersama salah orang._\n\n_L Lawliet_','_Jika Anda tidak dapat melakukan sesuatu, jangan Fokus pada apa yang dapat Anda lakukan._\n\n_Shiroe (Log Horizon)_','_Ingat pelajarannya, bukan kekecewaannya._\n\n_Holo The Wise Wolf (Spice And Wolf)_','_Anda tidak bisa selalu berpegang pada hal-hal yang penting. Dengan membiarkan mereka pergi, kita mendapatkan sesuatu yang lain._\n\n_Kunio Yaobi_','_Seorang pemimpin yang hebat harus memiliki semangat karena itu adalah tugas mereka untuk membuat semua orang terus maju._\n\n_Nico Yazawa_','_Jadilah diri sendiri dan Anda akan baik-baik saja._\n\n_Natsuki Takaya (Fruits Basket)_','_Lebih penting untuk menguasai kartu yang Anda pegang daripada mengeluh tentang kartu yang dibagikan lawan Anda._\n\n_Grimsley_','_Tidak mungkin bekerja keras untuk sesuatu yang tidak Anda sukai._\n\n_Silica (Sword Art Online)_','_Tidak menyerah pada diri sendiri adalah yang paling penting. Dengan begitu, Anda tidak berakhir menyedihkan._\n\n_Reiko Mikami_','_Jika Anda hanya menyerahkan diri Anda pada takdir, maka itulah akhirnya._\n\n_Keiichi Maebara_','_Dalam masyarakat kita, membiarkan orang lain mengetahui bahwa Anda adalah orang yang baik adalah tindakan yang sangat berisiko. Sangat mungkin seseorang akan memanfaatkannya._\n\n_Hitagi Senjougahara_','_Anda tidak bisa memenangkan permainan dengan tidak melakukan apa-apa. Dan jika orang lain memenangkannya untuk Anda, maka Anda belum mencapai apa pun. Hidup juga sama._\n\n_Junichirou Kagami_','_Jangan menyerah, jangan malu jatuh! Rasa malu yang sebenarnya adalah tidak berdiri lagi!_\n\n_Shintaro Midorima_','_Jika tidak ada yang peduli untuk menerima Anda dan menginginkan Anda di dunia ini, terimalah diri Anda sendiri dan Anda akan melihat bahwa Anda tidak membutuhkan mereka dan gagasan egois mereka._\n\n_Alibaba Saluja (Magi)_','_Jangan menjalani hidup kamu dengan mencari-cari alasan. Orang yang membuat pilihan mu adalah diri mu sendiri!_\n\n_Mugen_','_Aku tidak suka dengan orang yang membohongi dirinya sendiri ditengah turunnya salju._\n\n_Kushina (Naruto)_','_Sebelum melakukan sesuatu, ada baiknya kita berdoa._\n\n_Hidan (Naruto)_','_Tak perlu teman banyak, tapi pilihlah teman yang benar-benar dapat kamu percaya._\n\n_Kushina (Naruto)_','_Selama masih ada cinta, kebencian akan selalu menyertainya._\n\n_Minato Namikaze (Naruto)_','_Seseorang akan benar-benar menjadi kuat ketika ingin melindungi seseorang yang berharga._\n\n_Haku (Naruto)_','_Shinobi yang melanggar aturan memang disebut sampah. Tetapi shinobi yang meninggalkan teman seperjuangannya lebih rendah dari sampah._\n\n_Obito Uchiha (Naruto)_','_Obat untuk hati yang terluka adalah kasih sayang._\n\n_Gaara (Naruto)_','_Tidak semua mimpi dan harapan akan terwujud sesuai dengan keinginan kita._\n\n_Orochimaru (Naruto)_','_Mereka yang bersedia memaafkan diri mereka sendiri dan berani menerima kenyataan itulah yang disebut kuat._\n\n_Itachi (Naruto)_','_Tanpa arah dan tujuan tidak ada gunanya kau hidup di dunia ini._\n\n_Gai Maito (Naruto)_','_Keyakinan lebih baik daripada rencana apapun._\n\n_Nagato (Naruto)_','_Memaafkan adalah kunci untuk memutuskan rantai kebencian._\n\n_Jiraiya (Naruto)_','_Kau gagal tetapi masih bisa bangkit kembali, itulah menurutku arti kuat yang sebenarnya!_\n\n_Hyuga Hinata (Naruto)_','_Aku pernah kehilangan semuanya, aku tak mau lagi melihat teman yang berharga bagiku tewas di hadapanku._\n\n_Sasuke Uchiha (Naruto)_','_Takdir setiap manusia memang telah ditentukan sejak mereka lahir, tetapi dengan kerja keras kita dapat mengalahkan takdir._\n\n_Naruto Uzumaki (Naruto)_','_Jika kau menungguku untuk menyerah, kau akan menungguku selamanya._\n\n_Naruto Uzumaki (Naruto)_','_Ada kalanya kata hatilah yang menggerakan tubuh kita._\n\n_Emporio Ivankov (One Piece)_','_Di dunia ini tidak ada penyakit yang tidak bisa disembuhkan._\n\n_Chopper (One Piece)_','_Jangan sia-siakan kesempatan yang ada, akan membosankan kalau sampai kau menyesalinya nanti._\n\n_Franky (One Piece)_','_Seorang koki sejati itu tidak akan membuang-buang bahan makanan yang tersisa._\n\n_Sanji (One Piece)_','_Melihat mimpi kita terwujud memang menyenangkan tapi bisa hidup hari ini pun bagiku sudah cukup._\n\n_Ace (One Piece)_','_Harta karun paling berharga adalah keluarga._\n\n_Edward Newgate (One Piece)_','_Cinta selalu datang bagai badai._\n\n_Boa Hancock (One Piece)_','_Jangan hanya menghitung apa yang telah hilang, tetapi pikirkan apa yang masih kita miliki._\n\n_Jinbei (One Piece)_','_Kesepian sudah tidak ada lagi di dalam kamusku._\n\n_Brook (One Piece)_','_Kalau aku tidak ada di saat dia menderita, aku tidak pantas lagi disebut sebagai temannya._\n\n_Ussop (One Piece)_','_Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan._\n\n_Nami (One Piece)_','_Seorang Pria sejati tidak akan pernah melukai seorang wanita._\n\n_Sanji (One Piece)_','_Seorang manusia akan menjadi lebih kuat seiring halangan dan ombak (masalah) yang menerpa menghadangnya._\n\n_Roronoa Zoro (One Piece)_','_Tidak peduli seberat apapun atau tidak mungkin untuk dicapai, kau tidak boleh menyerah dengan tujuanmu._\n\n_Luffy (One Piece)_','_Hidup itu harus memilih. Di saat kau tidak memilih, itulah pilihanmu._\n\n_Luffy (One Piece)_','_Aku akan menentukan masadepanku sendiri._\n\n_Takagi Akito (Bakuman)_','_Kita akan bertarung dan menang untuk melindungi masa depan._\n\n_Son Goku (Dragon Ball)_','_Mereka yang mampu menembak adalah mereka yang sudah siap untuk ditembak._\n\n_Lelouch Lamperouge(Code Geass)_','_Mereka yang tidak bisa menyusun rencana kehidupan mereka sendiri, tidak akan bisa hidup dengan baik._\n\n_Nishio Nishiki (Tokyo Ghoul)_','_Mari hargai nyawa kita sendiri._\n\n_L Lawliet(Death Note)_','_Jika kamu berubah menjadi apa yang kamu takuti, ketakutanmu perlahan akan hilang._\n\n_Takizawa Seidou (Tokyo Ghoul)_','_Aku hanya percaya kepada apa yang mata kepalaku lihat sendiri._\n\n_Kurosaki Ichigo (Bleach)_','_Aku tidak peduli apapun alasan mu, aku tidak akan pernah memaafkan mereka yang menyakiti teman-temanku._\n\n_Akagami Shanks (One Piece)_','_Mereka yang tidak menghargai teman-teman mereka, lebih rendah dari sampah._\n\n_Kakashi Hatake (Naruto)_','_Kalah dan kau akan mati. Menang dan kau akan hidup. Tetapi, kau tidak akan bisa menang kalau kau tidak bertarung._\n\n_Eren Yeager (Shingeki no Kyojin)_','_Bukan nilai yang kuinginkan, melainkan ilmu! Ilmu pengetahuan yang lebih jauh. Aku masih harus berusaha._\n\n_Nobita (Doraemon)_','_Ketakutan bukanlah kejahatan. Itu memberi tahu apa kelemahanmu. Dan begitu tahu kelemahanmu, kamu bisa menjadi lebih kuat._\n\n_Gildarts (Fairy Tail)_','_Jangan khawatirkan apa yang dipikirkan orang lain. Tegakkan kepalamu dan melangkahlah ke depan._\n\n_Izuku Midoriya (Boku no Hero Academia)_','_Untuk mendapatkan kesuksesan, keberanianmu harus lebih besar daripada ketakutanmu._\n\n_Han Juno (Eureka Seven)_','_Jangan menyerah. Hal memalukan bukanlah ketika kau jatuh, tetapi ketika kau tidak mau bangkit lagi._\n\n_Midorima Shintarou (Kuroko no Basuke)_','_Hidup bukanlah permainan keberuntungan. Jika kau ingin menang, kau harus bekerja keras._\n\n_Sora (No Game No Life)_','_Kekuatan sejati dari umat manusia adalah bahwa kita memiliki kuasa penuh untuk mengubah diri kita sendiri._\n\n_Saitama (One Punch Man)_','_Kita harus mensyukuri apa yang kita punya saat ini, karena mungkin orang lain belum tentu mempunyainya._\n\n_Kayaba Akihiko (Sword Art Online)_','_Seseorang tidak akan berjuang sekeras itu jika dia tidak menyukainya._\n\n_Silica (Sword Art Online)_','_Banyak orang gagal karena mereka tidak memahami usaha yang diperlukan untuk menjadi sukses._\n\n_Yukino Yukinoshita (Oregairu)_','_Kalau kau ingin menangis karena gagal, berlatihlah lebih keras lagi sehingga kau pantas menangis ketika kau gagal._\n\n_Megumi Takani (Samurai X)_','_Mula-mula, kau harus merubah dirimu sendiri, atau tidak akan ada yang berubah untukmu._\n\n_Sakata Gintoki (Gintama)_','_Ketika kau bekerja keras dan gagal, penyesalan itu akan cepat berlalu. Berbeda dengan penyesalan ketika tidak berani mencoba._\n\n_Akihiko Usami (Junjou Romantica)_','_Tuhan tak akan menempatkan kita di sini melalui derita demi derita bila Ia tak yakin kita bisa melaluinya_\n\n_Kano Yuki (Sword Art Online)_','_Kalau kau terus berpikir dan tak melakukan apa-apa, kau akan tertinggal jauh._\n\n_Killua (Hunter X Hunter)_','_Apakah kamu tahu betapa bodohnya kita? Jangan remehkan kita._\n\n_Kondou Isao (Gintama)_','_Jangan percaya kalau setiap yang berkaca mata itu pintar!_\n\n_(Hyuuga Junpei (Kuroko No Basket)_','_Hidup itu datangnya dari cinta, dan tidak ada sihir yang bisa mengubahnya!_\n\n_Makarov (Fairy Tail)_','_Semua laki-laki mudah cemburu dan bego, tapi perempuan malah menyukainya. Orang jadi bodoh saat jatuh cinta._\n\n_Horo (Spice and Wolf)_','_Aku akan selalu di sisimu, seperti angin yang berhembus melalui rambutmu._\n\n_Yagami Kazuma (Kaze no Stigma)_','_Cinta dimulai dengan senyuman, tumbuh dengan dekapan, dan seringkali berakhir dengan air mata._\n\n_Oko (Vagabond)_','_Cinta harus berasal dari hati. Maka jika tidak dari hati, jangan pernah berucap bahwa kamu mencintai_\n\n_Faye Valentine (Cowbow Bebob)_','_Jika kau seorang pria, buatlah wanita yang kau cintai jatuh cinta denganmu apapun yang terjadi!_\n\n_Akhio (Clannad)_','_Cinta membuat orang menjadi kuat dan cinta itu juga yang dapat membuat orang menjadi lemah._\n\n_Makarov (Fairy Tail)_','_Kau tidak bisa membeli cinta dan kedamaian dengan uang._\n\n_Misa Amane (Death Note)_','_Cinta itu bisa mengubah seseorang jadi buruk atau baik._\n\n_Misawa (Tonari no Kaibutsu-Kun)_','_Kamu tidak akan mampu menghentikan orang yang sedang jatuh cinta kepada orang yang dia cintai._\n\n_Ako (Kiss X Sis)_','_Kegagalan seorang pria yang paling sulit yaitu ketika dia gagal untuk menghentikan air mata seorang wanita._\n\n_Kasuka Heiwajima (Durarara!)_','_Lebih baik menerima kejujuran yang pahit, dari pada kebohongan yang manis._\n\n_Soichiro Yagami (Death Note)_','_Tersenyumlah selalu walaupun hatimu sedang terluka._\n\n_Kagome (Inuyasha)_','_Air mata palsu bisa menyakiti orang lain. Tapi senyuman palsu hanya akan menyakiti dirimu sendiri._\n\n_C.C (Code Geass)_','_Jika berkata selamat tinggal membuatmu sedih, maka aku akan tinggal di sisimu._\n\n_Niche (Tegami Bachi)_','_Suatu saat akan datang hari di mana semua akan menjadi kenangan._\n\n_Erza Scarlet (Fairy Tail)_','_Kita harus menjalani hidup kita sepenuhnya. Kamu tidak pernah tahu, kita mungkin sudah mati besok._\n\n_Kaori Miyazono (Shigatsu wa Kimi no Uso)_','_Perbedaan antara pemula dan master adalah bahwa master telah gagal lebih dari yang telah dicoba pemula._\n\n_Koro-sensei (Ansatsu Kyoushitsu)_','_Bagaimana kamu bisa bergerak maju kalau kamu terus menyesali masa lalu?_\n\n_Edward Elric (Fullmetal Alchemist: Brotherhood)_','_Kalau itu adalah kenangan yang berarti, jangan dilupakan.\nSebab jika manusia mati, mereka hanya bisa hidup dalam kenangan orang lain._\n\n_Takagi (Detective Conan)_']
				let quotis = animq[Math.floor(Math.random() * animq.length)]
				client.sendMessage(from, quotis, text, {quote: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'pantun':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const ptn = ['pagi-pagi minum kopi\ntapi kopinya bau terasi\nhidupku terasa sepi\njika kau tak ada disisi','Gado-gado campur jamu\nsok belagu nangkep linta\nAku ada kado buat kamu\nsebuah lagu tentang cinta','Buah manggis air mendidih\nKamu nangis aku pun sedih','Laper sampai perut perih\nAkhirnya makan nasi padang\nPutus cinta jangan bersedih\nIngat dunia masih panjang','Masuk ke dalam sebuah kelas\nNunggu guru akhirnya nanti\nCintailah dia dengan ikhlas\nMeski kamu selalu disakiti','Pergi ke pasar membeli kerupuk\nIbu juga membeli usus\nWajahku mungkin memang buruk\nTetapi hatiku pasti sungguh tulus','Ke apotek beli madu\nEh nemunya malah jamu\nJika kamu sedang rindu\nBawalah aku dalam mimpimu','Jalan jalan di waktu senja\nIndah melihat suasananya\nBiar saja mereka berkata apa saja\nYang penting kita nyaman ngejalaninnya','Pagi-pagi main catur\nKalau kalah ketemu mantanmu\nDoaku sebelum tidur\nSemoga bisa mimpiin kamu','Dagang baju gak laku-laku\nAkhirnya dagang jamu\nMenikahlah hanya denganku\nBiar aku jadi imam hidupmu','Segitiga siku-siku\nSusah banget soalnya hadu\nAlangkah senangnya oh diriku\nJika sudah bertemu dengan jodohku','Orang islam harus sabar\nSupaya hidup selalu berkah\nAku bukan cari pacar\nTapi cari yang mau diajak nikah','Ada artis Ely Sugigi\nSudah bertemu terlalu sering\nCinta itu jangan dibagi-bagi\nSetia itu sangatlah penting','Makan daging banyak tulang\nSungguh enak minum fanta\nSerius dah, cuma kamu doang\nOrang spesial yang aku cinta','Main-main ke dekat Gardu\nDisana ketemu si mbok jamu\nKini aku sangatlah rindu\nLalu kapan kita bertemu?','Lagu Raisa kali kedua\nPengen duet sama lady gaga\nAku dan kamu hidup bersama\nSekarang, esok dan selamanya','Makan sop ada kaldu\nSuka juga gorengan tahu\nSedikit malu kukatakan padamu\nSungguh aku cinta padamu','Hidup penuh lika liku\nBaca buku isi cerita\nSaat aku bertemu kamu\nEh.. aku langsung jatuh cinta','Ibu kasih uang saku\nAyah sedang dendangkan lagu\nTidakkah engkau melihat mataku?\nSeribu cinta sedang menunggu','Sepoy-sepoy rasa angin\nSambil makan di pohon beringin\nKatanya ga suka di bohongin\nTapi kok suka digombalin','Di rumah salsa bertemu rara\nAda juga teman irma\nSungguh bahagia aku rasa\nJika kita selalu bersama','Nasi penyet tempe tahu\nMinumnya es susu\nJanganlah adek jauh dariku\nAku selalu sayang kepadamu','Panas-panas minum es tebu\nEh malah dikasih jamu\nWalaupun kita jarang bertemu\nCintaku hanya untukmu','Pergi bersama dengan ibu\nPergi membeli baju baru\nJika dirimu sayang padaku\nBilang saja i love you','Jalanan lagi lancar\nItu adalah sebuah berkah\nAku bukan nyari pacar\nTapi nyari yang mau diajak nikah','Api kecil dari tungku\nApinya kecil habis kayu\nSudah lama kutunggu-tunggu\nKapan kamu bilang I love you','Waktu daftar hari terakhir\nWaktu terasa banyak terbuang\nKamu nggak perlu khawatir\nCintaku hanya untukmu seorang']
				let pantn = ptn[Math.floor(Math.random() * ptn.length)]
				client.sendMessage(from, pantn, text, {quote: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kata':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				teks = body.slice(6)
	                        const kataa = ['Jangan pernah mencintai seseorang yang belum selesai dengan masa lalunya.','Senyuman mampu memperbaiki sebuah keadaan, walaupun tak bisa merubah kenyataan.','Hanya ada satu hal yang membuat mimpi tak mungkin diraih: perasaan takut gagal.','Bermimpilah dalam hidup, jangan hidup dalam mimpi.','Melakukan apa yang Anda suka adalah kebebasan. Menyukai apa yang Anda lakukan adalah kebahagiaan.','Hidup tanpa kebebasan seperti tubuh tanpa roh.','Keadilan, kebenaran, kebebasan, itulah pangkal dari kebahagiaan.','Lebih baik mati berjuang demi kebebasan daripada menjadi tahanan sehari-hari dalam hidup Anda.','Masa terbaik dalam hidup seseorang adalah masa ia dapat menggunakan kebebasan yang telah direbutnya sendiri.','Bukan karna harta yang berlimpah dan uang yang banyak mampu membuat ku sukacita tetapi dengan kasih sayang dan keutuhan keluarga yang mampu membuat ku bahagia','Cinta bisa membuat waktu terlewati, dan waktu pun bisa membuat cinta terlewati','Kebahagiaan kita tergantung pada diri kita sendiri.','Beri nilai dari usahanya jangan dari hasilnya. Baru kita bisa menilai kehidupan.','Ingin menjadi orang lain adalah pemborosan dari dirimu.','Satu-satunya sumber dari pengetahuan adalah pengalaman.','Arti hidup adalah memberi makna hidup.','Tanpa inspirasi, kita akan binasa.','Cinta sejati bukan berarti tidak terpisahkan. Itu hanya berarti dipisahkan, namun, tidak ada yang berubah.','Waktu yang membuat segalanya menjadi berubah dan berbeda.','Jangan Membandingkan dirimu dengan orang lain. Bandingkan diri kamu dengan pribadi yang kemarin.','Hati yang tegar mampu memaafkan dengan ikhlas.','Cinta yang baik diawali dengan hati yang baik.','Keikhlasan adalah kesabaran sejati.','Apapun yang kamu lakukan, jangan pernah menyerah untuk mendapatkannya.','Jangan pernah berhenti ketika kamu masih belum ingin menyerah.','Bersyukur, bersyukur dan bersyukur karena Bersyukur ialah kebahagiaan sejati.','Ingat, ini hanya hari yang buruk, bukan kehidupan yang buruk.','Berani memulai atau nanti akan menyesal.','Belajar mengikhlaskan dan percaya akan rencana indahNya.','Lakukan sesuatu hari ini yang akan membuat dirimu di masa depan berterima kasih.','Doa adalah kata sayang yang paling sederhana dan tulus.','Jangan ragu untuk memaafkan diri sendiri. Robot saja bisa salah, apalagi manusia.','Bersedekah tidak akan membuat kita miskin.','Bersyukurlah sampai kamu lupa artinya mengeluh.','Teruslah percaya dan bekerja keraslah.','Jadilah pemaaf, yakni memaafkan diri sendiri lalu memberikan pemaafan yang besar pada orang lain.','Hargai, sebelum hilang.','Awal kebahagiaan adalah kenyamanan.','Selalu ada jalan bagi mereka yang mau berusaha.','Ketika aku lelah, hanya doa yang menguatkanku.','Sadar akan kekurangan lebih baik daripada bangga akan kelebihan.','Balas dendam terbaik adalah menjadikan dirimu lebih baik.','Apapun yang kamu lakukan, lakukan dengan sebaik mungkin.','Sesuatu akan sangat berharga, ketika sangat sulit untuk didapatkan.','Doa Ibu adalah kasih sayang terindah.','Kenikmatan sesungguhnya berawal dari kesabaran dan keikhlasan.','Agar masa depanmu lebih baik maka berusahalah mulai dari sekarang.','Lebih baik diam daripada panjang masalahnya.','Pandai-pandai bersyukur agar kita tidak mudah mengeluh.','Kesuksesan tidak menemukan kamu. Kamu harus keluar dan meraihnya.','Diam bukan berarti tak tahu, kadang hanya lelah karena *cukup tahu.*','Berbagi adalah tanda kemuliaan hati.','Segala sesuatu memiliki keindahan, tetapi tidak semua orang bisa melihat.','Hidup tidak memiliki batasan, kecuali yang kamu buat.','Tidak ada kata terlambat untuk menjadi apa Anda yang seharusnya.','Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu.','Cara terbaik untuk memprediksi masa depan adalah dengan menciptakannya.','Percaya dan bertindak seolah-olah tidak mungkin gagal.','Mewujudkan apa yang kita inginkan adalah hadiah terbesar yang kita terima dari lahir','jangan pernah meremehkan diri sendiri. Jika kamu tak bahagia dengan hidupmu, perbaiki apa yg salah, dan teruslah melangkah','Sahabat adalah mereka yang mengerti masa lalumu, percaya pada masa depanmu, dan menerima kamu apa adanya','Sahabat sejati menangis saat kau pergi, sahabat palsu pergi saat kau menangis','Hidup terlalu singkat jika hanya menyesal. Hidup hanya sekali, namun jika digunakan dengan baik, sekali saja cukup!','Di mana Anda berada saat ini tidak menentukan di mana Anda akan berakhir','Begitu sulitnya mencari teman yang tak lupa kita ketika sudah tak lama berjumpa','Lebih baik memiliki 1 sahabat yang mengerti kita dari pada 1000 teman yang mementingkan dirinya sendiri','Kamu takkan bisa mendapatkan yang kamu inginkan jika kamu terlalu sibuk mengeluhkan apa yang telah kamu miliki. Bersyukurlah!','Di balik kekurangan pasti ada kelebihan, meskipun mata tertutup, tapi hati selalu bisa merasakan','Bahwa dalam suatu perjuangan kita harus berjuang terus sampai habis-habisan','Jangan membenci mereka yang mengatakan hal buruk tuk menjatuhkanmu, karena merekalah yang buatmu semakin kuat setiap hari','Orang yang malas telah membuang kesempatan yang diberikan Tuhan, padahal Tuhan tidak pernah menciptakan sesuatu dengan sia-sia','Ketika ragu menghampiri, ikuti kata hati. Beri pertanyaan, temukan sebuah jawaban. Belajarlah tuk mempercayai hati','Berbincang-bincang dengan kawan lama membuatmu menyadari seberapa besar hidupmu telah berubah','Berjalan dengan seorang sahabat dikegelapan,lebih berarti daripada berjalan sendirian ditempat yg terang banyak cahaya','Pada akhirnya kita tau bahwa cinta tidak datang pada 2 orang yang sempurna seperti yang kita harapkan','Bukan seberapa banyak yang kita punya yang memberikan kebahagiaan adalah seberapa besar kita menikmati apa yg kita punya','Orang yang gagah perkasa itu bukan orang yang bertubuh kekar melainkan orang yang mampu mengendalikan emosinya ketika marah','Terkadang, bukan kenangan buruk yang membuatmu bersedih, tapi kenangan indah yang kamu tahu, hal itu tak akan terulang kembali','Kebahagiaanmu tdk ditentukan orang lain, tapi dirimu sendiri. Apa yang kamu lakukan hari ini, tentukan bahagia masa depanmu','Ikhlas menerima kesalahan, dan belajar dari setiap kesalahan, karena itu yg akan menjadikanmu kuat dalam menjalani kehidupan','Sesuatu yang sangat sulit tuk melupakan seseorang yang telah memberimu begitu banyak hal tuk diingat','Perasaan yang paling berbahaya adalah iri, karena iri hati melahirkan kebencian dan kebencian akan membunuhmu perlahan','Yang penting itu bukan apa yang kita ketahui tapi apa yang kita bersedia pelajari','Butuh waktu untuk mendapatkan orang yang tepat','Orang yang telah tiada takkan mungkin kembali, seberapapun kamu mencintainya, kamu harus merelakan nya','Terkadang, bukan kenangan buruk yang membuatmu bersedih, tapi kenangan indah yang kamu tahu, hal itu tak akan terulang kembali','Cinta bisa membuat waktu terlewati, dan waktu pun bisa membuat cinta terlewati','Jika tak cinta, katakan saja. Jangan memberi harapan hampa, karena seseorang akan terluka. Jangan manfaatkan cinta!','Berpikir itu gampang, bertindak itu sulit, dan melaksanakan satu pikiran dalam tindakan adalah hal yang paling sulit di dunia','Jangan selalu katakan *masih ada waktu* atau *nanti saja*. Lakukan segera, gunakan waktumu dengan bijak','Meski bersahabat, kalian tak harus selalu bersama. Miliki waktumu sendiri. Tapi jangan lupakan mereka ketika kalian menemukan cinta','Kebahagiaan belum tentu membuat seseorang bersyukur. Tetapi bersyukurlah yang membuat seseorang meraih kebahagiaan','Hanya karena mereka tak memperlakukanmu seperti yang kamu inginkan, bukan berarti mereka tak mencintaimu setulus hati','Mereka yang membencimu hanya buktikan bahwa hidupmu lebih baik dari mereka. Jangan hiraukan mereka, teruslah melangkah','Risiko terbesar dalam hidup ini adalah tidak mengambil resiko sama sekali','Jadikan cobaan sebuah pelajaran, jangan pernah mengeluh karena kesusahan, di situ kita diajarkan untuk menjadi orang yang sabar','Sahabat adalah dia yang tahu kekuranganmu, tapi menunjukkan kelebihanmu. Dia yang tahu ketakutanmu, tapi menunjukkan keberanianmu','Saat terpisah, imajinasi adalah penghubung antara dua jiwa yang saling mencintai','Dalam cinta, ketika ada yg berbeda, jangan mencari siapa yg salah, karena kamu dan dia adalah tim yang sama dengan tujuan yang sama','Jangan pernah meremehkan diri sendiri. Jika kamu tak bahagia dengan hidupmu, perbaiki apa yg salah, dan teruslah melangkah','Bisa menertawakan diri sendiri akan sama halnya dengan mencintai diri sendiri.','Cantik yang sesungguhnya ialah dimana kamubisa menghargai diri sendiri.','Karena tidak akan ada kata bahagia jika tidak ada kesedihan.','Segala sesuatu yang terjadi membantu Anda tumbuh, meskipun saat ini sulit untuk melihatnya.','Orang hebat tidak dilahirkan begitu saja, mereka tumbuh menjadi hebat.','Jadilah diri sendiri; orang lain sudah diambil.','Hanya karena jalanku berbeda, tidak berarti aku tersesat.','Keberanian adalah mengetahui apa yang tidak perlu ditakuti.','Terkadang kamu menang, terkadang kamu belajar.','Jangan menangis, karena kamu adalah alasan seseorang tersenyum.','Biar bagaimanapun, tidak ada yang akan baik-baik saja tentang sebuah perpisahan.','Tidak ada satu orang pun yang terbiasa dengan kehilangan.','Aku mencintaimu. Biarlah ini urusanku. Bagaimana engkau kepadaku, itu urusanmu.','Tidak akan ada satupun orang yang terbiasa dengan kehilangan.','Asal kamunya tetap ada di bumi. Udah cukup, udah bikin aku senang.','Kalau gak ada kamu, aku suka rindu.','Tolong sampein ke Bunda, Terima kasih udah lahirin orang yang aku cinta.','Memang tidak salah untuk berharap, tapi aku harus tahu kapan berhenti.','Aku rela pensilku patah, asal jangan kamu yang matahin hatiku','Aku rela dibilang bucin, yang penting kamu nggak ngilang','Kamu itu kayak pahlawan ya, hebat meruntuhkan pertahanan hatiku','Kalau pahlawan dikenang, kamu nggak bakalan jadi kenangan','Kalau aku jadi wakil rakyat, pasti aku gagal. Soalnya aku selalu mikirin kamu, bukan rakyat','Aku memang pendiam, diam-diam jatuh cinta sama kamu','Beda operator nggak apa-apa deh, asal nanti nama kamu sama aku di Kartu Keluarga yang sama','Hujan pergi ninggalin pelangi, kamu pergi ninggalin air mataku','Tiap kali kamu senyum, seluruh dunia juga sedang tersenyum','Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya','Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya']
                                let siapaa = kataa[Math.floor(Math.random() * kataa.length)]
	                        client.sendMessage(from, siapaa, text, {quote: mek})
	                        await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'katabijak':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const katas = ['Jangan membandingkan diri Anda dengan siapa pun di dunia ini\nJika Anda melakukannya, Anda menghina diri sendiri.','Apa yang dimulai dengan amarah diakhiri dengan malu.','Waktu yang hilang tidak pernah kembali.','Hati seorang bodoh ada dalam mulutnya tetapi mulut seorang bijak ada dalam hatinya.','Apabila Anda baik terhadap orang lain, maka Anda menjadi yang terbaik bagi diri Anda sendiri.','Orang yang mempunyai kesabaran akan mendapatkan apa yang diinginkannya.','Hidup adalah pemberian, dan hidup memberi kita hak istimewa, kesempatan dan tanggung jawab untuk mengembalikannya dengan menjadi lebih.','Masa lalu Anda tidak sama dengan masa depan Anda.','Jika Anda tidak tahu harus berbuat apa\nMaka lakukanlah apa yang Anda tahu.','Hidup itu seperti mengendarai sepeda.\nUntuk menjaga keseimbangan,\nAnda harus terus bergerak.','Jalan menuju sukses adalah mengambil tindakan yang besar dan pasti.','Terkadang seseorang membayar paling banyak untuk hal-hal yang sia-sia.','Hanya ada satu hal yang membuat mimpi tak mungkin diraih: perasaan takut gagal.','Mimpi adalah jawaban hari ini atas pertanyaan-pertanyaan esok.','Bermimpilah dalam hidup, jangan hidup dalam mimpi.','Pemimpin yang baik harus siap berkorban untuk memperjuangkan kebebasan rakyatnya.','Melakukan apa yang Anda suka adalah kebebasan. Menyukai apa yang Anda lakukan adalah kebahagiaan.','Keadilan, kebenaran, kebebasan, itulah pangkal dari kebahagiaan.','Lebih baik mati berjuang demi kebebasan daripada menjadi tahanan sehari-hari dalam hidup Anda.','Kebahagiaan kita tergantung pada diri kita sendiri.','Beri nilai dari usahanya jangan dari hasilnya. Baru kita bisa menilai kehidupan.','Ingin menjadi orang lain adalah pemborosan dari dirimu.','Satu-satunya sumber dari pengetahuan adalah pengalaman.','Arti hidup adalah memberi makna hidup.','Tanpa inspirasi, kita akan binasa.','Cinta sejati bukan berarti tidak terpisahkan. Itu hanya berarti dipisahkan, namun, tidak ada yang berubah.','Waktu yang membuat segalanya menjadi berubah dan berbeda.','Jangan Membandingkan dirimu dengan orang lain. Bandingkan diri kamu dengan pribadi yang kemarin.','Hati yang tegar mampu memaafkan dengan ikhlas.','Cinta yang baik diawali dengan hati yang baik.','Keikhlasan adalah kesabaran sejati.','Apapun yang kamu lakukan, jangan pernah menyerah untuk mendapatkannya.','Jangan pernah berhenti ketika kamu masih belum ingin menyerah.','Bersyukur, bersyukur dan bersyukur karena Bersyukur ialah kebahagiaan sejati.','Ingat, ini hanya hari yang buruk, bukan kehidupan yang buruk.','Berani memulai atau nanti akan menyesal.','Belajar mengikhlaskan dan percaya akan rencana indahNya.','Lakukan sesuatu hari ini yang akan membuat dirimu di masa depan berterima kasih.','Doa adalah kata sayang yang paling sederhana dan tulus.','Jangan ragu untuk memaafkan diri sendiri. Robot saja bisa salah, apalagi manusia.','Bersedekah tidak akan membuat kita miskin.','Bersyukurlah sampai kamu lupa artinya mengeluh.','Teruslah percaya dan bekerja keraslah.','Jadilah pemaaf, yakni memaafkan diri sendiri lalu memberikan pemaafan yang besar pada orang lain.','Hargai, sebelum hilang.','Awal kebahagiaan adalah kenyamanan.','Selalu ada jalan bagi mereka yang mau berusaha.','Ketika aku lelah, hanya doa yang menguatkanku.','Sadar akan kekurangan lebih baik daripada bangga akan kelebihan.','Balas dendam terbaik adalah menjadikan dirimu lebih baik.','Apapun yang kamu lakukan, lakukan dengan sebaik mungkin.','Sesuatu akan sangat berharga, ketika sangat sulit untuk didapatkan.','Doa Ibu adalah kasih sayang terindah.','Kenikmatan sesungguhnya berawal dari kesabaran dan keikhlasan.','Agar masa depanmu lebih baik maka berusahalah mulai dari sekarang.','Lebih baik diam daripada panjang masalahnya.','Pandai-pandai bersyukur agar kita tidak mudah mengeluh.','Kesuksesan tidak menemukan kamu. Kamu harus keluar dan meraihnya.','Diam bukan berarti tak tahu, kadang hanya lelah karena *cukup tahu.*','Berbagi adalah tanda kemuliaan hati.','Segala sesuatu memiliki keindahan, tetapi tidak semua orang bisa melihat.','Hidup tidak memiliki batasan, kecuali yang kamu buat.','Tidak ada kata terlambat untuk menjadi apa Anda yang seharusnya.','Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu.','Cara terbaik untuk memprediksi masa depan adalah dengan menciptakannya.','Percaya dan bertindak seolah-olah tidak mungkin gagal.','Mewujudkan apa yang kita inginkan adalah hadiah terbesar yang kita terima dari lahir','jangan pernah meremehkan diri sendiri. Jika kamu tak bahagia dengan hidupmu, perbaiki apa yg salah, dan teruslah melangkah','Sahabat adalah mereka yang mengerti masa lalumu, percaya pada masa depanmu, dan menerima kamu apa adanya','Sahabat sejati menangis saat kau pergi, sahabat palsu pergi saat kau menangis','Hidup terlalu singkat jika hanya menyesal. Hidup hanya sekali, namun jika digunakan dengan baik, sekali saja cukup!','Di mana Anda berada saat ini tidak menentukan di mana Anda akan berakhir','Begitu sulitnya mencari teman yang tak lupa kita ketika sudah tak lama berjumpa','Lebih baik memiliki 1 sahabat yang mengerti kita dari pada 1000 teman yang mementingkan dirinya sendiri','Kamu takkan bisa mendapatkan yang kamu inginkan jika kamu terlalu sibuk mengeluhkan apa yang telah kamu miliki. Bersyukurlah!','Di balik kekurangan pasti ada kelebihan, meskipun mata tertutup, tapi hati selalu bisa merasakan','Bahwa dalam suatu perjuangan kita harus berjuang terus sampai habis-habisan','Jangan membenci mereka yang mengatakan hal buruk tuk menjatuhkanmu, karena merekalah yang buatmu semakin kuat setiap hari','Orang yang malas telah membuang kesempatan yang diberikan Tuhan, padahal Tuhan tidak pernah menciptakan sesuatu dengan sia-sia','Ketika ragu menghampiri, ikuti kata hati. Beri pertanyaan, temukan sebuah jawaban. Belajarlah tuk mempercayai hati','Berbincang-bincang dengan kawan lama membuatmu menyadari seberapa besar hidupmu telah berubah','Berjalan dengan seorang sahabat dikegelapan,lebih berarti daripada berjalan sendirian ditempat yg terang banyak cahaya','Pada akhirnya kita tau bahwa cinta tidak datang pada 2 orang yang sempurna seperti yang kita harapkan','Bukan seberapa banyak yang kita punya yang memberikan kebahagiaan adalah seberapa besar kita menikmati apa yg kita punya','Orang yang gagah perkasa itu bukan orang yang bertubuh kekar melainkan orang yang mampu mengendalikan emosinya ketika marah','Terkadang, bukan kenangan buruk yang membuatmu bersedih, tapi kenangan indah yang kamu tahu, hal itu tak akan terulang kembali','Kebahagiaanmu tdk ditentukan orang lain, tapi dirimu sendiri. Apa yang kamu lakukan hari ini, tentukan bahagia masa depanmu','Ikhlas menerima kesalahan, dan belajar dari setiap kesalahan, karena itu yg akan menjadikanmu kuat dalam menjalani kehidupan','Sesuatu yang sangat sulit tuk melupakan seseorang yang telah memberimu begitu banyak hal tuk diingat','Perasaan yang paling berbahaya adalah iri, karena iri hati melahirkan kebencian dan kebencian akan membunuhmu perlahan','Yang penting itu bukan apa yang kita ketahui tapi apa yang kita bersedia pelajari','Butuh waktu untuk mendapatkan orang yang tepat','Orang yang telah tiada takkan mungkin kembali, seberapapun kamu mencintainya, kamu harus merelakan nya','Terkadang, bukan kenangan buruk yang membuatmu bersedih, tapi kenangan indah yang kamu tahu, hal itu tak akan terulang kembali','Cinta bisa membuat waktu terlewati, dan waktu pun bisa membuat cinta terlewati','Jika tak cinta, katakan saja. Jangan memberi harapan hampa, karena seseorang akan terluka. Jangan manfaatkan cinta!','Berpikir itu gampang, bertindak itu sulit, dan melaksanakan satu pikiran dalam tindakan adalah hal yang paling sulit di dunia','Jangan selalu katakan *masih ada waktu* atau *nanti saja*. Lakukan segera, gunakan waktumu dengan bijak','Meski bersahabat, kalian tak harus selalu bersama. Miliki waktumu sendiri. Tapi jangan lupakan mereka ketika kalian menemukan cinta','Kebahagiaan belum tentu membuat seseorang bersyukur. Tetapi bersyukurlah yang membuat seseorang meraih kebahagiaan','Hanya karena mereka tak memperlakukanmu seperti yang kamu inginkan, bukan berarti mereka tak mencintaimu setulus hati','Mereka yang membencimu hanya buktikan bahwa hidupmu lebih baik dari mereka. Jangan hiraukan mereka, teruslah melangkah','Risiko terbesar dalam hidup ini adalah tidak mengambil resiko sama sekali','Jadikan cobaan sebuah pelajaran, jangan pernah mengeluh karena kesusahan, di situ kita diajarkan untuk menjadi orang yang sabar','Sahabat adalah dia yang tahu kekuranganmu, tapi menunjukkan kelebihanmu. Dia yang tahu ketakutanmu, tapi menunjukkan keberanianmu','Saat terpisah, imajinasi adalah penghubung antara dua jiwa yang saling mencintai','Dalam cinta, ketika ada yg berbeda, jangan mencari siapa yg salah, karena kamu dan dia adalah tim yang sama dengan tujuan yang sama','Jangan pernah meremehkan diri sendiri. Jika kamu tak bahagia dengan hidupmu, perbaiki apa yg salah, dan teruslah melangkah']
				let bijak = katas[Math.floor(Math.random() * katas.length)]
				client.sendMessage(from, bijak, text, {quote: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'katacinta':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
	                        const katacintaaa = ['Aku rela dibilang bucin, yang penting kamu nggak ngilang.','Dimana ada cinta, disitu ada kehidupan. Dimana ada kebencian disitu ada kerusakan. Namun kebencian terkadang bagian dari kasih sayang yang mendalam','Seorang teman tidak dapat disebut sebagai teman, sehingga ia menjaga temannya dalam tiga hal : dalam musibahnya, ketidakhadirannya, dan kematiannya','Orang yang tidak menguasai matanya, maka hatinya tak berharga','Bahagia itu sederhana; mensyukuri, mencintai dan menjaga apa yg kita miliki','Di sakiti oleh pasangan sekali saja kadang kita langsung sedih, tapi taukah anda berapa banyak kita melukai perasaan Ibu?','Jangan bandingkan orang yg mencintaimu dengan masa lalumu. Hargai dia yg kini berusaha membuatmu bahagia!','Kadang kamu harus dengarkan kata hati. Jangan tanyakan siapa yang kamu cintai, tapi tanyakan siapa yang buatmu bahagia','Sederhana dalam mencintai, ikhlas menerima kekurangan, dan setia dalam menjalin hubungan.','Orang yang suka berkata jujur mendapatkan tiga hal : Cinta, Kepercayaan, dan Rasa Hormat','Bahagia adalah ketika kamu memiliki orang yang peduli, mencintai, dan mengerti dirimu lebih dari kamu mengerti diri sendiri.','Cinta tak kan menuntut kesempurnaan. Cinta kan menerima, memahami, rela berkorban. Karena seharusnya cinta membuatmu bahagia, bukan tersiksa.','Berhenti menyesali cinta yg telah pergi. Jika dia memang sejatimu, tak peduli betapa sulitnya, dia pasti menemukan jalannya kembali.','Tak perlu marah & benci pada mereka yg membencimu tanpa sebab, lihatlah Tuhan yg senantiasa menyayangimu tanpa syarat.','Bila Anda ingin bahagia, buatlah tujuan yang bisa mengendalikan pikiran, melepaskan tenaga, serta mengilhami harapan Anda,','Jangan buang waktumu hanya untuk menunggu sesuatu yang tidak pasti. Hidup ini butuh kepastian, bukan hanya angan pun harapan.','Senjata yang paling ampuh dimuka bumi ini adalah jiwa seorang yang sedang dirundung asmara','Sabar itu ada dua, yaitu sabar terhadap sesuatu yang kita benci, dan sabar terhadap apa yang kita sukai','Jika Tuhan senantiasa memberikan cinta kepada hambaNya, maka kenapa kita tidak bersegera untuk memantaskan diri?','Mencintai seseorang akan memberikan kita kekuatan, dan dicintai seseorang akan memberikan kita keberanian yang besar','Cinta mampu membangun jembatan yang menghubungkan dua jiwa insan yang berbeda.','Cinta itu terlalu suci untuk dinodai,\nterlalu tinggi untuk dikhianati,\nterlalu indah untuk dikotori.\nKarena ia adalah anugerah yang harus dijaga kesuciannya,\nDiagungkan ketinggiannya, dan dikagumi keindahannya.','Hal yang paling menyakitkan adalah kehilangan jati dirimu saat engkau terlalu mencintai seseorang.\nSerta lupa bahwa sebenarnya engkau juga spesial','Asmara bukan hanya sekedar saling memandang satu sama lain. Tapi juga sama sama melihat ke satu arah yang sama.','Cinta itu seperti angin. Kau tak dapat melihatnya, tapi kau dapat merasakannya.','Karena hati tidak perlu memilih, ia selalu tahu kemana harus berlabuh,','Aku mencintaimu. Itu sebabnya aku takkan pernah selesai mendoakan keselamatanmu.','Aku tidak terlalu peduli pada uang. Uang tidak dapat kupakai untuk membeli cinta','Kau tak bisa mengukur cinta seperti mengukur panjang jalan atau tinggi gedung.','Cinta sekejap mata, terkenang sepanjang masa.','Cinta tidak terlihat dengan mata, tetapi dengan hati.']
	                        let cintass = katacintaaa[Math.floor(Math.random() * katacintaaa.length)]
	                        client.sendMessage(from, cintass, text, {quote: mek})
	                        await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'tahugasih':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
	                        const tgsh = ['Tahukah Anda bahwa subjek buku cetak pertama di Inggris adalah tentang caturches','Tahukah Anda bahwa mineral paling lembut yang diketahui adalah bedak','Tahukah Anda bahwa setiap domain .com 3 karakter yang mungkin telah terdaftar','Tahukah Anda 1 inci persegi kulit manusia mengandung 625 kelenjar keringat','Tahukah Anda bahwa kopi mewakili 75% dari semua kafein yang dikonsumsi di AS','Tahukah Anda bahwa yo-yo pada awalnya digunakan sebagai senjata untuk berburu di Filipina','Tahukah Anda bahwa sel darah merah diproduksi di sumsum tulang','Tahukah Anda penerbangan pesawat pantai ke pantai AS pertama terjadi pada tahun 1911 dan memakan waktu 49 hari','Tahukah Anda bahwa rata-rata orang mengonsumsi lebih dari satu ton makanan dan minuman setiap tahun','Tahukah Anda bahwa hidrogen adalah unsur paling melimpah di Alam Semesta (75%)','Tahukah Anda 14 Maret adalah selamatkan hari laba-laba','Tahukah Anda bahwa atychiphobia adalah ketakutan akan kegagalan?','Tahukah Anda lebih dari 500 meteorit menghantam Bumi setiap tahun','Tahukah Anda bahwa patung mulut Liberty memiliki lebar 3 kaki','Tahukah Anda bahwa gajah dapat berlari hingga 40kmh (25mph)','Tahukah Anda bahwa rata-rata orang tertidur dalam 7 menit','Tahukah Anda bahwa setiap manusia ada 200 juta serangga','Tahukah Anda arachibutyrophobia adalah ketakutan selai kacang yang menempel di langit-langit mulut Anda','Tahukah Anda bahwa brontologi adalah studi tentang guntur','Tahukah Anda melophobia adalah ketakutan akan musik','Tahukah Anda 1 inci persegi kulit manusia mengandung 625 kelenjar keringat','Tahukah Anda ratu rayap bisa hidup hingga 50 tahun','Tahukah Anda ketika hidrogen terbakar di udara, air terbentuk','Tahukah Anda kosakata rata-rata orang adalah antara 5.000 hingga 6.000 kata','Tahukah Anda subjek buku cetak pertama di Inggris adalah tentang catur','Tahukah Anda mamalia tertinggi adalah jerapah','Tahukah Anda bahwa Bill Gates mulai memprogram komputer pada usia 13 tahun','Tahukah Anda kata karate berarti tangan kosong','Tahukah Anda sepak bola adalah olahraga yang paling banyak diikuti','Tahukah Anda ombrophobia adalah ketakutan akan hujan','Tahukah Anda bahwa mobil yang melaju dengan kecepatan 80kph (50mph) menggunakan setengah bahan bakarnya untuk mengatasi hambatan angin','Tahukah Anda bahwa blueberry mengandung antioksidan yang sangat tinggi','Tahukah Anda seekor unta bisa menutup lubang hidungnya saat berada di gurun pasir','Tahukah Anda seekor kanguru yang baru lahir berukuran sekitar 1 inci','Tahukah Anda 45% orang Amerika tidak tahu bahwa matahari adalah bintang','Tahukah Anda bahwa pohon Oak tidak menghasilkan biji pohon Oak sampai berumur 50 tahun','Tahukah Anda telinga gajah digunakan untuk mengatur suhu tubuh','Tahukah Anda ada lebih dari 10 juta batu bata di Empire State Building','Tahukah Anda, pembuat permainan papan Monopoli mencetak uang Monopoli senilai lebih dari 50 miliar dolar setiap tahun','Tahukah Anda bahwa rata-rata orang kehilangan 0,7 kg (1,5 pon) kulit setiap tahun','Tahukah Anda bahwa rata-rata orang tertawa 10 kali sehari','Tahukah Anda bahwa ular kobra liar dapat hidup hingga 20 tahun','Tahukah Anda bahwa hanya ada 4 kata dalam bahasa Inggris yang diakhiri dengan dous (yaitu: hazardous, menghebohkan, luar biasa dan luar biasa)','Tahukah Anda bahwa wine dijual dalam botol berwarna karena bisa basi jika terkena cahaya','Tahukah Anda 40% komuter Amsterdam bekerja dengan sepeda','Tahukah Anda untuk memecahkan cambuk, ujungnya harus bergerak lebih cepat daripada kecepatan suara','Tahukah Anda bahwa dinosaurus hidup di Bumi selama lebih dari 165 juta tahun sebelum mereka punah','Tahukah Anda lebih dari 1.000.000 Bumi bisa muat di dalam Matahari','Tahukah Anda bahwa manusia adalah satu-satunya primata yang tidak memiliki pigmen di telapak tangan','Tahukah Anda hujan mengandung vitamin B12','Tahukah Anda butuh waktu 5 tahun bagi tiram untuk menghasilkan mutiara berukuran sedang','Tahukah Anda barang yang paling sering dilupakan wisatawan adalah sikat gigi mereka','Tahukah Anda ada lebih dari 40.000 urat otot di belalai gajah','Tahukah Anda nyamuk tidak menyukai serai wangi karena dapat mengiritasi kaki mereka','Tahukah Anda kebanyakan laba-laba memiliki darah transparan','Tahukah Anda bahwa ada cukup bensin dalam satu tangki penuh Jumbo Jet untuk mengemudikan mobil rata-rata 4 kali di seluruh dunia','Tahukah anda butuh waktu 1 minggu untuk membuat jelly bean','Tahukah kamu rusa tidak suka jerami','Tahukah Anda sikat gigi pertama kali ditemukan pada tahun 1498','Tahukah Anda 80% dari semua orang yang tersambar petir adalah laki-laki','Tahukah Anda rata-rata orang Amerika makan 263 telur setahun','Tahukah Anda bahwa jalan beraspal pertama di dunia dibangun di Roma pada tahun 170 SM.','Tahukah Anda bahwa dendrofobia adalah ketakutan pada pohon','Tahukah Anda seekor kucing memiliki 32 otot di setiap telinganya','Tahukah Anda hanya nyamuk betina yang menggigit','Tahukah Anda bahwa Peru memiliki lebih banyak piramida daripada Mesir','Tahukah Anda mulut Anda menghasilkan 1 liter air liur sehari']
                                let tahuca = tgsh[Math.floor(Math.random() * tgsh.length)]
	                        client.sendMessage(from, tahuca, text, {quote: mek})
	                        await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break/*
			case 'dadu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                        const daduz = ['https://i.ibb.co/tXLFRv1/dadu1.png','https://i.ibb.co/Ypyz0nV/dadu2.png','https://i.ibb.co/YkDT5GZ/dadu3.png','https://i.ibb.co/SX7Vh7m/dadu4.png','https://i.ibb.co/0nPSYQQ/dadu5.png','https://i.ibb.co/gtsFMVK/dadu6.png']
				let ainedadu = daduz[Math.floor(Math.random() * daduz.length)]
				client.sendMessage(from, ainedadu, image, {quote: mek})
				await limitAdd(sender)
			break*/
                    case 'suit':
                    if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu Gunting\nAine Kertas\nKamu Menang 😔",
					    "Kamu Gunting\nAine Batu\nKamu Kalah 🙂",
					    "Kamu Gunting\nAine Gunting\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu Kertas\nAine Batu\nKamu Menang 😔",
					    "Kamu Kertas\nAine Gunting\nKamu Kalah 🙂",
					    "Kamu Kertas\nAine Kertas\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu Batu\nAine Gunting\nKamu Menang 😔",
					    "Kamu Batu\nAine Kertas\nKamu Kalah 🙂",
					    "Kamu Batu\nAine Batu\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					if (isOwner | isAdmin | isPremium) {
				const suitxppremium = Math.ceil(Math.random() * 1000000)
				addLevelingXp(sender, suitxppremium)
				   await reply(`Selamat ${pushname} kamu mendapatkan ${suitxppremium}Xp Hasil dari permainan suit :)`)
                 		} else {
					const suitxp = Math.ceil(Math.random() * 100000)
				    addLevelingXp(sender, suitxp)
				    await reply(`Selamat ${pushname} kamu mendapatkan ${suitxp}Xp Hasil dari permainan suit :)`)
					} 
					}
           break
				//mhazria 
			case 'resepmasakan':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				buffer = await getBuffer(anu.thumb_item)
				hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break 
			case 'ssweb':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Urlnya mana kak')
				teks = body.slice(7)
				reply(ind.wait())
				buffer = await getBuffer(`https://bx-hunter.herokuapp.com/api/ssweb?url=${teks}&apikey=Ikyy69`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'map':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
				buffer = await getBuffer(anu.gambar)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kbbi':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Apa yang mau dicari kak?')
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'artinama':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Apa yang mau dicari um?')
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
				reply('Menurut nama:\n\n'+anu.result)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kodepos':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				tuull = body.slice(9)
				data = await fetchJson(`https://zahirr-web.herokuapp.com/api/kodepos?kota=${tuull}&apikey=zahirgans`)
				copss = `Province : ${data.result.data.province}\nKota : ${data.result.data.city}\nKelurahan : ${data.result.data.urban}\nKecamatan : ${data.result.data.subdistrict} \nKodepos : ${data.result.data.postalcode}`
				reply(copss)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'faktaunik':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://pencarikode.xyz/api/faktaunik?apikey=pais`, {method: 'get'})
				reply(anu.message)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'pesankosong': 
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.sendMessage(from, ' ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏', MessageType.text, { quoted: mek})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'ccgenerator':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
				qisur = `KARTU : ${data.result.card.network}\nNOMOR : ${data.result.card.number}\nCVV : ${data.result.card.cvv}\nPIN : ${data.result.card.pin}\nSALDO : ${data.result.card.balance}\nTAHUN KADALUARSA : ${data.result.card.expiration_year}\nNAMA : ${data.result.customer.name}\nALAMAT : ${data.result.customer.address}\nNEGARA : ${data.result.customer.country}`
				reply(qisur)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'namaninja':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('kasih teks lah^_^!!!')
				data = await fetchJson(`https://api.terhambar.com/ninja?nama=${body.slice(11)}`)
				reply(data.result.ninja)
			        await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			//auto respond prefix
			case 'ping':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.sendMessage(from, `${process.uptime()} _Second_`, MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'help': 
			case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				const uangku = checkATMuser(sender)
				const pepolu = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))[0].totalcmd
				await costum(ind.menu(pushname, prefix, time, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, ucapanWaktu, hit_today, baterai, client, os, process, pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord, isfilter), text, tescuk, cr)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'info':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.sendMessage(from, `Mau cari info apa kak?\nInfo:\n${prefix}infobot\n${prefix}infodev\n${prefix}infoadmin\n${prefix}infogempa\n${prefix}infocuaca\n${prefix}infonomor`,MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'infobot':
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				me = client.user
				uptime = process.uptime()
				teks = `*INFO BOT*\n\n⍟ ────────────────── ⍟\n❏ *Prefix :* ${prefix}\n❏ *Nama bot :* ${me.name}\n❏ *Nomor bot :* @${me.jid.split('@')[0]}\n❏ *Run :* Termux\n❏ *Total block :* ${blocked.length}\n❏ *Server :* ${client.browserDescription[0]}\n❏ *Browser :* ${client.browserDescription[1]}\n❏ *Version :* ${client.browserDescription[2]}\n❏ *Os Version :* ${client.user.phone.os_version}\n❏ *Penggunaan Ram :* ${ram2}\n❏ *MNC :* ${client.user.phone.mnc}\n❏ *MCC :* ${client.user.phone.mcc}\n❏ *Hostname :* ${os.hostname()}\n❏ *Platform :* ${os.platform()}\n❏ *Baterai* : ${baterai.baterai}% 🔋\n❏ *Status Charge :* ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}\n❏ *Handphone* : ${client.user.phone.device_manufacturer}\n❏ *Device Model* : ${client.user.phone.device_model}\n❏ *Versi wa* : ${client.user.phone.wa_version}\n❏ *Speed* : ${process.uptime()}\n❏ *Waktu proses* : ${kyun(uptime)}\n⍟ ────────────────── ⍟\n━━━━━━━━━━━━━━━━━━━━\n⍟ ────────────────── ⍟\n*Fans page FB* : https://www.facebook.com/ainneboot\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.\n⍟ ────────────────── ⍟`
				buffer = await getBuffer(`https://i.ibb.co/4jknX6w/pp.jpg`)
				client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'infodev':
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				me = client.user
				uptime = process.uptime()
				teks = `*INFO DEVELOPER*\n*Owner bot* : Muhammad Ridwan Reynaldy\n*No Owner* : wa.me/62895330379186\n*Ig owner* : www.instagram.com/anemio999\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Fans page FB* : https://www.facebook.com/ainneboot\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
				buffer = await getBuffer(`https://i.ibb.co/4jknX6w/pp.jpg`)
				client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'infoadmin':
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				me = client.user
				uptime = process.uptime()
				teks = `*INFO ADMIN*\n*Admin bot* : Brema\n*Admin bot* : Thamrin\n*Admin bot* : Kozet\n*Admin bot* : Dandy\n*Admin bot* : Rahmad\n*Admin bot* : Muh Alwi\n*Admin bot* : Darma\n━━━━━━━━━━━━━━━━━━━━\n*No Brema* : wa.me/6282237617224\n*No Thamrin* : wa.me/6281394344776\n*No Kozet* : wa.me/628994622890\n*No Dandy* : wa.me/6285878523158\n*No Rahmad* : wa.me/6283108164709\n*No Muh Alwi* : wa.me/6287762758045\n*No Darma* : wa.me/6283106733687\n━━━━━━━━━━━━━━━━━━━━\n*Ig Brema* : www.instagram.com/bremab.bangun\n*Ig Thamrin* : www.instagram.com/thamrin_fariz\n*Ig Kozet* : www.instagram.com/Official_kozet\n*Ig Dandy* : www.instagram.com/px.dandy.w.syahputra\n*Ig Rahmad* : www.instagram.com/kangmas201\n*Ig Muh Alwi* : www.instagram.com/Alwi_Alfiza\n*Ig Darma* : www.instagram.com/darma_syamsi/\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Fans page FB* : https://www.facebook.com/ainneboot\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
				buffer = await getBuffer(`https://i.ibb.co/4jknX6w/pp.jpg`)
				client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'infogempa':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply( 'Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://pencarikode.xyz/api/gempa?apikey=pais`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				hasil = `*Bujur*\n${anu.result.Bujur}\n*Lokasi*\n${anu.result.Wilayah}\n*Magnitude*\n${anu.result.Magnitudo}\n*Lintang*\n${anu.result.Lintang}\n*Kedalaman*\n${anu.result.Kedalaman}\n*Waktu*\n${anu.result.Waktu}`
				client.sendMessage(from, hasil, text, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'infocuaca':
				tels = body.slice(11)
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply( 'Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://rest.farzain.com/api/cuaca.php?id=${tels}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				hasil = `*Tempat* : ${anu.respon.tempat}\n*Cuaca* : ${anu.respon.cuaca}\n*Angin* : ${anu.respon.angin}\n*Suhu* : ${anu.respon.suhu}\n*Kelembapan* : ${anu.respon.kelembapan}`
				client.sendMessage(from, hasil, text, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'covid':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply( 'Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`)
				hasil = `Positif : ${data.positif}\nSembuh : ${data.sembuh}\nMeninggal : ${data.meninggal}\nDirawat : ${data.dirawat}\nLast Update : ${data.lastUpdate}`
				reply(hasil)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'snk':
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				me = client.user
				uptime = process.uptime()
				teks = `*Syarat & Ketentuan Ainebot*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Jika anda spam, Kami akan membenned anda\n8. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n9. Apapun yang anda perintah pada bot ini,\n*KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
				buffer = await getBuffer(`https://i.ibb.co/4jknX6w/pp.jpg`)
				client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'lpr':
				const bug = body.slice(5)
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (bug.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
				var nomor = mek.participant
				const teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
				var options = {
				text: teks1,
				contextInfo: {mentionedJid: [nomor]},
				}
				client.sendMessage('62895330379186@s.whatsapp.net', options, text, {quoted: mek})
				reply('Pesan telah di kirim ke owner aine\nPesan palsu atau main² tidak akan ditanggapi.')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'getspremium':
				const gtprem = body.slice(13)
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isGroup) return reply('Maaf konfirmasi premium free hanya bisa di group!')
				if (gtprem.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
				var getssprem = mek.participant
				const teksi1 = `*[GETPREMIUM]*\nNomor : @${getssprem.split("@s.whatsapp.net")[0]}\nPesan : ${gtprem}`
				var options = {
				text: teksi1,
				contextInfo: {mentionedJid: [getssprem]},
				}
				client.sendMessage('62895330379186@s.whatsapp.net', options, text, {quoted: mek})
				reply('*[WAIT]*\nSedang diproses oleh owner kami..\n\nNote :\nIni adalah konfirmasi preium free, Jika owner kami memberikan event premium free')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			/*case 'konfirmasi':
				const kfrms = body.slice(12)
				if (!isGroup) return reply('Maaf konfirmasi hanya bisa di group!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (kfrms.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
				var kfrmsnomor = mek.participant
				const teksh1 = `*[LAPORAN]*\nNomor : @${kfrmsnomor.split("@s.whatsapp.net")[0]}\nPesan : ${kfrms}`
				var options = {
				text: teksh1,
				contextInfo: {mentionedJid: [kfrmsnomor]},
				}
				client.sendMessage('62895330379186@s.whatsapp.net', options, text, {quoted: mek})
				reply(`[WAIT] Sedang mengirim code konfirmasi melalui SMS...\n\nNote:\n• Harap Gunakan nomor kamu\ncontoh: ${prefix}konfirmasi 089654360447\n• Aine akan mengirimkan code konfirmasi untuk bisa mengakses.\n• Code konfirmasi hanya bisa di gunakan dipribadi!\n• Nomor yang tidak bisa di SMS maka tidak akan bisa menggunakan aine!`)
			break*/
			case 'calladmin':
			case 'callowner':
					if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					const callmin = body.slice(11)
					if (callmin.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomorhh = mek.participant
					const teksq1 = `*[Memanggil admin]*\nNomor : @${nomorhh.split("@s.whatsapp.net")[0]}\nPesan : ${callmin}`
					var options = {
					text: teksq1,
					contextInfo: {mentionedJid: [nomorhh]},
					}
					client.sendMessage('62895330379186@s.whatsapp.net', options, text, {quoted: mek})
					reply('[WAIT] Sedang menghubungi admin kami, Mungkin ini membutuhkan waktu lama..')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'calldeveloper':
					if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					const calldev = body.slice(11)
					if (calldev.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomorhhjj = mek.participant
					const teksd1 = `*[Memanggil developer]*\nNomor : @${nomorhh.split("@s.whatsapp.net")[0]}\nPesan : ${calldev}`
					var options = {
					text: teksd1,
					contextInfo: {mentionedJid: [nomorhhjj]},
					}
					client.sendMessage('62895330379186@s.whatsapp.net', options, text, {quoted: mek})
					reply('[WAIT] Sedang menghubungi developer kami, Mungkin ini membutuhkan waktu lama..')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'request':
					if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					client.sendMessage('62895330379186@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER DAN ADMIN AINEBOT\nRequests palsu atau main² tidak akan ditanggapi.')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'requestlimit':
					if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					const cfrrs = body.slice(13)
					if (cfrrs.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomores = mek.participant
					const ressso = `*[REQUEST VITUR]*\nNomor : @${nomores.split("@s.whatsapp.net")[0]}\nPesan : ${cfrrs}`
							var options = {
							text: ressso,
                         				contextInfo: {mentionedJid: [nomores]},
                     			}
					client.sendMessage('62895330379186@s.whatsapp.net', options, text, {quoted: mek})
					reply('Request limit akan di ')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'smsfree':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					const sms = body.slice(8)
					if (sms.length > 300) return client.sendMessage(from, 'Nomor telpon targetnya mana kak?', msgType.text, {quoted: mek})
					var nomorrs = mek.participant
					const resse = `*[REQUEST VITUR]*\nNomor : @${nomorrs.split("@s.whatsapp.net")[0]}\nPesan : ${sms}`
							var options = {
							text: resse,
                         				contextInfo: {mentionedJid: [nomorrs]},
                     			}
					client.sendMessage('62895330379186@s.whatsapp.net', options, text, {quoted: mek})
					reply('SMS Anda akan terikirim, Mohon sabar kami proses..\nJika tidak terkirim maka kuota sms kami telah habis!!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'sms':
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.sendMessage(from, 'Nomor targetnya mana kak',MessageType.text, { quoted: mek} )
				client.sendMessage(from, 'Pesannya pengiriman apa kak?',MessageType.text, { quoted: mek} )
				client.sendMessage(from, 'Contohnya #smsfree nomor|pesan',MessageType.text, { quoted: mek} )
				client.sendMessage(from, 'Maximal 30 text',MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'blocklist': 
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				teks = '*This is list of blocked number* :\n'
				for (let block of blocked) {
					teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break 
			case 'donasi':
			case 'donate':
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, donasi(), text)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'menufun':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				buffer = await getBuffer(`https://i.ibb.co/FD4RSBH/ppmenu.jpg`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: menufun(prefix)})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'menumaker':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				buffer = await getBuffer(`https://i.ibb.co/FD4RSBH/ppmenu.jpg`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: menumaker(prefix)})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'menustorage':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				buffer = await getBuffer(`https://i.ibb.co/FD4RSBH/ppmenu.jpg`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: menustorage(prefix)})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'menupicture':
			case 'menupict':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				buffer = await getBuffer(`https://i.ibb.co/tqf0P7q/Whats-App-Image-2021-02-22-at-01-46-22.png`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: randompict(prefix)})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'menuowner':
				if (!isRegistered) return reply(ind.noregis())
				if (!isAdmin) return reply('Maaf menu ini untuk owner dan admin kami..')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				buffer = await getBuffer(`https://i.ibb.co/5nBhggv/2b84cc9cb84d76bc5c2b27e81d6aecfd.png`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: developer(prefix)})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'menugrup':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				buffer = await getBuffer(`https://i.ibb.co/FD4RSBH/ppmenu.jpg`)
				client.sendMessage(from, buffer, image, { quoted: mek, caption: menugrup(prefix)})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'bahasa':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.sendMessage(from, bahasa(), text)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kodenegara':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				client.sendMessage(from, negara(), text)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kontak':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				pe = args.join(' ') 
				entah = pe.split('|')[0]
				nah = pe.split('|')[1]
				if (isNaN(entah)) return reply('Invalid phone number');
				vcard1 = 'BEGIN:VCARD\n'
				+ 'VERSION:3.0\n'
				+ `FN:${nah}\n`
				+ `TEL;type=CELL;type=VOICE;waid=${entah}:${PhoneNumber('+' + entah).getNumber('internasional')}\n`
				+ 'END:VCARD'.trim()
				client.sendMessage(from, {displayName: `${nah}`, vcard: vcard1}, contact)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break 
			case 'owner':
				client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
				client.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'author':
				client.sendMessage(from, {displayname: "Jeff", vcard: vcard3}, MessageType.contact, { quoted: mek})
				client.sendMessage(from, 'Tuh developper kami 😅',MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'buypremium':
					client.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/62895330379186',MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'hargaprem':
			case 'hargapremium':
					client.sendMessage(from, 'Quiz owner = random (premium)\nLevel 100 = Free 3 day (premium)\n10k = perbulan (premium)\n25k = 6 bulan (premium)\n50k = 1 tahun (premium)\nMembuka fitur 18+, SPAM, dan storage bot\n\n*Sewa group :*\n1 bulan : Rp. 15.000,-\n2 bulan : Rp. 20.000,-\n4 bulan : Rp. 25.000,-\n8 bulan : Rp. 30.000,-\n10 bulan : Rp. 35.000,-\nSetahun : Rp. 40.000,-\nHanya membuka fitur download music untuk semua member',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Harap hubungi kami :\nwa.me/62895330379186',MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'gcainebot':
					client.sendMessage(from, 'https://chat.whatsapp.com/HlIbSDEOseg9iUBvEBrtq0',MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'anonchat':
					client.sendMessage(from, 'wa.me/62896543604477\nAnonymous Chat WhatsApp Bot\nUntuk memulai ketik #menu',MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'listchat':
					client.sendMessage(from, '• P\n• Bot\n• Hai\n• Iya\n• Mau\n• Jam\n• Test\n• Aine\n• Gelay\n• Kawai\n• Sayang\n• Makasih\n• Huaaa\n• Ara ara\n• Gratata\n• My number\n• Baterai bot\n• My contact\n• Assalamualaikum',MessageType.text, { quoted: mek} )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'spam5':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
  				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
  					client.updatePresence(from, Presence.composing) 
					teks = `${body.slice(7)}`
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'spam20':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
  				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
  					client.updatePresence(from, Presence.composing) 
					teks = `${body.slice(7)}`
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'spam10':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
  				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
  					client.updatePresence(from, Presence.composing) 
					teks = `${body.slice(7)}`
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					client.sendMessage(from, 'Aine paling keren 😎',MessageType.text, { quoted: mek} )
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'spam':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!args)return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = argssplit("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
				client.sendMessage(from, argzi[0], MessageType.text)
				}
				await limitAdd(sender)
				break
			case 'spamcall':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					if (args.length < 1) return reply('Nomor nya mana kak?!!!')
					data = await fetchJson(`https://id.jagreward.com/member/verify-mobile/${body.slice(10)}`)
					spcall = `*Nomor Aine* : _${data.phone_prefix}_\n\n_Aine berhasil menlpon anda!_`
					reply(spcall)
				        await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'leaderboard':
			case 'lb':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
					for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal ${len} user untuk bisa mengakses database`)
				}
			break
			case 'limit':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				checkLimit(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break 
			case 'giftlimit': 
				if (!isAdmin) return reply('Hanya admin yang bisa melakukan giftlimit')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				const nomerr = args[0].replace('@','')
				const jmla = args[1]
				if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
				if (isNaN(jmla)) return reply(`limit harus berupa angka`)
				if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
				const cysz = nomerr + '@s.whatsapp.net'
				var found = false
                    		 Object.keys(_limit).forEach((i) => {
				if(_limit[i].id === cysz){
                                found = i
				}
				})
				if (found !== false) {
				_limit[found].limit -= jmla
				const updated = _limit[found]
				const result = `Gift kuota limit sukses dengan SN: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
				*「 GIFT KUOTA LIMIT 」*

				• User : @${updated.id.replace('@s.whatsapp.net','')}
				• Limit: ${limitawal-updated.limit}`
				console.log(_limit[found])
				fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
				reply(result)
				} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
				}
			break
			case 'mutual':
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Looking for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'next':
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Looking for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!q.includes('|')) return  reply(ind.wrongf())
				const tujuan = q.substring(0, q.indexOf('|') - 1)
				const jumblah = q.substring(q.lastIndexOf('|') + 1)
				if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
				if (jumblah < 2000 ) return reply(`minimal transfer 2000`)
				if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
				const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
				fee = 0.010 *  jumblah
				hasiltf = jumblah - fee
				addKoinUser(tujuantf, hasiltf)
				confirmATM(sender, jumblah)
				addKoinUser('62895330379186@s.whatsapp.net', fee)
				reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'dompet':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('limit harus berupa angka!!')
				const koinPerlimit = 5000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
			case 'buypremiumlimit':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
			break
				//no rest api 
			case 'slap':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				kapankah = body.slice(1)
				const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','setan lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu setan','cupu cupu aja gausah bacot','setan lu semua','bocah lu semua setan','3 Hari Lagi']
				const ple = slap[Math.floor(Math.random() * slap.length)]
				pod = await getBuffer(`https://i.ibb.co/d51j7VP/tampar.jpg`)
				client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
				await limitAdd(sender)
			break
			case 'brainly':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				brien = body.slice(9)
				brainly(`${brien}`).then(res => {
				teks = '❉───────────❉\n'
				for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
				}
				client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
				console.log(res)
				})
				await limitAdd(sender)
			break
			case 'kalkulator':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
			break
			case 'tinyurl':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				url = args.join(" ")
				request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
				try {
				reply(body)
				} catch (e) {
                 		reply(e)
				}
				})
			break
			case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				bisakah = body.slice(1)
				const bisa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				kapankah = body.slice(1)
				const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lagi','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'apakah':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'bagaimanakah':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				bagaimanakah = body.slice(1)
				const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				rate = body.slice(1)
				const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'sangecek':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				sange = body.slice(1)
				const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const nge = sang[Math.floor(Math.random() * sang.length)]
				client.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
                	case 'gaycek':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				gayy = body.slice(1)
				const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const yag = gay[Math.floor(Math.random() * gay.length)]
				client.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
        	        case 'lesbicek':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				lesbii = body.slice(1)
				const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
				client.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
                	case 'gantengcek':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				ganteng = body.slice(1)
				const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'cantikcek':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				cantik = body.slice(1)
				const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const tik = can[Math.floor(Math.random() * can.length)]
				client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'watak':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				watak = body.slice(1)
				const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'hobby':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				hobby = body.slice(1)
				const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
				client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'truth':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const trut =['Pernah ngambil uang ortu apa ga?','Pernah bohong sama ortu apa aja?\nCoba ceritakan tentang kebohongannya','Apa makanan yang kamu sukai?','Siapa yang mau di jadikan pacar di gc ini?','Apa mimpi terburukmu?','Apa hal paling memalukan dari temanmu?','Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const dare =['Foto kuburan tengah malam berani ga?','Ambil foto aine, jadikan foto profil kamu selama 1 hari','Ambil foto aine, jadikan foto profil kamu selama 1 hari','Ambil foto aine, jadikan foto profil kamu selama 1 hari','VN nyanyi balonku ada 5','Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'whowibu':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					jds = []
					const whwi = groupMembers
					const whbu = groupMembers
					const ihhwbu = whwi[Math.floor(Math.random() * whwi.length)]
					teks = `Yang paling wibu di grub ini adalah @${ihhwbu.jid.split('@')[0]}`
					jds.push(ihhwbu.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break	
			case 'terkeren':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terkeren di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break	
			case 'terburik':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang terburik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'slot':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				const sl = ['🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🔔',
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌']
				const ot = sl[Math.floor(Math.random() * sl.length)]
				client.sendMessage(from, ot, MessageType.text, { quoted: mek} )
				client.sendMessage(from, `[  🎰 | SLOTS | 🎰  ]\n-------------------\n🍌 : 🍒 : 🔔\n${ot}<===\n🔔 : 🍐 : 🍇\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: mek })
				if (isOwner | isAdmin | isPremium) {
				const slotpremium = Math.ceil(Math.random() * 1000000)
				addLevelingXp(sender, slotpremium)
				   await reply(`Selamat ${pushname} kamu mendapatkan ${slotpremium}Xp Hasil dari permainan slot :)`)
                 		} else {
					const slotss = Math.ceil(Math.random() * 100000)
				    addLevelingXp(sender, slotss)
				    await reply(`Selamat ${pushname} kamu mendapatkan ${slotss}Xp Hasil dari permainan slot :)`)
					}
			break
			case 'tagme':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					var ainenoms = mek.participant
					const tagx = {
					text: `@${ainenoms.split("@s.whatsapp.net")[0]} Tuh udah aine tag 🤭`,
					contextInfo: { mentionedJid: [ainenoms] }
					}
					client.sendMessage(from, tagx, text, {quoted: mek})
					await limitAdd(sender)
			break
			case 'intro':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
                                        cfghh = body.slice(7)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di cipok*')
					mentionedaine = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedaine.length > 1) {
						teks = ''
						for (let _ of mentionedaine) {
							teks += `Intro kak :):\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentionedaine, true)
						client.sendMessage(from, mentionedaine)
					} else {
						mentions(`Intro kak @${mentionedaine[0].split('@')[0]} 😅\n*Nama:*\n*Umur:*\n*Askot:*`, mentionedaine, true)
						client.sendMessage(from, mentionedaine)
					}
					await limitAdd(sender)
			break
			case 'ciumme':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					var aineciums = mek.participant
					const ciumtag = {
					text: `Muaach @${aineciums.split("@s.whatsapp.net")[0]} 😘`,
					contextInfo: { mentionedJid: [aineciums] }
					}
					client.sendMessage(from, ciumtag, text, {quoted: mek})
					await limitAdd(sender)
			break
			case 'pelukme':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					var ainepeluks = mek.participant
					const peluktag = {
					text: `Peyuuk @${ainepeluks.split("@s.whatsapp.net")[0]} 🤗`,
					contextInfo: { mentionedJid: [ainepeluks] }
					}
					client.sendMessage(from, peluktag, text, {quoted: mek})
					await limitAdd(sender)
			break
			case 'cium2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
                                        cfghh = body.slice(7)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di cipok*')
					mentionedaine = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedaine.length > 1) {
						teks = ''
						for (let _ of mentionedaine) {
							teks += `Muaach 😘 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentionedaine, true)
						client.sendMessage(from, mentionedaine)
					} else {
						mentions(`Muaach @${mentionedaine[0].split('@')[0]} 😘`, mentionedaine, true)
						client.sendMessage(from, mentionedaine)
					}
					await limitAdd(sender)
			break
			case 'peluk2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
                                        cfghh = body.slice(8)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di peluk*')
					mentionedaines = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedaines.length > 1) {
						teks = ''
						for (let _ of mentionedaines) {
							teks += `Peyuuk 🤗 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentionedaines, true)
						client.sendMessage(from, mentionedaines)
					} else {
						mentions(`Peyuuk kak @${mentionedaines[0].split('@')[0]} 🤗`, mentionedaines, true)
						client.sendMessage(from, mentionedaines)
					}
					await limitAdd(sender)
			break
			case 'perkosa':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
                                        cfghh = body.slice(7)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di cipok*')
					mentionedainees = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedainees.length > 1) {
						teks = ''
						for (let _ of mentionedainees) {
							teks += `Auto Perkosa 🤤:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentionedainees, true)
						client.sendMessage(from, mentionedainees)
					} else {
						mentions(`Auto Perkosa @${mentionedainees[0].split('@')[0]} 🤤`, mentionedainees, true)
						client.sendMessage(from, mentionedainees)
					}
					await limitAdd(sender)
			break
			case 'hilih':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					i = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "i");
					}
					reply(i(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					i = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "i");
					}
					reply(i(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'holoh':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					o = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "o");
					}
					reply(o(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					o = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "o");
					}
					reply(o(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'halah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					az = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "a");
					}
					reply(az(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					az = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "a");
					}
					reply(az(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'heleh':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					e = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "e");
					}
					reply(e(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					e = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "e");
					}
					reply(e(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'huluh':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					u = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "u");
					}
					reply(u(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					u = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "u");
					}
					reply(u(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'profile':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
    				client.updatePresence(from, Presence.composing)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
    				try {
    				bio = (await client.getStatus(sender)).status
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 PROFILE ANDA 」\n│• Name: ${pushname}\n│• XP: ${getLevelingXp(sender)}\n│• Level: ${getLevelingLevel(sender)}\n│• Role: ${role}\n│• User Terdaftar: ✓\n│• Bio: ${bio}\n│• Link: wa.me/${sender.split("@")[0]}\n╰──────────────────`
					buffer = await getBuffer(ppimg)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
			break
			case 'jadian':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'jadian2':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					const ttggll = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
					const bllns = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
					const thnsl = ['2010\nCie jadian udah 11 tahun loh','2011\nCie jadian udah 10 tahun loh','2012\nCie jadian udah 9 tahun loh','2013\nCie jadian udah 8 tahun loh','2014\nCie jadian udah 7 tahun loh','2015\nCie jadian udah 6 tahun loh','2016\nCie jadian udah 5 tahun loh','2017\nCie jadian udah 4 tahun loh','2018\nCie jadian udah 3 tahun loh','2019\nCie jadian udah 2 tahun loh','2020\nCie jadian udah 1 tahun loh','2021\nCie yang jadian tahun ini']
					bbs = []
					const jdiis = groupMembers
					const kossi = groupMembers
					const tgljdian = ttggll[Math.floor(Math.random() * ttggll.length)]
					const blnjdian = bllns[Math.floor(Math.random() * bllns.length)]
					const thnjdian = thnsl[Math.floor(Math.random() * thnsl.length)]
					const akuus = jdiis[Math.floor(Math.random() * jdiis.length)]
					const diaas = kossi[Math.floor(Math.random() * kossi.length)]
					teks = `Ciee.. yang lagi jadian @${akuus.jid.split('@')[0]} ♥️ @${diaas.jid.split('@')[0]}\n\nJadian sejak ${tgljdian} - ${blnjdian} - ${thnjdian}`
					bbs.push(akuus.jid)
					bbs.push(diaas.jid)
					mentions(teks, bbs, true)
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
			case 'fitnah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var ainegs = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				var replace = ainegs.split("|")[0];
				var target = ainegs.split("|")[1];
				var bot = ainegs.split("|")[2];
				client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'ttp':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://salism3api.pythonanywhere.com/text2img/?text=${body.slice(5)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.image} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'attp':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`Teksnya Mana Kak\n*Contoh ${prefix}attp Aine*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				client.sendMessage(from, attp2, sticker, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'attp2':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://salism3api.pythonanywhere.com/text2gif/?text=${body.slice(7)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.image} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
			break
			case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('kirim foto dengan caption ${prefix}ocr')
					}
					await limitAdd(sender)
				break
/*case 'stiker2':
case 'sticker2':
case 'stikergif2':
case 'stickergif2':
if (!isRegistered) return reply(ind.noregis())
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(`*「 GAGAL 」 ULANGI LAGI*`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(`MITSUHA`,`BOT`)} ${ran} -o ${ran}`, async (error) => {
//if (error) {
// reply(ind.stikga())
// fs.unlinkSync(media)	
// fs.unlinkSync(ran)
// }
client.sendMessage(from, fs.readFileSync(ran), sticker)
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(ind.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`*「 GAGAL 」 ULANGI LAGI*`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(`MITSUHA`, `BOT`)} ${ran} -o ${ran}`, async (error) => {
//if (error) {
// reply(ind.stikga())
// fs.unlinkSync(media)	
// fs.unlinkSync(ran)
// }
client.sendMessage(from, fs.readFileSync(ran), sticker)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix2}sticker atau tag gambar yang sudah dikirim`)
}
break*/
			case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
		    case 'stikerwm':
		    case 'stickerwm':
		    case 'swm':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
		            pepp = args.join('')
		            var aaaa = pepp.split("|")[0];
		            var bbbb = pepp.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media = await client.downloadAndSaveMediaMessage(encmedia)
		            await createExif(aaaa,bbbb)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./tmp/@aine.exif', out, '-o', _out])
		            .on('exit', () => {
		            client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [aaaa][bbbb]; [aaaa] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [bbbb][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media = await client.downloadAndSaveMediaMessage(encmedia)
		            pepp = args.join('')
		            var aaaa = pepp.split("|")[0];
		            var bbbb = pepp.split("|")[1];
		            await createExif(aaaa,bbbb)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./tmp/@aine.exif', out, '-o', _out])
		            .on('exit', () => {
		            client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [aaaa][bbbb]; [aaaa] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [bbbb][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		case 'snowm':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
			case 'tts':
			case 'gtts':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana kak', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal kak:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
			break
			case 'simi':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply( 'Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Textnya mana kak?')
				teks = body.slice(5)
				anu = await simih(teks) 
				reply(anu)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break 
			case 'simii':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://pencarikode.xyz/api/simsimii?text=${body.slice(7)}?&apikey=pais`)
				reply(data.result)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isQuotedSticker) return reply('Reply stickernya kak!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				reply(ind.wait())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply(ind.stikga())
					buffer = fs.readFileSync(ran)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*UDAH JADI SETAN*'})
					fs.unlinkSync(ran)
				})
				await limitAdd(sender)
			break 
			case 'tiktokstalk2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
					if (args.length < 1) return client.sendMessage(from, 'Username apa kak?', text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(ind.wait())
					teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
				} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('[ERROR] KEMUNGKINAN USERNAME TIDAK VALID')
				}
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
				//group feature 
			case 'hidetag':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				var value = body.slice(9)
				var group = await client.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
				text: value,
				contextInfo: { mentionedJid: mem },
				quoted: mek
				}
				client.sendMessage(from, options, text)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'tagstick':
			case 'sticktag':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				var value = body.slice(9)
				var group = await client.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map(async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
				contextInfo: { mentionedJid: mem },
				quoted: mek
				}
				ini_buffer = fs.readFileSync(media)
				client.sendMessage(from, ini_buffer, sticker, options)
				fs.unlinkSync(media)
				} else {
				reply(`Tag sticker yang sudah dikirim`)
				}
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'tagimg':
			case 'imgtag':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				var value = body.slice(9)
				var group = await client.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map(async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
				contextInfo: { mentionedJid: mem },
				quoted: mek
				}
				ini_buffer = fs.readFileSync(media)
				client.sendMessage(from, ini_buffer, image, options)
				fs.unlinkSync(media)
				}
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'audtag':
			case 'tagaud':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				var value = body.slice(9)
				var group = await client.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
				contextInfo: { mentionedJid: mem },
				quoted: mek
				}
				ini_buffer = fs.readFileSync(media)
				client.sendMessage(from, ini_buffer, audio, options)
				fs.unlinkSync(media)
				}
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'kontag':
			case 'tagkon':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				const pepek = body.slice(8)
				const adan = pepek.split("|")[0]
				const nuahh = pepek.split("|")[1]
				const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
				let taih = await client.groupMetadata(from)
				let setan = taih.participants
				let bruy = []
				for (let go of setan){
				bruy.push(go.jid)
				}
				client.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {quoted: mek,contextInfo: {"mentionedJid": bruy}})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
 			case 'pesan':
                   		if (!isRegistered) return reply(ind.noregis())
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`[❗] Cara mengirim pesan kepada pengguna whatsapp\nUsage :\n${prefix}${command} +codenegara|halo kak\n\nEx :\n${prefix}${command} +628xxxxxxx|halo kak\nError :\n${prefix}${command} +62 8xx-xxx-xxx|halo kak\nError Auto Banned!`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					client.sendMessage(`${F1}@s.whatsapp.net`, `Pengirim : ${pushname}\nPesan : ${F2}`, text, {quoted:mek})
					reply('Berhasil mengirim pesan..')
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
 			case 'chat':
				if (!isAdmin) return reply('Pesan ini untuk owner kami')
				if (args.length < 1) return reply(`[❗] Cara mengirim pesan kepada pengguna whatsapp\nUsage :\n${prefix}${command} +codenegara|halo kak\n\nEx :\n${prefix}${command} +628xxxxxxx|halo kak\nError :\n${prefix}${command} +62 8xx-xxx-xxx|halo kak\nError Auto Banned!`)
					var FGC = body.slice(7)
					var FFE1 = FGC.split("|")[0];
					var FFE2 = FGC.split("|")[1];
					client.sendMessage(`${FFE1}@s.whatsapp.net`, `Pengirim : Owner\nPesan : ${FFE2}`, text, {quoted:mek})
					reply('Berhasil mengirim pesan..')
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
 			case 'pesanpremium':
                   		if (!isRegistered) return reply(ind.noregis())
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`[❗] Cara mengirim pesan kepada pengguna whatsapp\nUsage :\n${prefix}${command} +codenegara|halo kak\n\nEx :\n${prefix}${command} +62|halo kak`)
					var FGS = body.slice(15)
					var F001 = FGS.split("|")[0];
					var F002 = FGS.split("|")[1];
					client.sendMessage(`${F001}@s.whatsapp.net`, `Pengirim : Developer\nPesan : ${F002}`, text, {quoted:mek})
					reply('Berhasil mengirim pesan..')
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'sider':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				infom = await client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
				tagg = []
				teks = `Telah Dibaca Oleh :\n\n`
				for(let i of infom.reads){
				teks += '@' + i.jid.split('@')[0] + '\n'
				teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
				tagg.push(i.jid)
				}
				mentions(teks, tagg, true)
				break
                   	/*case 'getpremium':
                   		if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply(`[❗] Cara mendapatlan premium gratis\n*1* Masukan nomor bot +6289654360447\n(untuk konfirmasi sesamabot)\n*2* Masukan nomor kamu.\n(untuk konfirmasi nomormu ke bot kami untuk melakukan otomatis)\n*3* Kami sudah menyiapkan contohnya di bagian bawah..\nUsage :\nXgetpremium +6289654360447|yournumber\n\nEx :\nXgetpremium +6289654360447|628955330379186`)
					var FK = body.slice(13)
					var F01 = FK.split("|")[0];
					var F02 = FK.split("|")[1];
					client.sendMessage(`${F01}@s.whatsapp.net`, `#premium ${F02}`, text, {quoted:mek})
					reply(`*「 FREE PREMIUM 」*\nBerhasil menjadi pengguna premium.. 🥳\nNama : ${pushname}\nSN : ${createSerial(20)}\nTime : ${moment().format('DD/MM/YY HH:mm:ss')}\n\nNote : Premium gratis akan direset jika bot mereset semua data`)
					client.sendMessage(from,``, text)
				await limitAdd(sender)
				break*/
                   	case 'makegroup':
                   		if (!isAdmin) return reply('Maaf kamu tidak dapat membuat group, fitur ini hanya untuk owner..')
				if (isBanned) return reply('Maaf, Aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const aineloh = body.slice(11)
				const ainenihh = aineloh.split("|")[0]
				const okelahh = aineloh.split("|")[1].replace("@","")
				client.groupCreate(`${ainenihh}`, [`6289654360447@s.whatsapp.net`,`${okelahh}@s.whatsapp.net`])
				reply('_Sucses creategroup_')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'wa.me':
			case 'wame':
  				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
  				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
  				client.updatePresence(from, Presence.composing) 
  				options = {
  				text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  				contextInfo: { mentionedJid: [sender] }
  				}
  				client.sendMessage(from, options, text, { quoted: mek } )
  				break
  				if (data.error) return reply(data.error)
  				reply(data.result)
				await limitAdd(sender)
  				break
			case 'add':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				if (args.length < 1) return reply('Please use number callphone and use country code!')
				if (args[0].startsWith('08')) return reply('Please use country code!')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					client.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
				}
			break
			/*case 'add':
				client.sendMessage(from, 'Maaf fitur add tidak tersedia!\nKarena rentan benned oleh pihak whatsapp.',MessageType.text, { quoted: mek} )
			break*/
			case 'level':
				if (!isRegistered) return reply(ind.noregis())
				if (!isLevelingOn) return reply(ind.lvlnoon())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				const userLevel = getLevelingLevel(sender)
				const userXp = getLevelingXp(sender)
				if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
				const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
				resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  ├─ ❏ *Pangkat* : ${role}\n  └─ ❏ *User Level* : ${userLevel}\n`
				costum(resul, text, tescuk, per)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break 
case 'revoke':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
client.revokeInvite(from)
reply('```Succes revoke link group```')
break
        case 'banchat':{
            if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
            if (!isOwner && !isGroupAdmins)return reply('Untuk admin :)')
            if (!q) return reply('pilih aktif/nonaktif')
            if(q.toLowerCase() === 'aktif' || q.toLowerCase() === 'true') {
                if(isBanchat) return reply('sudah aktif!')
                banchat.push(from)
                fs.writeFileSync('./database/group/banchat.json', JSON.stringify(banchat))
                banchat = JSON.parse(fs.readFileSync('./database/group/banchat.json'))
                reply(`*BANCHAT AKTIF DI GROUP INI*`)
            } else if(q.toLowerCase() === 'nonaktif' || q.toLowerCase() === 'false'){
                if(!isBanchat) return reply('belum aktif!')
                let index = banchat.indexOf(from)
                banchat.splice(index, 1)
                fs.writeFileSync('./database/group/banchat.json', JSON.stringify(banchat))
                banchat = JSON.parse(fs.readFileSync('./database/group/banchat.json'))
                reply(`*BANCHAT NONAKTIF DI GROUP INI*`)
            } else{
                reply('pilih *aktif/nonaktif* saja brother')
            }
        }
            break
			case 'mining':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				if (isOwner | isAdmin | isPremium) {
				const one = Math.ceil(Math.random() * 10000000000000000000000000)
				addLevelingXp(sender, one)
				await reply(`Kamu bagian dari transaksi aine, aine akan berikan sebanyak *${one}Xp* untuk anda`)
                 		} else {
				const mining = Math.ceil(Math.random() * 1000000000000)
				addLevelingXp(sender, mining)
				await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
				}
				await limitAdd(sender)
			break
			case 'closetime':    
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing) 
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*Pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomoor = mek.participant
					const close = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomoor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomoor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
			break
			case 'opentime': 
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing) 
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*Pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomoer = mek.participant
					const open = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomoer.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomoer] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
			//BUKA TUTUP GC PAKAI WAKTU
			case 'buka10m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 10 menit grup ini akan aine buka', text)
					}, 0)
			break
			case 'tutup10m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 10 menit grup ini akan aine tutup', text)
					}, 0)
			break
			case 'buka20m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 20 menit grup ini akan aine buka', text)
					}, 0)
			break
			case 'tutup20m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 20 menit grup ini akan aine tutup', text)
					}, 0)
			break
			case 'buka30m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 30 menit grup ini akan aine buka', text)
					}, 0)
			break
			case 'tutup30m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 30 menit grup ini akan aine tutup', text)
					}, 0)
			break
			case 'buka40m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 40 menit grup ini akan aine buka', text)
					}, 0)
			break
			case 'tutup40m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 40 menit grup ini akan aine tutup', text)
					}, 0)
			break
			case 'buka50m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 50 menit grup ini akan aine buka', text)
					}, 0)
			break
			case 'tutup50m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 50 menit grup ini akan aine tutup', text)
					}, 0)
			break
			case 'buka60m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 3600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine buka', text)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine buka', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan aine buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '60 menit grup ini akan aine buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 60 menit grup ini akan aine buka', text)
					}, 0)
			break
			case 'tutup60m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 3600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan aine tutup', text)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan aine tutup', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan aine tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan aine tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan aine tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '60 menit grup ini akan aine tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 60 menit grup ini akan aine tutup', text)
					}, 0)
			break
			case 'tutup':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 0)
			break
			case 'buka':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 0)
			break
			case 'grup':
			case 'group':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				if (args[0] === 'buka') {
				reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
				} else if (args[0] === 'tutup') {
					reply(`*BERHASIL MENUTUP GROUP*`)
				client.groupSettingChange(from, GroupSettingChange.messageSend, true)
				}
			break
			case 'join':
				if (!isPremium) return reply(`Hubungi kami jika ingin mengundang aine ke grup kamu, ketik ${prefix}owner`)
				const joen = await client.acceptInvite (body.slice(32))
				reply("SUCCESS join to : *" + joen.gid + "*" )
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'readmore':
			case 'more':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const more = String.fromCharCode(8206)
				const readmore = more.repeat(4001)
				if (!q.includes('|')) return  reply(ind.wrongf())
				const text1 = q.substring(0, q.indexOf('|') - 0)
				const text2 = q.substring(q.lastIndexOf('|') + 1)
				reply( text1 + readmore + text2)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'setname':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				client.groupUpdateSubject(from, `${body.slice(9)}`)
				client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'setdesc':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				client.groupUpdateDescription(from, `${body.slice(9)}`)
				client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'demote':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
                                        cfgghh = body.slice(8)
					if (cfgghh.length > 16) return client.sendMessage(from, 'Maaf Nomor Terlalu Panjang, Maksimal 16 Teks', msgType.text, {quoted: mek})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
			break
			case 'promote':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
                                        cfghh = body.slice(9)
					if (cfghh.length > 16) return client.sendMessage(from, 'Maaf Nomor Terlalu Panjang, Maksimal 16 Teks', msgType.text, {quoted: mek})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
			break
			case 'kick':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
                                        cfgh = body.slice(6)
					if (cfgh.length > 16) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 16 Teks', msgType.text, {quoted: mek})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					client.sendMessage(from, 'Sampah group berkurang 😂', text)
					}, 8000)
					setTimeout( () => {
					reply('Berhasil mengusir sampah group ini!')
					}, 7000)
					setTimeout( () => {
					client.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					client.sendMessage(from, `Aine telah mengeluarkan anda : wa.me/${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					client.sendMessage(from, 'Asik aine dapat jatah kick 😆', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah diterima oleh aine')
					}, 0)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'listadmin':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'addrespon':
					if (!isAdmin) return reply('Only Admin Us!')
					if(!q) return reply(`ketik perintah ${prefix}addrespon filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
  					if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./database/group/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listrespon`)
			break
			case 'delrespon':
					if (!isAdmin) return reply('Only Admin Us!')
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
 					obj = {
					txt: filter[i].text,
					balesan: filter[i].balesan
					}
					let del = filter.indexOf(filter[i])
					filter.splice(del, 1)
					fs.writeFileSync('./database/group/filter.json', JSON.stringify(filter))
					reply(`Sukses Menghapus Respon ${q}`)
					}
					}
			break
			case 'listrespon':
			case 'responlist':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					teks = 'List Respon:\n'
					for (let i of filter) {
					teks += `⬡ Filter : ${i.Filter}\n⬡ Jawab : ${i.Jawaban}\n\n---------------------------\n\n`
					}
					teks += `Total : ${filter.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'autorespon':
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply(`Cara mengaktifkan ${prefix}autorespon on, Cara menonaktifkan ${prefix}autorespon off`)
					if (args[0] == 'on') {
						if (sfilter.includes(from)) return reply('*Fitur responder sudah aktif sebelum nya*')
						sfilter.push(from)
						fs.writeFileSync('./database/group/sfilter.json', JSON.stringify(sfilter))
						reply('_❬ SUCCSESS ❭ mengaktifkan Autorespon Chat digroup ini_')
					} else if (args[0] == 'off') {
					  let off = sfilter.indexOf(from)
						sfilter.splice(off, 1)
						fs.writeFileSync('./database/group/sfilter.json', JSON.stringify(sfilter))
						reply('_❬ SUCCSESS ❭ menonaktifkan Autorespon Chat digroup ini_')
					} else {
						reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}autorespon on`)
					}
			break
			case 'welcome':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply(`Cara mengaktifkan ${prefix}welcome 1, Cara menonaktifkan ${prefix}welcome 0`)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya*')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
						client.sendMessage(from,`Perhatian kepada seluruh member fitur welcome group aktif apabila ada member join, bot akan selalu menyapanya`, text)
					} else if (Number(args[0]) === 0) {
						let iniaine = welkom.indexOf(from)
						welkom.splice(iniaine, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini ')
					} else {
						reply(ind.satukos())
					}
			break
			case 'autosticker':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply(`Cara mengaktifkan ${prefix}autosticker 1, Cara menonaktifkan ${prefix}autosticker 0`)
					if (Number(args[0]) === 1) {
						if (isAuto) return reply('Fitur autosticker sudah aktif sebelum nya')
						autosticker.push(from)
						fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(autosticker))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur autosticker di group ini')
						client.sendMessage(from,`Perhatian kepada seluruh member fitur autosticker group aktif apabila ada member mengirim gambar dan menggunakan caption apapun, bot akan autosticker gambar kamu.`, text)
					} else if (Number(args[0]) === 0) {
						let aineini = autosticker.indexOf(from)
						autosticker.splice(aineini, 1)
						fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(autosticker))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur autosticker di group ini ')
					} else {
						reply(ind.satukos())
					}
			break
			case 'simih':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply(`Cara mengaktifkan ${prefix}simih 1, Cara mengaktifkan ${prefix}simih 0`)
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simih sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur simi di group ini')
					} else if (Number(args[0]) === 0) {
						let ainneini = samih.indexOf(from)
						samih.splice(ainneini, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur simi di group ini')
					} else {
						reply(ind.satukos())
					}
			break
			case 'nsfw':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply(`Cara mengaktifkan ${prefix}nsfw 1, Cara menonaktifkan ${prefix}nsfw 0`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur nsfw di group ini')
					} else if (Number(args[0]) === 0) {
						let ainneeini = nsfw.indexOf(from)
						nsfw.splice(ainneeini, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur nsfw di group ini')
					} else {
						reply(ind.satukos())
					}
			break
		/*case 'afk':
	                if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
	                if (isAfkOn) return reply(ind.afkOnAlready())
	                if (isLimit(sender)) return reply(ind.limitend(pushname))
	                limitAdd(sender)
	                reason = body.slice(5)
					if (reason === undefined || reason === ' ' || reason === '') { reason = 'nothing'}
	                addAfkUser(sender, time, reason)
	                reply(ind.afkOn(pushname, reason))
	            break*/
		/*case 'afk':
                			if (!isRegistered) return reply(ind.noregis())
                			if (!isGroup) return reply(ind.groupo())
               	 			if (isAfkOn) return reply(ind.afkOnAlready())
                			const reason = q ? q : 'Nothing.'
                			addAfkUser(sender.id, time, reason, _afk)
                			client.sendMessage(from, ind.afkOn(pushname, reason), text)
            				break*/
				/*case 'afk':
                			if (!isRegistered) return reply(ind.noregis())
                			if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					if (isAfkOn) return await reply('Anda Sudah AFK Di Group Lain')
					const aepka = body.slice(5)
					const reason = aepka ? aepka : 'Nothing'
					addAfkUser(sender, time, reason, _afk)
					client.sendMessage(from, `「 *BERHASIL AFK* 」
${a}Dengan Data Berikut :${a}
${a}Nama : ${pushname}${a}
${a}Alasan : ${reason}${a}
${a}Dinyatakan Telah AFK!${a}
`, text, { quoted: mek })
					break*/

               /*case 'afk':
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
                			if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/group/afk.json", JSON.stringify(afk))
                    ini_txt = `\`\`\`Fitur Afk berhasil diaktifkan!\`\`\`\n\`\`\`Username:\`\`\` ${pushname}\n`
                    if (alasan != "") {
                        ini_txt += "\`\`\`Alasan:\`\`\` " + alasan
                    }
                    reply(ini_txt)
                    break
	            break*/
	case 'afk':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return reply(`cara menggunakannya ${prefix}${command} main game`)
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/group/afk.json", JSON.stringify(afk))
		try {
                    pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                    } catch {
                    pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
                    }
                    pp_riu = await getBuffer(pp_user)
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    client.sendMessage(from, pp_riu, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ini_txt })
		await limitAdd(sender)
                break
                case 'leveling':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply(`Cara mengaktifkan ${prefix}welcome on, Cara mengaktifkan ${prefix}welcome off`)
					if (args[0] === 'on') {
					if (isLevelingOn) return reply('*Fitur leveling sudah aktif sebelum nya*')
						_leveling.push(from)
						fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					client.sendMessage(from,`Perhatian kepada seluruh member fitur level group aktif jika kalian nimbrung, bot akan selalu menambahkan xp, uang, limit`, text)
					} else if (args[0] === 'off') {
						let ainneinii = _leveling.indexOf(from)
						_leveling.splice(ainneinii, 1)
						fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvloff())
					} else {
					reply(ind.satukos())
					}
		break 
		case 'antibadword':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Ketik on untuk mengaktifkan, atau Ketik off untuk menonaktifkan')
					if (args[0] === 'on') {
              				if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
						badword.push(from)
						fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	                        reply(`Sukses mengaktifkan anti badword group di group ini ✔️`)
					client.sendMessage(from,`Perhatian kepada seluruh member antibadword group aktif jika kalian berkata kotor, anda akan di kick!`, text)
					} else if (args[0] === 'off') {
						let ainneiini = badword.indexOf(from)
						badword.splice(ainneiini, 1)
                 	   			fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	                        reply(`Sukes menonaktifkan anti badword group di group ini ✔️`)
					} else {
					reply(ind.satukos())
					}
		break
		case 'antispam':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Ketik on untuk mengaktifkan, atau Ketik off untuk menonaktifkan')
					if (args[0] === 'on') {
              				if (isAntiSpam) return reply('*Fitur antispam sudah aktif sebelum nya*')
						antispam.push(from)
						fs.writeFileSync('./database/group/antispam.json', JSON.stringify(antispam))
                  	                        reply(`Sukses mengaktifkan anti virtex group di group ini ✔️`)
					client.sendMessage(from,`Perhatian kepada seluruh member antispam group aktif jika kalian kirim spam 5000 text, anda akan di kick+blockir!`, text)
					} else if (args[0] === 'off') {
						let ainneinni = antispam.indexOf(from)
						antispam.splice(ainneinni, 1)
                 	   			fs.writeFileSync('./database/group/antispam.json', JSON.stringify(antispam))
                 	                        reply(`Sukes menonaktifkan anti virtex group di group ini ✔️`)
					} else {
					reply(ind.satukos())
					}
		break
		case 'antivirtex1':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Ketik on untuk mengaktifkan, atau Ketik off untuk menonaktifkan')
					if (args[0] === 'on') {
              				if (isAntiVirtex) return reply('*Fitur virtex sudah aktif sebelum nya*')
						antivirtex.push(from)
						fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
                  	                        reply(`Sukses mengaktifkan anti virtex group di group ini ✔️`)
					client.sendMessage(from,`Perhatian kepada seluruh member antivirtex group aktif jika kalian kirim virtex, anda akan di kick!`, text)
					} else if (args[0] === 'off') {
						let aaineini = antivirtex.indexOf(from)
						antivirtex.splice(aaineini, 1)
                 	   			fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
                 	                        reply(`Sukes menonaktifkan anti virtex group di group ini ✔️`)
					} else {
					reply(ind.satukos())
					}
		break
		case 'antivirtex2':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Ketik on untuk mengaktifkan, atau Ketik off untuk menonaktifkan')
					if (args[0] === 'on') {
              				if (isAntiVirtexx) return reply('*Fitur virtex sudah aktif sebelum nya*')
						antivirtexx.push(from)
						fs.writeFileSync('./database/group/antivirtexx.json', JSON.stringify(antivirtexx))
                  	                        reply(`Sukses mengaktifkan anti virtex group di group ini ✔️`)
					client.sendMessage(from,`Perhatian kepada seluruh member antivirtex group aktif jika kalian kirim virtex, anda akan di kick!`, text)
					} else if (args[0] === 'off') {
						let aaiineini = antivirtexx.indexOf(from)
						antivirtexx.splice(aaiineini, 1)
                 	   			fs.writeFileSync('./database/group/antivirtexx.json', JSON.stringify(antivirtexx))
                 	                        reply(`Sukes menonaktifkan anti virtex group di group ini ✔️`)
					} else {
					reply(ind.satukos())
					}
		break
		case 'antivirtex3':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Ketik on untuk mengaktifkan, atau Ketik off untuk menonaktifkan')
					if (args[0] === 'on') {
              				if (isAntiVirtexxx) return reply('*Fitur virtex sudah aktif sebelum nya*')
						antivirtexxx.push(from)
						fs.writeFileSync('./database/group/antivirtexxx.json', JSON.stringify(antivirtexxx))
                  	                        reply(`Sukses mengaktifkan anti virtex group di group ini ✔️`)
					client.sendMessage(from,`Perhatian kepada seluruh member antivirtex group aktif jika kalian kirim virtex, anda akan di kick!`, text)
					} else if (args[0] === 'off') {
						let ainesini = antivirtexxx.indexOf(from)
						antivirtexxx.splice(ainesini, 1)
                 	   			fs.writeFileSync('./database/group/antivirtexx.json', JSON.stringify(antivirtexxx))
                 	                        reply(`Sukes menonaktifkan anti virtex group di group ini ✔️`)
					} else {
					reply(ind.satukos())
					}
		break
		case 'linkgc':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				linkgc = await client.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
		break
		case 'tagall':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
		break
		case 'delete':
		case 'del':
		case 'd':
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (mek.message.extendedTextMessage.contextInfo.participant != client.user.jid) return reply(`Tidak Dapat Menghapus Pesan Orang Lain!\nHarap Reply pesan aine\nKetik *${prefix}d*`)
				client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
		break 
		case 'addbadword':
				if (!isAdmin) return reply('Only Admin Us!')
				if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
				const bw = body.slice(12)
				bad.push(bw)
				fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
				reply('Success Menambahkan Bad Word!')
		break
                case 'delbadword':
				if (!isAdmin) return reply('Only Admin Us!')
				if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
				let dbw = body.slice(12)
				bad.splice(dbw)
				fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
				reply('Success Menghapus BAD WORD!')
		break 
                case 'listbadword':
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
				for (let i of bad) {
				lbw += `➸ ${i.replace(bad)}\n`
				}
				await reply(lbw)
                break 
                //admin feature 
		/*case 'kickall':
				if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
		break*/
		case 'setreply':
				if (!isOwner) return reply(ind.ownerb())
				client.updatePresence(from, Presence.composing) 
				if (args.length < 1) return
				cr = body.slice(10)
				reply(`reply berhasil di ubah menjadi : ${cr}`)
				await limitAdd(sender)
		break 
		case 'clone':
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerg()) 
				if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
					pp = await client.getProfilePicture(id)
					buffer = await getBuffer(pp)
					client.updateProfilePicture(botNumber, buffer)
					mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
					reply(ind.stikga())
				}
		break
		case 'event':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isOwner) return reply(ind.ownerb())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUCCSESS ❭ mengaktifkan fitur event di group ini*')
						client.sendMessage(from,`Perhatian kepada seluruh member fitur event group aktif apabila anda mining akan mendapatkan xp, dan limit`, text)
					} else if (Number(args[0]) === 0) {
						let ainessini = event.indexOf(from)
						event.splice(ainessini, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUCCSESS ❭ menonaktifkan fitur event di group ini*')
					} else {
						reply(ind.satukos())
					}
			break
			case 'eventt':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isAdmin) return reply('*Only Admin Bot Us*')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.indexOf(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
						client.sendMessage(from,`Perhatian kepada seluruh member fitur event group aktif apabila anda mining akan mendapatkan xp, dan limit`, text)
					} else if (Number(args[0]) === 0) {
						let ainessinii = event.indexOf(from)
						event.splice(ainessinii, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
			break
			case 'antilink':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.ownerg())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('*Anti link group sudah aktif*')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						let ainexini = antilink.indexOf(from)
						antilink.splice(ainexini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
			break
			case 'antilinkig':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.ownerg())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isAntiIg) return reply('*Anti link instagram sudah aktif*')
						antiig.push(from)
						fs.writeFileSync('./database/group/antiig.json', JSON.stringify(antiig))
						reply('Sukses mengaktifkan anti link instagram di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link instagram aktif apabila anda promosi link instagram anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						let ainexsini = antiig.indexOf(from)
						antiig.splice(ainexsini, 1)
						fs.writeFileSync('./database/group/antiig.json', JSON.stringify(antiig))
						reply('Sukes menonaktifkan anti link instagram di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
			break
			case 'antilinkigg':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.ownerg())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isAntiIgg) return reply('*Anti link instagram sudah aktif*')
						antiigg.push(from)
						fs.writeFileSync('./database/group/antiigg.json', JSON.stringify(antiigg))
						reply('Sukses mengaktifkan anti link instagram di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link instagram aktif apabila anda promosi link instagram anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						let ainezsini = antiigg.indexOf(from)
						antiigg.splice(ainezsini, 1)
						fs.writeFileSync('./database/group/antiigg.json', JSON.stringify(antiigg))
						reply('Sukes menonaktifkan anti link instagram di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
			break
			case 'antilinkytt':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.ownerg())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isAntiYtt) return reply('*Anti link youtube sudah aktif*')
						antiytt.push(from)
						fs.writeFileSync('./database/group/antiytt.json', JSON.stringify(antiytt))
						reply('Sukses mengaktifkan anti link youtube di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link youtube aktif apabila anda promosi link youtube anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						let ainehsini = antiytt.indexOf(from)
						antiytt.splice(ainehsini, 1)
						fs.writeFileSync('./database/group/antiytt.json', JSON.stringify(antiytt))
						reply('Sukes menonaktifkan anti link youtube di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
			break
			case 'antilinkyt':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.ownerg())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isAntiYt) return reply('*Anti link youtube sudah aktif*')
						antiyt.push(from)
						fs.writeFileSync('./database/group/antiyt.json', JSON.stringify(antiyt))
						reply('Sukses mengaktifkan anti link youtube di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link youtube aktif apabila anda promosi link youtube anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						let ainehssini = antiyt.indexOf(from)
						antiyt.splice(ainehssini, 1)
						fs.writeFileSync('./database/group/antiyt.json', JSON.stringify(antiyt))
						reply('Sukes menonaktifkan anti link youtube di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
			break
			case 'block':
					client.updatePresence(from, Presence.composing) 
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me/${body.slice(8)}@c.us`, text)
			break
			case 'unblock':
					client.updatePresence(from, Presence.composing) 
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
			break
			case 'blockk':
					client.updatePresence(from, Presence.composing) 
					client.chatRead (from)
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isAdmin) return reply('*Only Admin bot*')
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
			case 'unblockk':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isAdmin) return reply('*Only Admin bot*')
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
			case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
			break 
			case 'setpp': 
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					media = await client.downloadAndSaveMediaMessage(mek)
					await client.updateProfilePicture (from, media)
					reply('SUCCESS CHANGE PROFILE GROUP')
			break				
			case 'leave':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Sampai jumpa 👋', text) // ur cods
					}, 0)
			break
			case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 PESAN BROADCAST 」*\n\nDari : Owner\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(4)}`})
						}
						reply('*SUCCESS BROADCAST* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST AINEBOT 」*\n\nDari : Owner\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(4)}`)
						}
						reply('*SUCCESS BROADCAST* ')
					}
			break
			case 'bcc': 
					if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 PESAN BROADCAST 」*\n\nDari : Wakil Owner\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(5)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST AINEBOT 」*\n\nDari : Wakil Owner\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(5)}`)
						}
						reply('*Suksess broadcast* ')
					}
			break
			case 'bclimit': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `Aine Memberikan Limit Kepada Pengguna Terdaftar Sebanyak : ${body.slice(9)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `Aine Memberikan Limit Kepada Pengguna Terdaftar Sebanyak : ${body.slice(9)}`)
						}
						reply('*Suksess broadcast* ')
					}
			break
			case 'bcs': 
					if (!isAdmin) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `${body.slice(5)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(5)}`)
						}
						reply('*Suksess broadcast* ')
					}
			break
			case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
			break
			case 'clearall2':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
					await client.modifyChat(_.jid, "delete")
					}
					reply(ind.clears())
			break
			case 'clearallgc':
					if (!isOwner) return reply(ind.ownerb())
					reply('Sukses membersihkan pesan')
					console.log('succes delete chat = ' + from)
					client.modifyChat(from, ChatModification.delete)
			break
			case 'shutdown':
					if (!isOwner) return reply(ind.ownerb())
					reply('_Program di matikan!_')
					console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Bye kak besok ketemu lagi ya, Jangan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
					await sleep(5000)
					client.close()
			break
			case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`Change Prefix To ${prefix} SUCCESS!`)
			break  
			case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
			break
			case 'setlimit':
			case 'addlimit':
				if (args.length < 1) return
				if (!isOwner) return reply(ind.ownerb())
				if (isNaN(args[0])) return reply('limit harus angka')
				limitawal = args[0]
				reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
			break
			case 'resetlimit':
				if (!isOwner) return reply(ind.ownerb())
				var obj = []
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(obj, null, '\t'))
				reply(`LIMIT BERHASIL DI RESET`)
			break
			case 'getpict':
			case 'getpic':
			case 'getpp':
				if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (args.length < 1) return reply('Tag orangnya!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				pictt = await client.getProfilePicture(mentioned)
				pict = await getBuffer(pictt)
				client.sendMessage(from, pict, image, {quoted: mek})
			break
			case 'getbio':
				if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (args.length < 1) return reply('Tag orangnya!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const p = await client.getStatus(`${mentioned}`, MessageType.text)
				reply(p.status)
				if (p.status == 401) {
				reply('Error!')
				}
			break
			case 'getdeskgc':
				if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if (!isGroupAdmins) return reply(ind.admin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				anu = from
				metadete = await client.groupMetadata(anu)
				client.sendMessage(from, metadete.desc, text, {quoted:mek})
			break
			case 'getppgc':
				if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if (!isGroupAdmins) return reply(ind.admin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				anu = from
				if (`${anu}@g.us`) {
				try {
					ppimg = await client.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await client.groupMetadata(anu)
				ano = await client.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				client.sendMessage(from, buffer, image, {quoted: mek})
				} else {
				}
			break
			case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
				case 'eval':
				if (!isOwner) return reply(ind.ownerb())
                if (!q) return reply(ind.wrongf())
                try {
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)
          		//	client.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
       	         } catch (err) {
        	            console.error(err)
          	          await reply('Error!')
  	   	       }
        	    break 
        		case 'listonline': 
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
				let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
				client.sendMessage(from, 'List Online Grup:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
				contextInfo: { mentionedJid: online }
				})
				await limitAdd(sender)
			break 
			case '=>':
				if (!isOwner) return reply(ind.ownerb())
				const cmd = body.slice(4)
				exec(cmd, (err, stdout) => {
					if (err) return client.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						client.sendMessage(from, stdout, text)
					}
				})
			break
			//tools 
			case 'tomp3':
				client.updatePresence(from, Presence.composing)
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isQuotedVideo) return reply('Reply video untuk mengubah audio!')
				reply(ind.wait())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
				})
				await limitAdd(sender)
			break 
			case 'tomp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (!isQuotedSticker) return reply('Reply stickernya kak!')
                                reply(ind.wait())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
					let ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			        let owgi = await client.downloadAndSaveMediaMessage(ger)
					webp2mp4File(owgi).then(res=>{
					sendMediaURL(from,res.result)
					})
					} else {
					reply('Reply Stickernya!')
					}
				   // fs.unlinkSync(owgi)
				await limitAdd(sender)
			break
			case 'slowmo':
			case 'slow':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				await limitAdd(sender)
			break
			case 'tupai':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
				break
				case 'gemok':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
				break
			case 'bass':                 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
				break
			case 'robot':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				medial = await client.downloadAndSaveMediaMessage(encmedial)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medial)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt:true, quoted: mek})
						fs.unlinkSync(ran)
				})
				await limitAdd(sender)
				break
				case 'getsticker':
			case 'gets':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				namastc = body.slice(12)
				result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
				client.sendMessage(from, result, sticker, {quoted :mek})
				await limitAdd(sender)
			break
			case 'stickerlist':
			case 'liststicker':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				await limitAdd(sender)
			break
		case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					if (!isQuotedSticker) return reply('Reply stiker nya kak')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa kak?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
				await limitAdd(sender)
		break
		case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					if (!isQuotedAudio) return reply('Reply vnnya kak!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa kak?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				await limitAdd(sender)
		break
		case 'getvn':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				await limitAdd(sender)
		break
		case 'listvn':
		case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				await limitAdd(sender)
		break
		case 'addimage':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					if (!isQuotedImage) return reply('Reply imagenya kak!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa kak?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Image\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
				await limitAdd(sender)
		break
		case 'getimage':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
				await limitAdd(sender)
			break
		case 'imagelist':
		case 'listimage':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
				await limitAdd(sender)
		break
		case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					if (!isQuotedVideo) return reply('Reply videonya kak!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa kak?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
				await limitAdd(sender)
		break
		case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				await limitAdd(sender)
		break
		case 'listvideo':
		case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				await limitAdd(sender)
		break
		case 'smeme':
		case 'stickmeme':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				let ge = args.join('')           
				let top = ge.split('|')[0]
				let bottom = ge.split('|')[1]
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
				let ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
				let owgi = await  client.downloadAndSaveMediaMessage(ger)
		        let anu = await imgbb("bd1fd580c3931c3aea3822efb8dacaa6", owgi)
				let teks = `${anu.display_url}`
				let ranp = getRandom('.gif')
				let rano = getRandom('.webp')
				let anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
				sendWebp(from, `${anu1}`)
				} else {
				reply('Gunakan foto/stiker!')
				}
		break
		case 'scary':
		case 'scar':
				 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				 let ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				 reply(ind.wait())
				 var imgbb = require('imgbb-uploader')
				         let owgi = await client.downloadAndSaveMediaMessage(ger)
				         let anu = await imgbb("bd1fd580c3931c3aea3822efb8dacaa6", owgi)
				         let teks = `${anu.display_url}`
				         let ranp = getRandom('.gif')
				         let rano = getRandom('.webp')
				         let anu1 = `https://docs-jojo.herokuapp.com/api/scary-gif?image_url=${teks}`
				         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				         fs.unlinkSync(ranp)
				         if (err) return reply(imd.stikga())
				         let nobg = fs.readFileSync(rano)
				         client.sendMessage(from, nobg, sticker, {quoted: mek})
				         fs.unlinkSync(rano)
				})
            			} else {
				reply('Gunakan foto!')
				}
				await limitAdd(sender)
		break
		case 'triggered':
		case 'ger':
				 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				 let ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				 reply(ind.wait())
				 var imgbb = require('imgbb-uploader')
				         let owgi = await client.downloadAndSaveMediaMessage(ger)
				         let anu = await imgbb("bd1fd580c3931c3aea3822efb8dacaa6", owgi)
				         let teks = `${anu.display_url}`
				         let  ranp = getRandom('.gif')
				         let rano = getRandom('.webp')
				         let anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
				         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				         fs.unlinkSync(ranp)
				         if (err) return reply(imd.stikga())
				         let nobg = fs.readFileSync(rano)
				         client.sendMessage(from, nobg, sticker, {quoted: mek})
				         fs.unlinkSync(rano)
				})
            			} else {
				reply('Gunakan foto!')
				}
				await limitAdd(sender)
		break
		case 'tourl':
				 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				 reply(ind.wait())
				 var imgbb = require('imgbb-uploader')
				 let owgi = await client.downloadAndSaveMediaMessage(ger)
				 let anu = await imgbb("bd1fd580c3931c3aea3822efb8dacaa6", owgi)
				 let teks = `${anu.display_url}`
				 reply(teks)
				 }
				 fs.unlinkSync(owgi)
				await limitAdd(sender)
		break
		case 'wasted':
		case 'was':
				if(!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				let ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				reply(ind.wait())
				var imgbb = require('imgbb-uploader')
				  let owgi = await client.downloadAndSaveMediaMessage(ger)
				  let anu = await imgbb("bd1fd580c3931c3aea3822efb8dacaa6", owgi)
				  let teks = `${anu.display_url}`
				  let ranp = getRandom('.gif')
				  let rano = getRandom('.webp')
				  let anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
				  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				  fs.unlinkSync(ranp)
				  if (err) return reply(ind.stikga())
				  let nobg = fs.readFileSync(rano)
				  client.sendMessage(from, nobg, sticker, {
				  quoted: mek
				})
				fs.unlinkSync(rano)
				  })
				} else {
				  reply('Gunakan foto!')
				}
				await limitAdd(sender)
		break 
		case 'wanted':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				let ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  let owgi = await client.downloadAndSaveMediaMessage(ted)
				  let tels = body.slice(7)
				  let anu = await imgbb("bd1fd580c3931c3aea3822efb8dacaa6", owgi)
				  let hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
				 client.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Jangan tambah kan apapun pada command')
				}
				await limitAdd(sender)
		break
		case 'gtav':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("edc1dcca61d4f055657be2f5d074128d", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
				 client.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Jangan tambah kan apapun pada command')
				}
				await limitAdd(sender)
		break
		case 'facebookpage':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(14)
				  anu = await imgbb("edc1dcca61d4f055657be2f5d074128d", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
				 client.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Jangan tambah kan apapun pada command')
				}
				await limitAdd(sender)
		break
		case 'costumwp':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(14)
				  anu = await imgbb("edc1dcca61d4f055657be2f5d074128d", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
				 client.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Jangan tambah kan apapun pada command')
				}
				await limitAdd(sender)
		break
		case 'pantaimalam':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(14)
				  anu = await imgbb("edc1dcca61d4f055657be2f5d074128d", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
				 client.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Jangan tambah kan apapun pada command')
				}
				await limitAdd(sender)
				break
		case 'pencil':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(14)
				  anu = await imgbb("edc1dcca61d4f055657be2f5d074128d", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
				 client.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Jangan tambah kan apapun pada command')
				}
				await limitAdd(sender)
		break
		case 'bakar':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("edc1dcca61d4f055657be2f5d074128d", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
				 client.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Jangan tambah kan apapun pada command')
				}
				await limitAdd(sender)
		break
		case 'crossgun':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("edc1dcca61d4f055657be2f5d074128d", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
				 client.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Jangan tambah kan apapun pada command')
				}
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
		break
		case 'konfirmasi':
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							knfrimsi = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: knfrimsi, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							knfrimsi = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: knfrimsi, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					break
				case 'delttt':
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
					reply(ind.wait())
					laa = nana.filter(toek => !toek.id.includes(from)) 
					nana = laa
					reply('Sukses Gan')
					console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
			case 'tictactoe':
			case 'ttt':           
				var _0x4917=['yM9HCMq','C3rLCa','C3rYAw5NAwz5','mtjUqwDktwe','nE+4J+kdOW','mZu5mZaZywPHv0jY','mE+4J+kdOW','mZC0mtmZzNrTA0nw','oo+4J+kdOW','rxHHBxbSztOG','mJGZndmWzNvSy1fh','D3jPDgvgAwXLu3LUyW','murluNjWBq','mvLxAwnmBa','mZaWmZvrEw1RAem','nU+4J+kdOW','mU+4J+kdOW','cGPqBgf5zxiGmJOGqa','Dg9mB3DLCKnHC2u','zw5LBxK','Bw9Kzq','mwLhq2rkrW','DgLJDgfJDg9LifGVtYbaDgfNigXHD2fU','lI9KyxrHyMfZzs90Awn0ywn0B2uUANnVBG','mZq4otzyDhjtDui','ugXHEwvYide6iea','thuGBwf1ig1Hzw4Gyw1HihnPyxbHig95','mtyYntCXogXQueXSra','ndC3ntyYD0jSu3LA','m++4J+kdOW','n++4J+kdOW','no+4J+kdOW','oE+4J+kdOW','C2vUze1LC3nHz2u','BgvUz3rO','z3jVDxa','Aw5JBhvKzxm','C3bSAxq'];var _0x273a71=_0x30c0;(function(_0x12be5c,_0x3b1746){var _0x5ae0ef=_0x30c0;while(!![]){try{var _0x5bc7c0=-parseInt(_0x5ae0ef(0x13d))+parseInt(_0x5ae0ef(0x139))*-parseInt(_0x5ae0ef(0x14a))+parseInt(_0x5ae0ef(0x136))*-parseInt(_0x5ae0ef(0x14c))+-parseInt(_0x5ae0ef(0x12f))+-parseInt(_0x5ae0ef(0x12e))*parseInt(_0x5ae0ef(0x14e))+parseInt(_0x5ae0ef(0x151))*parseInt(_0x5ae0ef(0x12d))+parseInt(_0x5ae0ef(0x13c));if(_0x5bc7c0===_0x3b1746)break;else _0x12be5c['push'](_0x12be5c['shift']());}catch(_0x637962){_0x12be5c['push'](_0x12be5c['shift']());}}}(_0x4917,0x3ce13));if(!isGroup)return reply(['only group'][_0x273a71(0x144)]);if(mentionUser[_0x273a71(0x143)]==0x0)return await reply(_0x273a71(0x13b));if(args[_0x273a71(0x143)]==0x1)return await reply(_0x273a71(0x150)+prefix+'tictactoe\x20X/O\x20@tag\x20lawan');if(!['x','o'][_0x273a71(0x145)](args[0x0][_0x273a71(0x133)]()))return await reply('Example:\x20'+prefix+_0x273a71(0x137));nantang=X,pelawan=O;args[0x0][_0x273a71(0x133)]()=='o'&&(nantang=O,pelawan=X);var board=[_0x273a71(0x14d),_0x273a71(0x131),_0x273a71(0x13e),_0x273a71(0x140),_0x273a71(0x14b),_0x273a71(0x130),_0x273a71(0x13f),_0x273a71(0x14f),_0x273a71(0x141)],penantang=sender,lawan=mentionUser[0x0];tesk=_0x273a71(0x13a)+penantang[_0x273a71(0x146)]('@')[0x0]+'\x20('+nantang+')\x20'+tunjuk+'\x0a';var count=0x0;function _0x30c0(_0x1b870b,_0x5aefbc){_0x1b870b=_0x1b870b-0x12c;var _0x491788=_0x4917[_0x1b870b];if(_0x30c0['Iuhvyw']===undefined){var _0x30c087=function(_0x7a7bc1){var _0xd56b0a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2cd12b='';for(var _0xbebbea=0x0,_0x4ac8e8,_0x10aeef,_0x3c8bb4=0x0;_0x10aeef=_0x7a7bc1['charAt'](_0x3c8bb4++);~_0x10aeef&&(_0x4ac8e8=_0xbebbea%0x4?_0x4ac8e8*0x40+_0x10aeef:_0x10aeef,_0xbebbea++%0x4)?_0x2cd12b+=String['fromCharCode'](0xff&_0x4ac8e8>>(-0x2*_0xbebbea&0x6)):0x0){_0x10aeef=_0xd56b0a['indexOf'](_0x10aeef);}return _0x2cd12b;};_0x30c0['GsFjxe']=function(_0x575ee7){var _0x43ed18=_0x30c087(_0x575ee7);var _0x39ad58=[];for(var _0x1dc72c=0x0,_0x4ab19d=_0x43ed18['length'];_0x1dc72c<_0x4ab19d;_0x1dc72c++){_0x39ad58+='%'+('00'+_0x43ed18['charCodeAt'](_0x1dc72c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x39ad58);},_0x30c0['BFFsQs']={},_0x30c0['Iuhvyw']=!![];}var _0x21031f=_0x4917[0x0],_0xfd5c96=_0x1b870b+_0x21031f,_0x208688=_0x30c0['BFFsQs'][_0xfd5c96];return _0x208688===undefined?(_0x491788=_0x30c0['GsFjxe'](_0x491788),_0x30c0['BFFsQs'][_0xfd5c96]=_0x491788):_0x491788=_0x208688,_0x491788;}for(var x of board){count%0x3==0x0&&(tesk+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'),tesk+=x,count+=0x1;}tesk+=_0x273a71(0x132)+lawan['split']('@')[0x0]+'\x20('+pelawan+')';return client[_0x273a71(0x142)](from,tesk,text,{'quoted':mek,'contextInfo':{'mentionedJid':[penantang,lawan]}})['then'](()=>{var _0x37efa2=_0x273a71,_0x21031f={};_0x21031f[_0x37efa2(0x134)]=lawan[_0x37efa2(0x146)]('@')[0x0],_0x21031f[_0x37efa2(0x135)]=pelawan,_0x21031f[_0x37efa2(0x147)]=board,_0x21031f[_0x37efa2(0x148)]=0x0,tictactoe[penantang[_0x37efa2(0x146)]('@')[0x0]]=_0x21031f,fs[_0x37efa2(0x12c)](_0x37efa2(0x138),JSON[_0x37efa2(0x149)](tictactoe));});
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
				default:

				if (budy == '@dongon') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@fufago') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnyee = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: captnyee, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnyee = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: captnyee, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@forepi') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnee = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: captnee, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnee = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: captnee, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@yuaina') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captee = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: captee, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captee = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: captee, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@cubaka') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							capte = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: capte, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							capte = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: capte, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@lecuka') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							cubacus = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: cubacus, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							cubacus = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: cubacus, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@leleko') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							lelesk = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: lelesk, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							lelesk = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: lelesk, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@konaba') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							konnab = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: konnab, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							konnab = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: konnab, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@jujuai') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							jujusi = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: jujusi, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							jujusi = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: jujusi, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@aquaza') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							aqaza = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: aqaza, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							aqaza = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: aqaza, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@jiraji') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							jirajiz = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: jirajiz, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							jirajiz = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: jirajiz, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@developer') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							dvlpr = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: dvlpr, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							dvlpr = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: dvlpr, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@konfirmasi') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							knfrimsi = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: knfrimsi, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							knfrimsi = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: knfrimsi, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
				if (budy == '@aine') {
				if (isRegistered) return  reply(ind.rediregis())
				if (!isPremium) return reply('Maaf code ini hanya untuk premium!\nHarap konfirmasi menggunakan nomor telpon aktif!')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							ainegoh = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: ainegoh, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							ainegoh = `${a}──「 DATA KAMU 」──${a}\n\n${a}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${a}\n\n${a}Nama: ${pushname}${a}\n${a}Nomor:${a} wa.me/${sender.split("@")[0]}\n${a}Limit: 1000000${a}\n${a}User Terdaftar:${a} ✓\n${a}Waktu Pendaftaran: ${time}${a}\n${a}NS: ${serialUser}${a}\n\n${a}Note:${a}\n${a}• Nomor NS adalah untuk melakukan transaksi pembayaran buylimit dan transfer uang.${a}\n${a}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${a}`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: ainegoh, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
			if (body.startsWith(`${prefix}${command}`)) {
			if (isBanned) return reply('Sudah terbenned mau ngapain?\nMasih sempet mau spam?')
                  reply(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }
                  if (budy.match(`@${numberbot}`)){
			if (isBanned) return
                  let tagstick = fs.readFileSync('src/tag.webp') 
	          client.sendMessage(from, tagstick, MessageType.sticker, {quoted: mek})
	          }
                  if (budy == 'Kick'
                  || (budy == 'kick')) {
                  if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
                  if (!isGroupAdmins) return reply(ind.admin())
                  if (!isBotGroupAdmins) return reply(ind.badmin())	
    			  quotedis = mek.message.extendedTextMessage.contextInfo.participant
				  await client.groupRemove(from, [quotedis])
				  reply(`berhasil kick reply`)
				  }
                  if (budy.includes('My contact')
                  || budy.includes('my contact')
                  || budy.includes('My Contact')){
                  const bios = (await client.getStatus(sender)).status
                  const pcard = 'BEGIN:VCARD\n' // metadata of the contact card
					+ 'VERSION:3.0\n' 
					+ `FN:${pushname}\n` // full name
					+ `TEL;type=CELL;type=VOICE;waid=${(sender.split('@')[0])}:${(sender.split('@')[0])}\n` // WhatsApp ID + phone number
					+ `ORG:${bios};\n`
					+ 'END:VCARD'
					client.sendMessage(from, {displayname: "Jeff", vcard: pcard}, contact, { quoted: mek })
				  }

		if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, aine gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, aine gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dila.sendMessage(from, buffer, sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						}
        /*if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Sudah jam 02:00 kak, Main botnya buat nanti lagi, Tidur kak istirahat', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '08:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Pagi kak, Jangan lupa mandi dan sarapan', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '08:00' && hour_now <= '09:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Udah mandi belum kak dan sarapan?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '09:00' && hour_now <= '10:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Selamat beraktivitas', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '10:00' && hour_now <= '12:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Selamat siang kak ', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Bentar lagi magrib kak, Mandi gih kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Waktunya sholat magrib kak, Jangan lupa kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Selamat malam kak, Jangan lupa makan nanti sakit', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '00:01') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Aine ngantuk kak, Aine tidur dulu ya kak', 'yellow'), color('(😪)', 'white'))
        }
        if (hour_now >= '00:05' && hour_now <= '02:00') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Zzz', 'yellow'), color('(😴)', 'white'))
        }
        if (hour_now >= '04:00') {
        client.sendMessage(from, `Jangan lupa sholat shubuh iya kak 😊`, MessageType.text, {quoted: mek})
	}*/
            if (/^>/.test(pes)) {
            	if (!isOwner) return
	            let txt = pes.replace(/^>/, '')
	            let type = Function
	            if (/await/.test(pes)) type = (async () => {}).constructor
	            let func = new type('print', 'client', 'MessageType', 'mek', 'text', 'from', 'image', 'os', 'fetch', txt)
	            console.log('[EvalF]', func.toString())
	            let output
	            try {
	                output = await func((...args) => {
	                    console.log('[EvalP]', ...args)
	                    client.sendMessage(from, util.format(...args), MessageType.extendedText, {
	                        quoted: mek
	                    })
	                }, client, MessageType, mek, text, from, await image, os, fetch)
	                console.log('[EvalO]', output)
	                client.sendMessage(from, util.format(output), MessageType.extendedText, {
	                    quoted: mek
	                })
	            } catch (e) {
	                console.error('[EvalE]', e)
	                client.sendMessage(from, util.format(e), MessageType.extendedText, {
	                    quoted: mek
	                })
	            }
            }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
          } catch (e) {
            e = String(e)
            if (!e.includes("this.isZero")) {
                const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                console.log(color(time_error, "white"), color("[  ERROR  ]", "aqua"), color(e, 'red'))
            }
        }
    }




