const hoursSpan = document.querySelector('#clock-hours');
const minutesSpan = document.querySelector('#clock-minutes');
const secondsSpan = document.querySelector('#clock-seconds');
const settings = document.querySelector('#settings');
const settingsDialog = document.querySelector('#settings-dialog');

const darkMode = document.querySelector('#dark-mode');
const showSeconds = document.querySelector('#show-seconds');
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

//#region Theming

if (localStorage.getItem('darkMode') === 'false') {
  darkMode.checked = false;
  setDarkModeOff();
} else {
  darkMode.checked = true;
  setDarkModeOn();
}

darkMode.addEventListener('change', () => {
  if (darkMode.checked) {
    localStorage.setItem('darkMode', true);
    setDarkModeOn();
  } else {
    localStorage.setItem('darkMode', false);
    setDarkModeOff();
  }
});

function setDarkModeOn() {
  document.body.style.backgroundColor = 'hsl(0, 0%, 5%)';
  document.body.style.color = 'hsl(0, 0%, 80%)';
}

function setDarkModeOff() {
  document.body.style.backgroundColor = 'hsl(0, 0%, 95%)';
  document.body.style.color = 'hsl(0, 0%, 20%)';
}

//#endregion

//#region Show seconds

if (localStorage.getItem('showSeconds') === 'false') {
  showSeconds.checked = false;
  secondsSpan.style.display = 'none';
} else {
  showSeconds.checked = true;
  secondsSpan.style.display = '';
}

showSeconds.addEventListener('change', () => {
  if (showSeconds.checked) {
    localStorage.setItem('showSeconds', true);
    secondsSpan.style.display = '';
  } else {
    localStorage.setItem('showSeconds', false);
    secondsSpan.style.display = 'none';
  }
});

//#endregion
