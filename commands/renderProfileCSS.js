/*CMD
  command: renderProfileCSS
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

// Command: renderProfileCSS
WebApp.render({
  template: "profile.css",
  mime_type: "text/css"
})

