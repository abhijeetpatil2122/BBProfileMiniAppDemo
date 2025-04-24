/*CMD
  command: renderProfileJS
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

// Command: renderProfileJS
WebApp.render({
  template: "profile.js",
  mime_type: "application/javascript"
})

