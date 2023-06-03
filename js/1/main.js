var employees = [
  { id: 1, name: 'Дмитро', age: 23, salary: 400 },
  { id: 2, name: 'Петро', age: 25, salary: 500 },
  { id: 3, name: 'Василь', age: 23, salary: 500 },
  { id: 4, name: 'Микола', age: 30, salary: 1000 },
  { id: 5, name: 'Іван', age: 27, salary: 500 },
  { id: 6, name: 'Гнат', age: 28, salary: 1000 }
];

var table = document.createElement('table');
table.style.borderCollapse = 'collapse';

// Створення заголовка таблиці
var headerRow = document.createElement('tr');
var headerNames = ['id', 'name', 'age', 'salary'];

headerNames.forEach(function(header) {
  var th = document.createElement('th');
  th.textContent = header;
  th.style.border = '1px solid black';
  headerRow.appendChild(th);
});

table.appendChild(headerRow);

// Додавання даних про працівників у таблицю
employees.forEach(function(employee) {
  var row = document.createElement('tr');

  for (var key in employee) {
    var cell = document.createElement('td');
    cell.textContent = employee[key];
    cell.style.border = '1px solid black';
    row.appendChild(cell);
  }

  table.appendChild(row);
});

document.body.appendChild(table);
