let fontSize = document.getElementById('font-size-control');
let text = document.getElementById('text');

fontSize.addEventListener('input', () => {
  text.style.fontSize = `${fontSize.value}px`;
});
