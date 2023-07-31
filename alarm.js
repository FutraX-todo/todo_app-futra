let alarmInterval;
let audio; // Declare audio as a global variable

function setAlarm() {
  const alarmTimeInput = document.getElementById('alarmTime');
  const alarmTime = alarmTimeInput.value;
  const now = new Date();
  const alarm = new Date(now.toDateString() + ' ' + alarmTime);

  if (alarm <= now) {
    alert('Please set a future time for the alarm.');
    return;
  }

  const timeUntilAlarm = alarm - now;

  alarmInterval = setTimeout(() => {
    playAlarm();
  }, timeUntilAlarm);

  alarmTimeInput.disabled = true;
  document.getElementById('stopButton').disabled = false;
}

function stopAlarm() {
  clearTimeout(alarmInterval);
  document.getElementById('alarmTime').disabled = false;
  document.getElementById('stopButton').disabled = true;
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  document.getElementById('stopButton').style.display = 'none';
}

function playAlarm() {
  audio = new Audio('./alarm1.mp3');
  audio.loop = true;
  audio.play();
  document.getElementById('stopButton').style.display = 'inline';
}
