//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^روبين|روب$/i.test(m.text)) { 
     responses = [ 
 '*اخخخ يا روبين اموت فيك 🤭🤍🫂*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام منور/ه يا مز/ه*',  
     ];
   }else if (/^بروس$/i.test(m.text)) { 
     responses = [ 
'*عيون بروس امرني بس 🤭🤍*'
     ]; 
 }else if (/^شحالك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير دامك بخير يا غالي انت بشرني عنك*'
     ]; 
   }else if (/^حبيبي|اموت فيك|يا حب$/i.test(m.text)) { 
     responses = [ 
'*انا الي احبك يا عيوني انت 😉🤍*'
   ]; 
   }else if (/^بوت|يا بوت$/i.test(m.text)) { 
     responses = [ 
'*عيون البوت و بروس معاه 🤭*',
]; 
   }else if (/^تكرهني$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك يا قلبي 😕🤍*',
     
     ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هلابك يا قلبي|هلا هلا منور/ه*',  

     ]; 
}else if (/^احبك|بحبك/i.test(m.text)) { 
     responses = [ 
       '*انا اكثر يا قلبي 🤍🫂*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^تست$/i.test(m.text)) { 
     responses = [ 
'*تست تست*'
     ]; 
     }else if (/^عامل ايه|عامل اي|كيفك$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله انت بشرني عنك',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       'اموت فيك',  

     ];
     }else if (/^بروس واين$/i.test(m.text)) { 
     responses = [ 
       'سيدي بروس واين 🦇🙏🏻',  

     ];
     }else if (/^بوتت$/i.test(m.text)) { 
     responses = [ 
       '*امر تدلل يا قلبي ارسل المهام وابشر بالخير 🤭😉*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*هلابك يا حب*',  

     ]; 
     }else if (/^مساء|مساء الخير$/i.test(m.text)) { 
     responses = [ 
       '*مساء الخير🌺🌚*',  

     ];
     }else if (/^صباح|صباح الخير$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^كاتومن$/i.test(m.text)) { 
     responses = [ 
       '*زوجه بروس واين المستقبلية 🤭🦇*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
