let clockElement = document.querySelector("#analogClock");

var snd = new Audio("file.wav"); 
snd.play();

function turnTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = newTime(hour);
  min = newTime(min);
  sec = newTime(sec);
  if (hour < 12) {
    tday = "AM";
  }
  else {
    tday = "PM"
    if (hour != 12) {
      hour -= 12
    }
  }
  clockElement.style.setProperty("--seconds", -90 + sec * 6 + "deg");
  clockElement.style.setProperty("--hours", -90 + hour * 30 + "deg");
  clockElement.style.setProperty("--minutes", -90 + min * 6 + "deg");
  var t = setInterval(turnTime, 1000);
}

function newTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  else {
    return time;
  }
}

turnTime();
