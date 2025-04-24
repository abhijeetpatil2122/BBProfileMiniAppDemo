/*CMD
  command: profile
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

// Command: profile
var CSSFile = WebApp.getUrl({ command: "renderProfileCSS" })
var JSFile = WebApp.getUrl({ command: "renderProfileJS" })

WebApp.render({
  template: "profile.html",
  options: {
    CSSFile: CSSFile,
    JSFile: JSFile
  }
})

