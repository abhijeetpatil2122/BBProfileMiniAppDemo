/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

//Command: /start
var profileUrl = WebApp.getUrl({ command: "profile" })

Api.sendMessage({
  text: "👤 Click below to view your profile:",
  reply_markup: {
    inline_keyboard: [
      [{ text: "Open Profile Page", web_app: { url: profileUrl } }]
    ]
  }
})
//Get WebApp url
//Bot.inspect(profileUrl)

