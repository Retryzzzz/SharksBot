import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn }) {
	if (!m.messageStubType || !m.isGroup)
	    return !0
	let type = {
            ejecutado: '@' + m.sender.split("@")[0],
	    messageStubType: m.messageStubType,
	    messageStubParameters: m.messageStubParameters,
	    type: WAMessageStubType[m.messageStubType]
	}
	await conn.sendMessage(m.chat, {text: JSON.parse(type, null, 1), mentions: [m.sender]})
	//await conn.reply(m.chat, JSON.stringify(type, null, 1))
}
