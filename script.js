const hoursSpan = document.querySelector('#clock-hours');
const minutesSpan = document.querySelector('#clock-minutes');
const secondsSpan = document.querySelector('#clock-seconds');
const settings = document.querySelector('#settings');
const settingsDialog = document.querySelector('#settings-dialog');

// const darkMode = document.querySelector('#dark-mode');
// const showSeconds = document.querySelector('#show-seconds');
const settingsClose = document.querySelector('#settings-close');

settings.addEventListener('click', () => {
  settingsDialog.showModal();
});

settingsClose.addEventListener('click', () => {
  settingsDialog.close();
});

(function () {
  var currentTime = new Date();

  hoursSpan.innerHTML = currentTime.getHours().toString().padStart(2, '0');
  minutesSpan.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
  secondsSpan.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');

  var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/#');
  httpRequest.send(null);

  setTimeout(arguments.callee, 10);
})();
