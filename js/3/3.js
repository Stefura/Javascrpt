function checkTrafficLightColor() {
  var timeInput = document.getElementById('timeInput');
  var colorResult = document.getElementById('colorResult');
  var time = timeInput.value;

  if (isValidTime(time)) {
    var hours = parseInt(time.split(':')[0]);
    var minutes = parseInt(time.split(':')[1]);
    var totalMinutes = hours * 60 + minutes;
    var remainder = totalMinutes % 5;

    if (remainder >= 0 && remainder < 3) {
      colorResult.textContent = "Зелений";
      colorResult.style.backgroundColor = "green";
    } else {
      colorResult.textContent = "Червоний";
      colorResult.style.backgroundColor = "red";
    }
  } else {
    colorResult.textContent = "Неправильний формат часу";
    colorResult.style.backgroundColor = "white";
  }
}

function isValidTime(time) {
  var pattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return pattern.test(time);
}
