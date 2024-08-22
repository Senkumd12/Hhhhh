import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'
const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/2a7bf4ee1980dc10aec4e.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
     
let str = `*⌬∙ • ──╾⊱﹝﷽﹞⊰╼── • ∙⌬*

*⌬∙ • ──╾⊱﹝⛩️﹞⊰╼── • ∙⌬*
*❮ ◈┇قائمة اوامر┇𝐷𝐸𝐶𝛩◈❯*
*❮ ◈┇امر تدلل يا↜ ${taguser}  ❯*
*⌬∙ • ──╾⊱﹝⛩️﹞⊰╼── • ∙⌬*
*⛩️𝐷𝐸𝐶𝛩_𝐵𝛩𝑇⛩️*
*⌬∙ • ──╾⊱﹝⛩️﹞⊰╼── • ∙⌬*
*「قـســم╎🏮╎القـروبــات」*

*◞🏮◜╎.طرد 』*
*◞🏮◜╎.ابلاغ 』*
*◞🏮◜╎.ترقية 』*
*◞🏮◜╎.اعفاء 』*
*◞🏮◜╎.حذف 』*
*◞🏮◜╎.منشن 』*
*◞🏮◜╎.مخفي 』*
*◞🏮◜╎.المشرفين 』*
*◞🏮◜╎.تدوير 』*
*◞🏮◜╎.جروب قفل 』*
*◞🏮◜╎.جروب فتح 』*
*◞🏮◜╎.توب 』*
*◞🏮◜╎.لفل 』*
*◞🏮◜╎.انمي 』*
*◞🏮◜╎.تسجيل 』*
*◞🏮◜╎.رونالدو 』*
*◞🏮◜╎.ميسي 』*
*◞🏮◜╎.يومي 』*
*◞🏮◜╎.هجوم 』*
*⌬∙ • ──╾⊱﹝⛩️﹞⊰╼── • ∙⌬*
*「قـسـم╎🕋╎الـديــن」*

*◞🕋◜╎.الله 』*
*◞🕋◜╎.حديث 』*
*◞🕋◜╎.ايات 』*
*◞🕋◜╎.اذكار المساء 』*
*◞🕋◜╎.اذكار الصباح 』*
*◞🕋◜╎.أية_الكرسي 』*
*◞🕋◜╎.أية_الإخلاص 』*
*◞🕋◜╎.نصيحه 』*
*◞🕋◜╎.فيديو_قران 』*
*◞🕋◜╎.الصلاة 』*
*⌬∙ • ──╾⊱﹝⛩️﹞⊰╼── • ∙⌬*
*「قـسـم╎🎮╎التـرفـيـه」*

*◞🎮◜╎.اكس او 』*
*◞🎮◜╎.كت 』*
*◞🎮◜╎.ذكاء 』*
*◞🎮◜╎.غباء 』*
*◞🎮◜╎.جمال 』*
*◞🎮◜╎.الحب 』*
*◞🎮◜╎.لو 』*
*◞🎮◜╎.هل 』*
*◞🎮◜╎.ترجمه 』*
*◞🎮◜╎.اديت-سيارات 』*
*◞🎮◜╎.اديت 』*
*◞🎮◜╎.اديت2 』*
*◞🎮◜╎.زواج 』*
*◞🎮◜╎.طلاق 』*
*◞🎮◜╎.حروف 』*
*◞🎮◜╎.علم 』*
*◞🎮◜╎.تاج 』*
*◞🎮◜╎.حكمه 』*
*◞🎮◜╎.ميمز 』*
*◞🎮◜╎.سؤال 』*
*◞🎮◜╎.قلب 』*
*◞🎮◜╎.احزر 』*
*◞🎮◜╎.عين 』*
*⌬∙ • ──╾⊱﹝⛩️﹞⊰╼── • ∙⌬*
*「قـسـم╎📲╎التـنـزيـلات」*
*◞📲◜╎.ويكيبيديا 』*
*◞📲◜╎.شغل 』*
*◞📲◜╎.Play 』*
*◞📲◜╎.Play2 』*
*◞📲◜╎.اسم_الاغنية 』*
*◞📲◜╎.صوره 』*
*◞📲◜╎.خلفيات 』*
*◞📲◜╎.تطبيق 』*
*◞📲◜╎.بحث 』*
*◞📲◜╎.بين』*
*⌬∙ • ──╾⊱﹝⛩️﹞⊰╼── • ∙⌬*
*「قـسـم╎🌀╎التـحـويـلات」*

*◞🌀◜╎.ملصق 』*
*◞🌀◜╎.سرقة 』*
*◞🌀◜╎.تليجراف 』*
*◞🌀◜╎.باركود 』*
*◞🌀◜╎.تصميم 』*
*◞🌀◜╎.زخرفه 』*
*◞🌀◜╎.خط 』*
*⌬∙ • ──╾⊱﹝⛩️﹞⊰╼── • ∙⌬*
*⛩️𝐷𝐸𝐶𝛩_𝐵𝛩𝑇⛩️*

*˼‏◈┋تـوقـيـع ⇆ ˼‏📜˹ ↯*
*〔مـمـلـكة ┊﹝⛩️﹞┊ديـنـشـو〕*
*⌬┣━ ╼╾ •✥┋﹝⛩️﹞┋✥• ╼╾ ━┫⌬*    

`.trim();

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|الأوامر|أوامر)$/i;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

export default handler;
