const {
    WAConnection,
	MessageType,
	Mimetype
} = require("@adiwajshing/baileys")
const fetch = require('node-fetch');
const axios = require("axios")
const fs = require("fs-extra")
const qrcodes = require('qrcode');
const moment = require("moment-timezone")
moment.tz.setDefault("Asia/Jakarta").locale("id")

const { getBuffer, fetchJson, sleep } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')

let fakeimage = fs.readFileSync("./media/wpmobile.png")
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let { prefix, owner, ownerNumber, ownerName, botName } = setting

 module.exports = nino = async (nino, m) => {
	try {
        if (!m.hasNewMessage) return
        mek = JSON.parse(JSON.stringify(m)).messages[0]
		if (!mek.message || mek.key && mek.key.remoteJid == 'status@broadcast') return
		let isBaileys = mek.key.id.startsWith('3EB0') && mek.key.id.length === 12
		if (isBaileys) return
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
		const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        body = mek.message.conversation || mek.message[type].caption || mek.message[type].text || (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId || (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId || ''
		const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
        const q = args.join(' ')
        const botNumber = nino.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? botNumber : isGroup ? mek.participant : from
        const pushname = mek.key.fromMe ? nino.user.name : nino.contacts[sender].notify || nino.contacts[sender].vname || nino.contacts[sender].name || sender.split('@')[0]
        const isOwner = mek.key.fromMe ? true : ownerNumber.includes(sender)
      
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

      
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        const reply = (teks) => {
	      nino.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           nino.sendMessage(hehe, teks, text)
        }
        const textImg = (teks) => {
           return nino.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       nino.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']

       if (!isGroup && budy.match(/^[a-z]/)) {
       reply("Just send me a doujin code");
}
      if (!isGroup && budy.match(/^[A-Z]/)) {
       reply("Just send me a doujin code");
}
       // Nhentai
        if (!isGroup && budy.match(/^[0-9]/)) {
	try {
		res = await axios.get("http://lolhuman.herokuapp.com/api/nhentai/" + budy + "?apikey=genbotkey")
		reply("Please wait, data is being processed");
		data = res.data.result
		caption = `${data.title_romaji}\n`
		caption += `${data.title_native}\n`
		caption += `Language : ${data.info.languages}\n`
		caption += `Artists : ${data.info.artists}\n`
		caption += `Tag : ${data.info.tags.join(", ")}\n`
		caption += `Category : ${data.info.categories}\n`
		caption += `Pages : ${data.info.pages}\n`
		buttons = [{buttonId: `${prefix}buttons1 ${budy}`,buttonText:{displayText: `Download PDF`},type:1},{buttonId:`${prefix}buttons2 ${budy}`,buttonText:{displayText:'Read Online'},type:1}]
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.image[0]))
        imageMsg = ( await nino.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
        buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
        contentText:`${caption}`,buttons,headerType:4}
        prep = await nino.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
        nino.relayWAMessage(prep)
        fs.unlinkSync(`./${sender}.jpeg`)
	} catch (e) {
		console.log(color(e))
		reply('No Dōjinshi found')
	}
}

       
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
            switch(command){
        
        case 'start':
               if (isGroup) return reply(`Fitur Ini Hanya Bisa Gunakan di private saja!`)
               reply(`Selamat datang!\n\nSilahkan kirimkan kode nuklir di chat atau cari ${prefix}nhentaisearch`)
               break
        case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: `${prefix}sourcecode`,buttonText:{displayText: 'SC BOT'},type:1},{buttonId:`${prefix}infoig`,buttonText:{displayText:'INSTAGRAM'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Sungkan Chat Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await nino.prepareMessageFromContent(from,{buttonsMessage},{})
               nino.relayWAMessage(prep)
               break      
        case 'help':
               result =`Mau tanya apa ngab?`

               buttons = [{buttonId: `${prefix}buttons3`,buttonText:{displayText: 'Bagaimana cara download PDF?'},type:1},{buttonId:`${prefix}buttons4`,buttonText:{displayText:'Bagaimana cara mencari doujin?'},type:1}]

               buttonsMessage = {
               contentText: `${result}`,
               footerText: 'Made With By Nino ☕',
               buttons: buttons,
               headerType: 1
}

               prep = await nino.prepareMessageFromContent(from,{buttonsMessage},{})
               nino.relayWAMessage(prep)
               break
        case 'buttons1':
               if (isGroup) return 
               if (!q) return 
               reply(`Sending document...`)
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${setting.lolkey}`)
               ini_image = await getBuffer(get_result.result.image[0])
               data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=${setting.lolkey}`)
               pdf = await getBuffer(data.result)
               nino.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.result.title_romaji}.pdf`, thumbnail: ini_image })
               break
        case 'buttons2':
               if (isGroup) return 
               if (!q) return
               data = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${setting.lolkey}`)
               teks = `Baca Disini Gan ${data.result.read}`
               reply(teks)
               break
        case 'buttons3':
               reply(`- Klik download PDF \n- Tunggu sebentar, PDF nya lagi diproses`)
               break
        case 'buttons4':
               reply(`- Klik /nhentaisearch \n- Mulai mengetik nama karakter, atau judul anime yang kamu cari`)
               break
        case 'nhentaisearch':
               if (isGroup) return
               if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${setting.lolkey}&query=${q}`)
               get_result = get_result.result
               ini_txt = "Result : \n"
               for (var x of get_result) {
               ini_txt += `Id : ${x.id}\n`
               ini_txt += `Title English : ${x.title_english}\n`
               ini_txt += `Title Japanese : ${x.title_japanese}\n`
               ini_txt += `Native : ${x.title_native}\n`
               ini_txt += `Upload : ${x.date_upload}\n`
               ini_txt += `Page : ${x.page}\n`
               ini_txt += `Favourite : ${x.favourite}\n\n`
  }
               reply(ini_txt)
               break
        case 'infoig':
               if (isGroup) return
               teks = `Jangan Lupa Follow Ig Owner Ya : https://www.instagram.com/nino.chan26/`
               nino.sendMessage(from, teks, text, { quoted : mek })
               break
         case 'sourcecode': 
         case 'sc': 
         case 'src':
                if (isGroup) return
                textImg(`Bot ini menggunakan sc : https://github.com/Nino-chan02/nHentaiBot`)
                break
         case 'jadibot':
                if (!isOwner) return
                jadibot(reply,nino,from)
                break
         case 'stopjadibot':
                stopjadibot(reply)
                break
         case 'listbot':
                let text = '「 *LIST JADIBOT* 」\n\n'
                for(let i of listjadibot) {
                text += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
               reply(text)
               break
default:
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



