/*CMD
  command: profile.html
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

<!-- Command: profile.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Your Profile</title>
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.2/lottie.min.js"></script>
  <link rel="stylesheet" href="<% options.CSSFile %>"/>
</head>
<body>
  <!-- Loading Screen -->
  <div id="loadingScreen">
    <div class="progress-wrapper">
      <div id="progressBar" class="progress-bar"></div>
    </div>
    <div id="progressText" class="progress-text">0%</div>
  </div>

  <!-- Profile Container -->
  <div class="container" style="display: none;">
    <div class="profile-card">
      <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">🌙</button>
      <div class="profile-header">
        <div class="avatar-wrapper">
          <div id="lottie" class="lottie-glow"></div>
          <img
            id="userAvatar"
            class="avatar"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Avatar"
          />
        </div>
        <h2 id="userName">Guest</h2>
        <span id="userPremium" class="tag premium hidden">
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path d="M12 2l1.09 3.32L16 6l-2.18 1.67L15 11l-3-2-3 2 1.18-3.33L8 6l2.91-.68L12 2z"/>
          </svg>
          Premium
        </span>
        <span id="userLanguage" class="tag language"></span>
      </div>
      <div class="profile-body">
        <div class="info copyable">
          <strong>ID:</strong> <span id="userId">—</span>
        </div>
        <div class="info copyable">
          <strong>Username:</strong> <span id="userHandle">—</span>
        </div>
      </div>
    </div>
  </div>

  <script src="<% options.JSFile %>"></script>
</body>
</html>
