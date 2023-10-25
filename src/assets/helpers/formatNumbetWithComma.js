// Метод працює для чисел до 999999

export function formatNumberWithComma(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
