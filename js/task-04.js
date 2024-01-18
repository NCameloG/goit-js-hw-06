var counterValue = 0;
let decrementButton = document.querySelector(`[data-action="decrement"]`);
let incrementButton = document.querySelector('[data-action="increment"]');
let valueElement = document.getElementById('value');

function updateCounterValue() {
  valueElement.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounterValue();
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounterValue();
});

updateCounterValue();
