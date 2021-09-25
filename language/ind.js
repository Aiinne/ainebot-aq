const string = '```'

exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`──「 DAFTAR 」──\nHalo kak !\nKamu belum terdaftar didalam database aine.\n\n\nCara Daftar : @konfirmasi\n`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, prefix) => {
	return`${string}──「 DATA KAMU 」──${string}\n\n${string}Terima kasih sudah mendaftar, aine akan menyimpan data mu.${string}\n\n${string}Nama: ${namaUser}${string}\n${string}Umur: ${umurUser}${string}\n${string}Limit: 15${string}\n${string}Nomor:${string} wa.me/${sender.split("@")[0]}\n${string}Waktu pendaftaran: ${time}${string}\n${string}NS: ${serialUser}${string}\n\n${string}Note:${string}\n${string}• Kami dari pihak developer aine, apapun yang anda lakukan dengan pencarian di aine, kami tidak akan bertanggung jawab hal itu!${string}`
}

exports.cmdnf = (prefix, command) => {
	return`Command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, time, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, ucapanWaktu, hit_today, baterai, client, os, process, pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord, isfilter) => { 
	if (isOwner) {
	    owner = "Owner"
	} else if (!isOwner) {
	    owner = "User"
	}
	if (isGroup){
	return `「 *AINE BOT* 」

  💠 *${ucapanWaktu}* *${pushname}* 💠

◪ *INFO DEVELOPER*
  ❏ Nama: Muhammad Ridwan Reynaldy
  ❏ Wa: wa.me/62895330379186
  ❏ Ig: https://instagram.com/anemio999
  ❏ Fb: https://facebook.com/ridwan228
  ----------------------------------
◪ *INFO AINEBOT*
  ❏ Nama: Aine
  ❏ Gender: Girl
  ❏ Nomor: wa.me/6289654360447
  ❏ Fb: https://facebook.com/ainneboot
  ❏ Ig: https://instagram.com/ainee_bot

◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Pengguna: 「Terdaftar」
  ❏ Nama : ${pushname}
  ❏ Nomer : wa.me/${sender.split("@")[0]}
  ❏ Uang mu : Rp${uangku},-
  ❏ XP : ${getLevelingXp(sender)}/${reqXp}
  ❏ Level : ${getLevelingLevel(sender)}
  ❏ Pangkat : ${role}
  ❏ User register : ${_registered.length}
 
◪ *ABOUT BOT*
  ❏ Name : ${client.user.name}
  ❏ Run: Termux
  ❏ Time : ${time} WIB
  ❏ Browser : ${client.browserDescription[1]}
  ❏ Server : ${client.browserDescription[0]}
  ❏ Version : ${client.browserDescription[2]}
  ❏ Os Version: ${client.user.phone.os_version}
  ❏ Versi wa : ${client.user.phone.wa_version}
  ❏ Handphone : ${client.user.phone.device_manufacturer}
  ❏ Device Model: ${client.user.phone.device_model}
  ❏ MNC : ${client.user.phone.mnc}
  ❏ MCC : ${client.user.phone.mcc}
  ❏ Speed : ${process.uptime()}
  ❏ Hostname : ${os.hostname()}
  ❏ Platform : ${os.platform()}
  ❏ Baterai : ${baterai.baterai}% 🔋
  ❏ Status Charge : ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}
  ❏ Total Hit : ${pepolu}
  ❏ Total Hit Today : ${hit_today.length}
 
◪ *ABOUT GROUP*
  ❏ Name group : ${groupMetadata.subject}
  ❏ Total member : ${groupMetadata.participants.length}
  ❏ Total admin : ${groupAdmins.length}
  ❏ Autorespon : ${isfilter}
  ❏ Welcome : ${isWelkom}
  ❏ Antibadword : ${isBadWord}
  ❏ Leveling : ${isLevelingOn}
  ❏ Antilink : ${isAntiLink}

◪ *ABOUT MENU*
➽❏ ${prefix}snk
➽❏ ${prefix}lpr
➽❏ ${prefix}owner
➽❏ ${prefix}author
➽❏ ${prefix}request
➽❏ ${prefix}blocklist
➽❏ ${prefix}ping
➽❏ ${prefix}donasi
➽❏ ${prefix}buypremium
➽❏ ${prefix}hargaprem
➽❏ ${prefix}gcainebot

◪ *MENU*
➽❏ ${prefix}menufun
➽❏ ${prefix}menupict
➽❏ ${prefix}menugrup
➽❏ ${prefix}menuowner
➽❏ ${prefix}menumaker
➽❏ ${prefix}menustorage

 ◪ *OTHER FITUR*
➽❏ ${prefix}ssweb [link]
➽❏ ${prefix}halah [teks]
➽❏ ${prefix}hilih [teks]
➽❏ ${prefix}huluh [teks]
➽❏ ${prefix}heleh [teks]
➽❏ ${prefix}holoh [teks]
➽❏ ${prefix}say [teks]
➽❏ ${prefix}wiki [teks]
➽❏ ${prefix}kbbi [teks]
➽❏ ${prefix}map [teks]
➽❏ ${prefix}kalkulator [teks]
➽❏ ${prefix}lirik [teks]
➽❏ ${prefix}brainly [teks]
➽❏ ${prefix}chord [teks]
➽❏ ${prefix}kata [text]
➽❏ ${prefix}katacinta
➽❏ ${prefix}katabijak
➽❏ ${prefix}sms
➽❏ ${prefix}kodepos
➽❏ ${prefix}cerpen
➽❏ ${prefix}namaninja
➽❏ ${prefix}tinyurl [link]
➽❏ ${prefix}faktaunik
➽❏ ${prefix}tahugasih
➽❏ ${prefix}pesankosong
➽❏ ${prefix}pantun
➽❏ ${prefix}semoji 🙂
➽❏ ${prefix}artinama [teks]
 
◪ *GAME*
➽❏ ${prefix}suit
➽❏ ${prefix}slot
➽❏ ${prefix}ttt X/O
➽❏ ${prefix}delttt
➽❏ ${prefix}tebakgambar

◪ *APK*
➽❏ ${prefix}moddroid [teks]
➽❏ ${prefix}apkpure [teks] 
➽❏ ${prefix}happymod [teks] 

◪ *FIND TARGET*
➽❏ ${prefix}anonchat
➽❏ ${prefix}mutual [premium]
➽❏ ${prefix}next [premium]

◪ *MEME*
➽❏ ${prefix}meme 
➽❏ ${prefix}memeindo

◪ *Stalking*
➽❏ ${prefix}igstalk 
➽❏ ${prefix}tiktokstalk 
➽❏ ${prefix}githubstalk username

◪ *ISLAM*
➽❏ ${prefix}quran
➽❏ ${prefix}findnabi
➽❏ ${prefix}niatshalat
➽❏ ${prefix}asmaulhusna

◪ *SPAM*
➽❏ ${prefix}spam5 [premium]
➽❏ ${prefix}spam10 [premium]
➽❏ ${prefix}spamcall 8xxx[premium]

◪ *LIMIT & UANG & LB*
➽❏ ${prefix}limit
➽❏ ${prefix}dompet
➽❏ ${prefix}buylimit [nominal]
➽❏ ${prefix}buypremiumlimit [nominal]
➽❏ ${prefix}requestlimit
➽❏ ${prefix}transfer [nomor | nominal]
➽❏ ${prefix}leaderboard

◪ *SOUND*
➽❏ ${prefix}sholawat
➽❏ ${prefix}itiraf
➽❏ ${prefix}alittlelove
➽❏ ${prefix}soundplaydate [premium]
➽❏ ${prefix}soundbakahentai [premium]
➽❏ ${prefix}sayonichan [premium]
➽❏ ${prefix}gtts [code bahasa][premium]

◪ *TOOLS*
➽❏ ${prefix}tourl
➽❏ ${prefix}toimg
➽❏ ${prefix}tomp3 [premium]
➽❏ ${prefix}tomp4 [premium]
➽❏ ${prefix}bass
➽❏ ${prefix}slow
➽❏ ${prefix}gemok
➽❏ ${prefix}robot
➽❏ ${prefix}tupai

◪ *KERANG AJAIB*
➽❏ ${prefix}gantengcek [teks]
➽❏ ${prefix}cantikcek [teks]
➽❏ ${prefix}sangecek [teks]
➽❏ ${prefix}gaycek [teks]
➽❏ ${prefix}lesbicek [teks]
➽❏ ${prefix}watak [teks]
➽❏ ${prefix}hobby [teks]
➽❏ ${prefix}apakah [teks]
➽❏ ${prefix}kapankah [teks]
➽❏ ${prefix}bisakah [teks]
➽❏ ${prefix}bagaimanakah [teks]
➽❏ ${prefix}rate [teks]

◪ *18+ premium*
➽❏ ${prefix}sodok [premium]
➽❏ ${prefix}pussy [premium]
➽❏ ${prefix}boobs [premium]
➽❏ ${prefix}solo [premium]
➽❏ ${prefix}smug [premium]
➽❏ ${prefix}feet [premium]
➽❏ ${prefix}hentai [premium]
➽❏ ${prefix}hentai2 [premium]
➽❏ ${prefix}blowjob [premium]
➽❏ ${prefix}blowjob2 [premium]
➽❏ ${prefix}lewdkemo [premium]

◪ *DOWNLOADER*
➽❏ ${prefix}pinterest [teks]
➽❏ ${prefix}joox [teks][premium]
➽❏ ${prefix}ytmp3 [link][premium]
➽❏ ${prefix}ytmp4 [link][premium]
➽❏ ${prefix}igmp4 [link][premium]
➽❏ ${prefix}play [teks][premium]
➽❏ ${prefix}tiktokdl [teks][premium] ❌
 
◪ *INFORMATION*
➽❏ ${prefix}bahasa
➽❏ ${prefix}kodenegara
➽❏ ${prefix}info
➽❏ ${prefix}infobot
➽❏ ${prefix}infodev
➽❏ ${prefix}infoadmin
➽❏ ${prefix}infogempa
➽❏ ${prefix}infonomor 
➽❏ ${prefix}infocuaca
➽❏ ${prefix}covid

◪ *QUOTES*
➽❏ ${prefix}quotes
➽❏ ${prefix}quoteskehidupan
➽❏ ${prefix}quotesislami
➽❏ ${prefix}quotesnasehat
➽❏ ${prefix}quotescinta
➽❏ ${prefix}quotesmotivasi
➽❏ ${prefix}animequotes
➽❏ ${prefix}twichquotes

◪ *OTHER*
➽❏ ${prefix}afk [text]
➽❏ ${prefix}wame
➽❏ ${prefix}ocr
➽❏ ${prefix}profile
➽❏ ${prefix}del [premium]
➽❏ ${prefix}qrcode
➽❏ ${prefix}neonime
➽❏ ${prefix}getspremium
➽❏ ${prefix}wait [premium]
➽❏ ${prefix}readmore [text| percobaan]
➽❏ ${prefix}join [linkgrup][premium]
➽❏ ${prefix}kontak 6289654360447|Namakontak
➽❏ ${prefix}pesan +6289654360447|text [premium]
◪ *POWERED BY AINEBOT*
`
} else if (!isGroup) {
    return `
  💠 *${ucapanWaktu}* *${pushname}* 💠

◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Pengguna: 「Terdaftar」
  ❏ Nama : ${pushname}
  ❏ Nomer : wa.me/${sender.split("@")[0]}
  ❏ Uang mu : Rp${uangku},-
  ❏ XP : ${getLevelingXp(sender)}/${reqXp}
  ❏ Level : ${getLevelingLevel(sender)}
  ❏ Pangkat : ${role}
  ❏ User register : ${_registered.length}

◪ *ABOUT BOT*
  ❏ Name : ${client.user.name}
  ❏ Run: Termux
  ❏ Time : ${time} WIB
  ❏ Browser : ${client.browserDescription[1]}
  ❏ Server : ${client.browserDescription[0]}
  ❏ Version : ${client.browserDescription[2]}
  ❏ Os Version: ${client.user.phone.os_version}
  ❏ Versi wa : ${client.user.phone.wa_version}
  ❏ Handphone : ${client.user.phone.device_manufacturer}
  ❏ Device Model: ${client.user.phone.device_model}
  ❏ MNC : ${client.user.phone.mnc}
  ❏ MCC : ${client.user.phone.mcc}
  ❏ Speed : ${process.uptime()}
  ❏ Hostname : ${os.hostname()}
  ❏ Platform : ${os.platform()}
  ❏ Baterai : ${baterai.baterai}% 🔋
  ❏ Status Charge : ${baterai.cas === 'true' ? 'Ya ⚡' : 'Tidak ❌'}
  ❏ Total Hit : ${pepolu}
  ❏ Total Hit Today : ${hit_today.length}
 
◪ *ABOUT MENU*
➽❏ ${prefix}snk
➽❏ ${prefix}lpr
➽❏ ${prefix}owner
➽❏ ${prefix}author
➽❏ ${prefix}request
➽❏ ${prefix}blocklist
➽❏ ${prefix}ping
➽❏ ${prefix}donasi
➽❏ ${prefix}buypremium
➽❏ ${prefix}hargaprem
➽❏ ${prefix}gcainebot

◪ *MENU*
➽❏ ${prefix}menufun
➽❏ ${prefix}menupict
➽❏ ${prefix}menugrup
➽❏ ${prefix}menuowner
➽❏ ${prefix}menumaker
➽❏ ${prefix}menustorage

 ◪ *OTHER FITUR*
➽❏ ${prefix}ssweb [link]
➽❏ ${prefix}halah [teks]
➽❏ ${prefix}hilih [teks]
➽❏ ${prefix}huluh [teks]
➽❏ ${prefix}heleh [teks]
➽❏ ${prefix}holoh [teks]
➽❏ ${prefix}say [teks]
➽❏ ${prefix}wiki [teks]
➽❏ ${prefix}kbbi [teks]
➽❏ ${prefix}map [teks]
➽❏ ${prefix}kalkulator [teks]
➽❏ ${prefix}lirik [teks]
➽❏ ${prefix}brainly [teks]
➽❏ ${prefix}chord [teks]
➽❏ ${prefix}kata [text]
➽❏ ${prefix}katacinta
➽❏ ${prefix}katabijak
➽❏ ${prefix}sms
➽❏ ${prefix}kodepos
➽❏ ${prefix}cerpen
➽❏ ${prefix}namaninja
➽❏ ${prefix}tinyurl [link]
➽❏ ${prefix}faktaunik
➽❏ ${prefix}tahugasih
➽❏ ${prefix}pesankosong
➽❏ ${prefix}pantun
➽❏ ${prefix}semoji 🙂
➽❏ ${prefix}artinama [teks]
 
◪ *GAME*
➽❏ ${prefix}suit
➽❏ ${prefix}slot
➽❏ ${prefix}ttt X/O
➽❏ ${prefix}delttt
➽❏ ${prefix}tebakgambar

◪ *APK*
➽❏ ${prefix}moddroid [teks]
➽❏ ${prefix}apkpure [teks] 
➽❏ ${prefix}happymod [teks] 

◪ *FIND TARGET*
➽❏ ${prefix}anonchat
➽❏ ${prefix}mutual [premium]
➽❏ ${prefix}next [premium]

◪ *MEME*
➽❏ ${prefix}meme 
➽❏ ${prefix}memeindo

◪ *Stalking*
➽❏ ${prefix}igstalk 
➽❏ ${prefix}tiktokstalk 
➽❏ ${prefix}githubstalk username

◪ *ISLAM*
➽❏ ${prefix}quran
➽❏ ${prefix}findnabi
➽❏ ${prefix}niatshalat
➽❏ ${prefix}asmaulhusna

◪ *SPAM*
➽❏ ${prefix}spam5 [premium]
➽❏ ${prefix}spam10 [premium]
➽❏ ${prefix}spamcall 8xxx[premium]

◪ *LIMIT & UANG & LB*
➽❏ ${prefix}limit
➽❏ ${prefix}dompet
➽❏ ${prefix}buylimit [nominal]
➽❏ ${prefix}buypremiumlimit [nominal]
➽❏ ${prefix}requestlimit
➽❏ ${prefix}transfer [nomor | nominal]
➽❏ ${prefix}leaderboard

◪ *SOUND*
➽❏ ${prefix}sholawat
➽❏ ${prefix}itiraf
➽❏ ${prefix}alittlelove
➽❏ ${prefix}soundplaydate [premium]
➽❏ ${prefix}soundbakahentai [premium]
➽❏ ${prefix}sayonichan [premium]
➽❏ ${prefix}gtts [code bahasa][premium]

◪ *TOOLS*
➽❏ ${prefix}tourl
➽❏ ${prefix}toimg
➽❏ ${prefix}tomp3 [premium]
➽❏ ${prefix}tomp4 [premium]
➽❏ ${prefix}bass
➽❏ ${prefix}slow
➽❏ ${prefix}gemok
➽❏ ${prefix}robot
➽❏ ${prefix}tupai

◪ *KERANG AJAIB*
➽❏ ${prefix}gantengcek [teks]
➽❏ ${prefix}cantikcek [teks]
➽❏ ${prefix}sangecek [teks]
➽❏ ${prefix}gaycek [teks]
➽❏ ${prefix}lesbicek [teks]
➽❏ ${prefix}watak [teks]
➽❏ ${prefix}hobby [teks]
➽❏ ${prefix}apakah [teks]
➽❏ ${prefix}kapankah [teks]
➽❏ ${prefix}bisakah [teks]
➽❏ ${prefix}bagaimanakah [teks]
➽❏ ${prefix}rate [teks]

◪ *18+ premium*
➽❏ ${prefix}sodok [premium]
➽❏ ${prefix}pussy [premium]
➽❏ ${prefix}boobs [premium]
➽❏ ${prefix}hentai [premium]
➽❏ ${prefix}hentai2 [premium]
➽❏ ${prefix}blowjob [premium]
➽❏ ${prefix}blowjob2 [premium]

◪ *DOWNLOADER*
➽❏ ${prefix}pinterest [teks]
➽❏ ${prefix}joox [teks][premium]
➽❏ ${prefix}ytmp3 [link][premium]
➽❏ ${prefix}ytmp4 [link][premium]
➽❏ ${prefix}igmp4 [link][premium]
➽❏ ${prefix}play [teks][premium]
➽❏ ${prefix}tiktokdl [teks][premium] ❌
 
◪ *INFORMATION*
➽❏ ${prefix}bahasa
➽❏ ${prefix}kodenegara
➽❏ ${prefix}info
➽❏ ${prefix}infobot
➽❏ ${prefix}infodev
➽❏ ${prefix}infoadmin
➽❏ ${prefix}infogempa
➽❏ ${prefix}infonomor 
➽❏ ${prefix}infocuaca
➽❏ ${prefix}covid

◪ *QUOTES*
➽❏ ${prefix}quotes
➽❏ ${prefix}quoteskehidupan
➽❏ ${prefix}quotesislami
➽❏ ${prefix}quotesnasehat
➽❏ ${prefix}quotescinta
➽❏ ${prefix}quotesmotivasi
➽❏ ${prefix}animequotes
➽❏ ${prefix}twichquotes

◪ *OTHER*
➽❏ ${prefix}profile
➽❏ ${prefix}readmore text| percobaan
➽❏ ${prefix}wame
➽❏ ${prefix}ocr
➽❏ ${prefix}del [premium]
➽❏ ${prefix}qrcode
➽❏ ${prefix}neonime
➽❏ ${prefix}getspremium
➽❏ ${prefix}wait [premium]
➽❏ ${prefix}join [linkgrup][premium]
➽❏ ${prefix}kontak 6289654360447|Namakontak
➽❏ ${prefix}pesan +6289654360447|text [premium]
◪ *POWERED BY AINEBOT*
`
}
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`	

*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit : +3
  ❏ Pangkat : ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/62895330379186\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/on atau 0/off*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.left = ( mdata , mim) => {
	return`Sampai jumpa @${mim.split('@')[0]} 👋`
}

exports.welcome = ( mdata , num ) => {
	return`Hallo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nSemoga betah ya di sini 😅\nJangan lupa intro @${num.split('@')[0]} 😅`
}

exports.promote = ( mdata , cum, pushname, waktunow) => {
	return`*PROMOTE TERDETEKSI*
			
*Nomor* = ${cum.replace('@s.whatsapp.net', '')}
*User* = @${cum.split('@')[0]}
*Group* = ${mdata.subject}
`
}
exports.demote = ( mdata , cam, pushname, waktunow ) => {
	return`*DEMOTE TERDETEKSI*
			
*Nomor* = ${cam.replace('@s.whatsapp.net', '')}
*User* = @${cam.split('@')[0]}
*Group* = ${mdata.subject}
`
}
