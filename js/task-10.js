const controls = document.querySelector('#controls');
const divContainer = document.querySelector(`#boxes`);

const userInput = controls.querySelector('input');
const divCreator = controls.querySelector('button[data-create]');
const divDestructor = controls.querySelector('button[data-destroy]');

let numberOfDivs = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Amount=Elementos a tomar del input
function createBox(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement(`div`);
    div.style.width = `${i * 10 + 30}px`;
    div.style.height = `${i * 10 + 30}px`;
    div.style.backgroundColor = getRandomHexColor();
    divContainer.append(div);
  }
}

const onInputChange = event => {
  numberOfDivs = event.currentTarget.value;
};
// innerHTML = Modifica el codigo HTML
function destroyBoxes() {
  divContainer.innerHTML = '';
}

divCreator.addEventListener('click', () => {
  createBox(numberOfDivs);
});

userInput.addEventListener(`input`, onInputChange);

divDestructor.addEventListener(`click`, destroyBoxes);
