//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^روبين$/i.test(m.text)) { 
     responses = [ 
 '*اخخخ يا روبين اموت فيك 🤭🤍🫂*'  
     ]; 
} else if (/^سلام عليكم|السلام عليكم ورحمه الله وبركاته|السلام عليكم$/i.test(m.text)) { 
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
'*امر تدلل😞🎩*',
]; 
   }else if (/^تكرهني|تكرهني؟ $/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك يا قلبي 😕🤍*',
     
     ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هلا هلا نورت/ي*',  

     ]; 
}else if (/^احبك|بحبك/i.test(m.text)) { 
     responses = [ 
       '*انا اكثر يا قلبي / يا أوّل قلب أُحبّه وآخر قلب أنا أهواه 🤍🫂*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^تست$/i.test(m.text)) { 
     responses = [ 
'*تست تست*'
     ]; 
     }else if (/^لوفي|زورو$/i.test(m.text)) { 
     responses = [ 
       ' ون بيس عمك 🤫🤫',  

     ];
     }else if (/^تحبني|تحبني؟ $/i.test(m.text)) { 
     responses = [ 
       'اموت فيك',  

     ];
     }else if (/^بروس واين$/i.test(m.text)) { 
     responses = [ 
       'سيدي بروس واين 🦇🙏🏻',  

     ];
     }else if (/^اوامر|الاوامر$/i.test(m.text)) { 
     responses = [ 
       '*تبغا الاوامر اكتب.المهام*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*هلابك يا حب*',  

     ];
     }else if (/^صلو على النبي$/i.test(m.text)) { 
     responses = [ 
       '*اللهم صل وسلم على نبينا محمد🤍*',  
  
     ]; 
     }else if (/^مساء|مساء الخير$/i.test(m.text)) { 
     responses = [ 
       '*مساء الخير🌺🌚*',  

     ];
     }else if (/^صباح|صباح الخير$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^ديكو$/i.test(m.text)) { 
     responses = [ 
       '*لا لا قول.ديكو*',  
     ];
            }else if (/^غزل$/i.test(m.text)) { 
     responses = [ 
       '*اهوجس فيك أنا داري انك ما دريت عني 😞💔*',  
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
