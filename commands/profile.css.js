/*CMD
  command: profile.css
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

/* Command: profile.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.hidden { display: none !important; }
* {
  transition: background-color 0.3s ease,
              color 0.3s ease,
              box-shadow 0.3s ease,
              transform 0.3s ease;
}

/* Theme variables */
:root {
  --bg: #1e1e1e;
  --card-bg: rgba(28,28,30,0.9);
  --text: #ffffff;
  --accent: #839ef0;
  --glow-color: rgba(46,140,255,0.5);
  --bg-dark: #1e1e1e;   /* loader always dark */
}
.light-theme {
  --bg: #f5f5f5;
  --card-bg: rgba(255,255,255,0.9);
  --text: #1e1e1e;
  --accent: #0077cc;
  --glow-color: rgba(0,119,204,0.5);
}

/* Base layout */
html, body {
  width: 100%; height: 100%; margin: 0;
  padding: env(safe-area-inset);
  font-family: 'Inter', sans-serif;
  background: linear-gradient(120deg, var(--bg), #2a2a2a);
  background-size: 200% 200%; animation: bgFlow 20s ease infinite;
  color: var(--text);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; position: relative;
}
@keyframes bgFlow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
body::after {
  content: '';
  position: fixed; inset: 0;
  background: url('https://cdn.jsdelivr.net/gh/joshbsmith/noiseTexture/NoiseTransparent10.png') repeat;
  opacity: 0.05; z-index: -1;
}

/* Loading Screen */
#loadingScreen {
  position: fixed; inset: 0;
  background: var(--bg-dark);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  z-index: 9999; color: #fff;
}
#loadingScreen .progress-wrapper {
  width: 70%; max-width: 300px; height: 8px;
  background: rgba(255,255,255,0.2);
  border-radius: 4px; overflow: hidden;
  margin-bottom: 8px;
}
#loadingScreen .progress-bar {
  width: 0%; height: 100%;
  background: var(--accent);
}
#loadingScreen .progress-text {
  font-size: 1rem; color: #fff !important;
}

/* Profile container */
.container {
  display: none;
  animation: fadeIn 0.8s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Profile card */
.profile-card {
  position: relative;
  backdrop-filter: blur(16px);
  background: var(--card-bg);
  border-radius: 24px;
  box-shadow: 0 0 20px var(--glow-color);
  width: 90%; max-width: 360px;
  padding: 24px; text-align: center;
  animation: popIn 0.6s ease, pulseCard 6s ease-in-out infinite alternate;
}
@keyframes popIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes pulseCard {
  from { box-shadow: 0 0 20px var(--glow-color); }
  to   { box-shadow: 0 0 30px var(--glow-color); }
}
.profile-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px var(--glow-color);
}

/* Theme toggle */
.theme-toggle {
  position: absolute; top: 16px; right: 16px;
  width: 36px; height: 36px;
  border: none; border-radius: 50%;
  background: var(--card-bg);
  box-shadow: 0 0 8px var(--glow-color);
  cursor: pointer; font-size: 1.2rem;
  display: flex; align-items: center; justify-content: center;
  outline: none;
}
.theme-toggle.animate {
  animation: rotateIcon 0.5s ease;
}
@keyframes rotateIcon {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Avatar + glow */
.avatar-wrapper {
  position: relative;
  width: 84px; height: 84px;
  margin: 0 auto 16px;
}
.avatar-wrapper::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent) 20%, transparent 70%);
  filter: blur(8px); opacity: 0.6;
  animation: glowRing 3s ease-in-out infinite alternate;
}
@keyframes glowRing {
  from { transform: scale(0.9); opacity: 0.6; }
  to   { transform: scale(1.1); opacity: 0.3; }
}
.avatar {
  width: 84px; height: 84px;
  border-radius: 50%;
  border: 3px solid var(--accent);
  object-fit: cover;
  animation: pulse 2s infinite ease-in-out;
}
@keyframes pulse {
  0%,100% { transform: scale(1); }
  50%     { transform: scale(1.05); }
}

/* Lottie glow */
.lottie-glow {
  position: absolute;
  width: 100px; height: 100px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

/* Header & tags */
.profile-header {
  display: flex; flex-direction: column; align-items: center;
}
h2 {
  margin: 12px 0 4px; font-size: 1.4rem; font-weight: 600;
  opacity: 0; animation: slideInLeft 0.6s forwards;
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
.tag {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 2px 10px; border-radius: 999px;
  font-size: 0.8rem; margin-top: 4px; opacity: 0;
  line-height: 1.4;
}
.tag.language {
  background: var(--accent); color: #fff;
  animation: slideInRight 0.6s forwards 0.3s;
}
.tag.premium {
  background: var(--accent); color: #fff;
  animation: fadeIn 0.5s forwards 0.4s;
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Profile body & copy tooltip */
.profile-body {
  margin-top: 20px; opacity: 0;
  animation: fadeIn 1s ease 0.5s forwards;
}
.info {
  display: flex; justify-content: space-between;
  margin: 8px 0; font-size: 0.95rem;
}
.info.copyable {
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.tooltip {
  position: absolute;
  bottom: 100%; left: 50%;
  transform: translateX(-50%);
  margin-bottom: 4px;
  background: rgba(0,0,0,0.7); color: #fff;
  padding: 4px 8px; border-radius: 4px;
  font-size: 0.75rem;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease; white-space: nowrap;
  z-index: 10;
}
.copyable:focus { outline: none; }
