const hoursSpan = document.querySelector('#clock-hours');
const minutesSpan = document.querySelector('#clock-minutes');
const secondsSpan = document.querySelector('#clock-seconds');
const github = document.querySelector('#github');

github.addEventListener('click', () => {
  window.open('https://github.com/patel-priyank/Clock');
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
