const hoursSpan = document.querySelector('#clock-hours');
const minutesSpan = document.querySelector('#clock-minutes');
const secondsSpan = document.querySelector('#clock-seconds');

(function () {
  var currentTime = new Date();

  hoursSpan.innerHTML = currentTime.getHours().toString().padStart(2, '0');
  minutesSpan.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
  secondsSpan.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');

  setTimeout(arguments.callee, 10);
})();
