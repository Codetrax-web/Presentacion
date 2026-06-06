const btn = document.querySelector('.toggle-btn');
const extraInfo = document.querySelector('.extra-info');

btn.addEventListener('click', () => {
  extraInfo.classList.toggle('visible');
  btn.textContent = extraInfo.classList.contains('visible') ? 'Mostrar Menos' : 'Mostrar Más';
});
