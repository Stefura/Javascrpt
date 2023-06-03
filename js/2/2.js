function calculateSum() {
  var numberInput = document.getElementById('numberInput');
  var result = document.getElementById('result');
  var number = numberInput.value;
  var sum = 0;

  for (var i = 0; i < number.length; i++) {
    sum += parseInt(number.charAt(i));
  }

  result.textContent = "Сума цифр числа " + number + " дорівнює: " + sum;
}
