const display = document.querySelector('.display');
const keys = document.querySelectorAll('.key');

let currentValue = '';
let previousValue = '';
let operation = null;

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.value;

    if (keyValue === 'C') {
      currentValue = '';
      previousValue = '';
      operation = null;
      updateDisplay('');
    } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
      operation = keyValue;
      previousValue = currentValue;
      currentValue = '';
    } else if (keyValue === '=') {
      if (operation === '+') {
        currentValue = String(parseFloat(previousValue) + parseFloat(currentValue));
      } else if (operation === '-') {
        currentValue = String(parseFloat(previousValue) - parseFloat(currentValue));
      } else if (operation === '*') {
        currentValue = String(parseFloat(previousValue) * parseFloat(currentValue));
      } else if (operation === '/') {
        currentValue = String(parseFloat(previousValue) / parseFloat(currentValue));
      }
      updateDisplay(currentValue);
      operation = null;
      previousValue = '';
    } else {
      currentValue += keyValue;
      updateDisplay(currentValue);
    }
  });
});

function updateDisplay(value) {
  display.value = value;
}
