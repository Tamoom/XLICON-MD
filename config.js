const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923249984913"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/taifurmalhi/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/1dea5961d58b713d50d9c.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUQyU25PaGFTT0k3cTJtekE4amUydGpKbnFzWFp3QlFINTRXaFBJS1QzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2VqdE5TY2N1UU8yWjF6T3QzV3J4VGpMRkZxWm9kUjNHWTdvRlNRK01oZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQ0VoNEM1SWpxZyt0cEFvdnh0bldEWXVHaTZramRNeHFueUhNQ2l3M1Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MDJ3dDY2R1JwL24yNWxncEZacUlxNXljdXllb2hib0k2bTh1M0Jxb2kwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIWFNEWm1sZ0ZRZ1JhVVk0eU9oSkJMamIxQnlVVWlscDNlaTNzQjgxMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik03OG5zcDB6ZWgvYTAvdkpZTzV2NHRtVlU4ZDB4bkd6dE1qUUFBQmpGaVE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRTF2R2RDbmFPaElnN21xcTNBWnJLUkdsSWxOV3JzRkRwaFA5VTNXckNSQVFVdnhQUEM2NHpGQ1lUNzA4QnB2RWVaZ25Nd0lHUzBLbWo5eDZERWREdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIwLCJhZHZTZWNyZXRLZXkiOiJTWFlScEROZEFqQlFYZUttektPbDNoV1NLMVNvcCtxc2Q1YVFiSlJVVHFFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2ZE1OcXd5aFJ6dTBOaG5IVm4zUUtBIiwicGhvbmVJZCI6ImNlOTBjN2ZhLTA0ZmMtNGExZC04YzMwLWVkNmY5OTlhYzIwMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlY3c2d3hrdlRGaDZZMnQ1SU1EVHN6YlRZdGM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE1K3hEOHFxbnZLNW94NWxtdFZXTXM4a1pSND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ055Rnd1MEdFT1RraUtzR0dBST0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV1I4UkgweEtOakFrSytOSXNlVWFNeXpPTDI0VUdYTUVNbFB2Tk1QcnNrOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoielArc0NYcTl5V1QwZkJWWEtYRG9EdnoxWThGcngyZFhjZ1JrR3o4aDFnWHBNN0FjSmZYakxoTkJJU2tyNGZUODFSUEdWOGZCSWdxT0lXcjlOQWc1Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikc5a3NYVXA2alQxbFd0d3paelhjT0M4eExRSUtlYVlaSHY4ZDhaWmNzQml1bkp5K1VzWC9JMW1EeW9lZGl6TE1yZXFKckdubWN5ODFldUJYV0FxZUNnPT0ifSwibWUiOnsiaWQiOiI5MjMyNDk5ODQ5MTM6M0BzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNDk5ODQ5MTM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWa2ZFUjlNU2pZd0pDdmpTTEhsR2pNc3ppOXVGQmx6QkRKVDd6VEQ2N0pQIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAwOTM0MjQ2fQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '𝒯𝒶𝒾𝒻𝓊𝓇',
  packname:  process.env.PACK_NAME || '💜👌',
   
  botname:   process.env.BOT_NAME === undefined ? "TAIFUR-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝐓𝐚𝐢𝐟𝐮𝐫' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
