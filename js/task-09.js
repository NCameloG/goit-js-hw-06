function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let button = document.querySelector('.change-color');
let colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
