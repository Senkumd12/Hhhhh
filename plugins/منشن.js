let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*♚~الرساله:* ${pesan}`
let teks = `*⚜️𝑺.𝑃.𝐷–𝑀𝐸𝑁𝑇𝐼𝛩𝑁⚜️* \n\n ${oi}\n\n*🗡┇الجروب :⇣*\n`
for (let mem of participants) {
teks += `*تفاعل ↫* @${mem.id.split('@')[0]}\n`}
teks += `*𝐿𝐴𝛩-𝐵𝛩𝑇*\n\n*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️

*⌞⚜️┊𝐒𝐩𝐞𝐞𝐝 ス 𝐊.𝐠.𝐦┊⚜️⌝* *`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
