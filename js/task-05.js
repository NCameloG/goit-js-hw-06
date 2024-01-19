let input = document.getElementById('name-input');
let span = document.getElementById('name-output');

function handleUserName(e) {
  console.log(e.target.value);
  if (e.target.value.trim() !== '') {
    span.textContent = e.target.value;
    return;
  }
  span.textContent = 'Anonymous';
}

input.addEventListener('input', handleUserName);
