/*CMD
  command: profile.js
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

// Command: profile.js
const tg = window.Telegram.WebApp
tg.ready()
tg.expand()
tg.requestFullscreen()
tg.enableVerticalSwipes()

// Match Telegram dark header/bar
tg.setHeaderColor("#1c1c1c")
tg.setBackgroundColor("#1e1e1e")
tg.setBottomBarColor("#000000")

// Theme toggling
const root = document.documentElement
const toggle = document.getElementById("themeToggle")
let theme = localStorage.getItem("theme") || "dark"
applyTheme(theme)

toggle.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark"
  localStorage.setItem("theme", theme)
  toggle.classList.add("animate")
  toggle.addEventListener(
    "animationend",
    () => toggle.classList.remove("animate"),
    { once: true }
  )
  applyTheme(theme)
})

function applyTheme(name) {
  if (name === "light") {
    root.classList.add("light-theme")
    toggle.textContent = "☀️"
  } else {
    root.classList.remove("light-theme")
    toggle.textContent = "🌙"
  }
}

// Populate user info
const u = tg.initDataUnsafe.user || {}
document.getElementById("userAvatar").src = u.photo_url || ""
document.getElementById("userName").textContent =
  [u.first_name, u.last_name].filter(Boolean).join(" ") || "Guest"

if (u.is_premium) {
  const p = document.getElementById("userPremium")
  p.classList.remove("hidden")
  p.textContent = "💸 Premium"
}

document.getElementById("userHandle").textContent = u.username
  ? "@" + u.username
  : "—"
document.getElementById("userId").textContent = u.id || "—"

const langMap = {
  en: "🇬🇧 English",
  ru: "🇷🇺 Русский",
  hi: "🇮🇳 हिन्दी",
  es: "🇪🇸 Español",
  de: "🇩🇪 Deutsch"
}
const code = (u.language_code || "").split("-")[0]
document.getElementById("userLanguage").textContent =
  langMap[code] || code.toUpperCase() || "—"

// Lottie avatar glow
lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets2.lottiefiles.com/packages/lf20_jv4xehxh.json"
})

// Copy-to-clipboard + tooltip
document.querySelectorAll(".copyable").forEach(el => {
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(el.innerText.trim())
    const tt = document.createElement("div")
    tt.className = "tooltip"
    tt.textContent = "Copied!"
    el.append(tt)
    requestAnimationFrame(() => (tt.style.opacity = "1"))
    setTimeout(() => {
      tt.style.opacity = "0"
      setTimeout(() => tt.remove(), 300)
    }, 1200)
  })
  el.addEventListener("mousedown", e => e.preventDefault())
})

// Progress-bar loader
let prog = 0
const bar = document.getElementById("progressBar")
const txt = document.getElementById("progressText")
const interval = setInterval(() => {
  prog++
  bar.style.width = prog + "%"
  txt.textContent = prog + "%"
  if (prog >= 100) {
    clearInterval(interval)
    document.getElementById("loadingScreen").style.display = "none"
    document.querySelector(".container").style.display = "block"
    tg.MainButton.setText("✦ Close Profile ✦")
      .setParams({ has_shine_effect: true })
      .show()
      .onClick(() => tg.close())
  }
}, 20)

