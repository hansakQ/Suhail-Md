const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_37_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNixcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNCxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibkhLTjNza0gwcmZtNEUwaGl0VTUxV1hvQjZ0bnRtNzA1ZFBBMk5VVGhWVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4MTIyNjE0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjBBNEVERjczNEYzNDBBMjI4QzU5QzFCQTc2RTNENDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDYxMDUyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRaMDdyVjZKVGpPdEd1dG5kcVgxeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFjNDY1ZTQtMmY4ZC00MDQ5LTkyMzItZmQ0ZGY3ZjkzMjRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDE1MCxcbiAgICAgIDE1NCxcbiAgICAgIDU2LFxuICAgICAgMjQ4LFxuICAgICAgMzksXG4gICAgICAxNjAsXG4gICAgICAzMixcbiAgICAgIDEwMCxcbiAgICAgIDIwLFxuICAgICAgOTQsXG4gICAgICA1MixcbiAgICAgIDIxNyxcbiAgICAgIDkyLFxuICAgICAgMTQyLFxuICAgICAgOCxcbiAgICAgIDIxMCxcbiAgICAgIDE1NSxcbiAgICAgIDE2NSxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDE0MyxcbiAgICAgIDE0NCxcbiAgICAgIDIxOCxcbiAgICAgIDIzMSxcbiAgICAgIDIyMCxcbiAgICAgIDIwNyxcbiAgICAgIDExOSxcbiAgICAgIDg1LFxuICAgICAgMTEzLFxuICAgICAgMzksXG4gICAgICAyMzQsXG4gICAgICAyMTQsXG4gICAgICA3NCxcbiAgICAgIDIxNixcbiAgICAgIDIyOSxcbiAgICAgIDEzNCxcbiAgICAgIDE5MCxcbiAgICAgIDQsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjkzOE5ZMldFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4MTIyNjE0NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSICAg8J2QivCdkIjwnZCN8J2QhlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbvCdkJXwnZCI8J2QjPCdkJQgIPCdkIHwnZCB8J2QhyBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wnZCE8J2QhPCdkJEgIPCdkIvwnZCI8J2QjPCdkIjwnZCTXCIsXG4gICAgXCJsaWRcIjogXCIxNTgxNjcwMzYxMDg4MzE6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLWHJ5ZkVHRUxiUzdiUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVQY2JjSjlkZEk3UHZLdmtDYzF6MU0xREtQT2FCd3lGa25ZSmZQaklRVk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT2pIVmowWjIycDhtanBmUFJOZGNqMkxoL3NITWl0OW9QRDJXUXpXNHBHT2Jhc0VLbDQ2UUF2WEV4bXlOYjYvdlpGQjBpd1FRZUNabS92bHEwWTUyQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQUFGWU91Q1NobHd4WEN0djdoemZlTCtTVlRmTzE4ZWY2ZlZac1VvRmtQdVdNQmYwTW8xU1NKZWhDeHY5YTZ3Qk1zcE5Ma0I0Mng1UGllbTFiUHR5REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODEyMjYxNDQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NjEwNTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLNXJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs1ci5qc29uIjogIntcImtleURhdGFcIjpcIm9xQTBUeXNBNXVGMDNYRVE1N25FT1Y4RzFYbUE5WFN3WGJiTzlKVWpVeTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0ODgwMDY3NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NjEwNTEzMDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "V ɪ  m u  🐼💗🖇️",
  ownername:process.env.OWNER_NAME|| "V ɪ  m u  🐼💗🖇️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
