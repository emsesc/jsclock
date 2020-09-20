function startTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  if (hour < 12) {
    tday = "AM";
  }
  else {
    tday = "PM"
    if (hour != 12) {
      hour -= 12
    }
  }

  var clock = "⏰"+hour + " : " + min + " : " + sec + " " + tday + "⏰";
  document.getElementById("clock").innerText = clock;
  var t = setInterval(startTime, 1000);
}

function updateTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  else {
    return time;
  }
}

startTime();
