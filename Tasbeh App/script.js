let count = 0;
let isDarkMode = false;

function incrementCount() {
     const circle = document.getElementById('circle');
     const countSpan = document.getElementById('count');
     const tapCount = document.getElementById('tapCount');
     const alertSound = document.getElementById('alertSound');

     count++;

     if (count === 100) {
          count = 0; // Reset count
     }

     // Update display
     countSpan.textContent = count;
     tapCount.textContent = count;

     // Update circle stroke (progress bar)
     const grayWidth = (count / 1000) * 360;

     circle.style.background = `conic-gradient(
                    #4A90E2 ${grayWidth}deg, 
                    #50E3C2 ${grayWidth}deg,
                    #50E3C2 360deg
               )`;

     if (count === 33 || count === 66 || count === 100) {
          alertSound.play();
          showAlert(`You have reached ${count} taps!`);
     }
}

function showAlert(message) {
     const alertBox = document.getElementById('alertBox');
     const overlay = document.getElementById('overlay');
     const alertMessage = document.getElementById('alertMessage');

     alertMessage.textContent = message;
     alertBox.style.display = 'block';
     overlay.style.display = 'block';
}

function closeAlert() {
     const alertBox = document.getElementById('alertBox');
     const overlay = document.getElementById('overlay');

     alertBox.style.display = 'none';
     overlay.style.display = 'none';
}

function toggleMode() {
     const body = document.body;
     const modeIcon = document.getElementById('mode-icon');
     isDarkMode = !isDarkMode;

     if (isDarkMode) {
          body.classList.add('dark-mode');
          modeIcon.setAttribute('name', 'moon-outline');
     } else {
          body.classList.remove('dark-mode');
          modeIcon.setAttribute('name', 'sunny-outline');
     }
}

function restart() {
     count = 0;
     document.getElementById('count').textContent = count;
     document.getElementById('tapCount').textContent = count;

     // Reset circle stroke (progress bar)
     const circle = document.getElementById('circle');
     circle.style.background = `conic-gradient(
          #4A90E2 0deg, 
          #50E3C2 0deg,
          #50E3C2 360deg
     )`;
}
