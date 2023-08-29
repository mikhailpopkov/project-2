window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let infoHeader = document.querySelector(".info-header"),
    infoHeaderTab = document.querySelectorAll(".info-header-tab"),
    infoTabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < infoTabContent.length; i++) {
      infoTabContent[i].classList.remove("show");
      infoTabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (infoTabContent[b].classList.contains("hide")) {
      infoTabContent[b].classList.remove("hide");
      infoTabContent[b].classList.add("show");
    }
  }

  infoHeader.addEventListener("click", function tabContent(e) {
    let target = e.target;

    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < infoHeaderTab.length; i++) {
        if (target == infoHeaderTab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadLine = "2023-09-01";

  function getTime(endtime) {
    let time = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((time / 1000) % 60),
      minutes = Math.floor((time / 1000 / 60) % 60),
      hours = Math.floor((time / 1000 / 60 / 60) % 24),
      days = Math.floor(time / (1000 * 60 * 60 * 24));

    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    return {
      total: time,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      days: days,
    };
  }

  function startTimer(id, endtime) {
    let timer = document.getElementById(id),
      days = timer.querySelector(".days"),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      getInterval = setInterval(getNewTime, 1000);

    function getNewTime() {
      let t = getTime(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(getInterval);
      }
    }
  }

  startTimer("timer", deadLine);
});
