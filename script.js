const hoursSpan = document.querySelector('#clock-hours');
const minutesSpan = document.querySelector('#clock-minutes');
const secondsSpan = document.querySelector('#clock-seconds');
const periodSpan = document.querySelector('#clock-period');
const settings = document.querySelector('#settings');
const settingsWindow = document.querySelector('#settings-window');

const darkMode = document.querySelector('#dark-mode');
const showSeconds = document.querySelector('#show-seconds');
const clock24Hour = document.querySelector('#clock-24-hour');
const settingsClose = document.querySelector('#settings-close');

settings.addEventListener('click', () => {
  settingsWindow.style.display = 'flex';
});

settingsClose.addEventListener('click', () => {
  settingsWindow.style.display = 'none';
});

(function () {
  var currentTime = new Date();

  if (localStorage.getItem('clock-24h') === 'false') {
    if (currentTime.getHours() === 0) {
      hoursSpan.innerHTML = '12';
    } else if (currentTime.getHours() > 12) {
      hoursSpan.innerHTML = (currentTime.getHours() - 12).toString().padStart(2, '0');
    } else {
      hoursSpan.innerHTML = currentTime.getHours().toString().padStart(2, '0');
    }
  } else {
    hoursSpan.innerHTML = currentTime.getHours().toString().padStart(2, '0');
  }

  minutesSpan.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
  secondsSpan.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
  periodSpan.innerHTML = currentTime.getHours() >= 12 ? 'PM' : 'AM';

  var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/#');
  httpRequest.send(null);

  setTimeout(arguments.callee, 10);
})();

//#region Theming

if (localStorage.getItem('clock-dark') === 'false') {
  darkMode.checked = false;
  setDarkModeOff();
} else {
  darkMode.checked = true;
  setDarkModeOn();
}

darkMode.addEventListener('change', () => {
  if (darkMode.checked) {
    localStorage.setItem('clock-dark', true);
    setDarkModeOn();
  } else {
    localStorage.setItem('clock-dark', false);
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

if (localStorage.getItem('clock-seconds') === 'false') {
  showSeconds.checked = false;
  secondsSpan.style.display = 'none';
} else {
  showSeconds.checked = true;
  secondsSpan.style.display = '';
}

showSeconds.addEventListener('change', () => {
  if (showSeconds.checked) {
    localStorage.setItem('clock-seconds', true);
    secondsSpan.style.display = '';
  } else {
    localStorage.setItem('clock-seconds', false);
    secondsSpan.style.display = 'none';
  }
});

//#endregion

//#region 24-Hour Clock

if (localStorage.getItem('clock-24h') === 'false') {
  clock24Hour.checked = false;
  periodSpan.style.display = '';
} else {
  clock24Hour.checked = true;
  periodSpan.style.display = 'none';
}

clock24Hour.addEventListener('change', () => {
  if (clock24Hour.checked) {
    localStorage.setItem('clock-24h', true);
    periodSpan.style.display = 'none';
  } else {
    localStorage.setItem('clock-24h', false);
    periodSpan.style.display = '';
  }
});

//#endregion
