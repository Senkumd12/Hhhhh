const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '*سمعاً وطاعة سيدي بروس!! (≧ω≦)ゞ*');
  await conn.groupLeave(id);
};
handler.command = /^(شادو)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
