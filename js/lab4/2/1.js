function getDaysDifference(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return diffDays;
}

console.log(`Кількість днів між ${date1} і ${date2}: ${daysDifference}`);
