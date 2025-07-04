const perdoaBtn = document.getElementById('perdoaBtn');
const respostaBtns = document.getElementById('respostaBtns');
const naoBtn = document.getElementById('naoBtn');
const simBtn = document.getElementById('simBtn');

perdoaBtn.addEventListener('click', () => {
  perdoaBtn.style.display = 'none';
  respostaBtns.style.display = 'block';
});

naoBtn.addEventListener('mouseover', () => {
  const container = document.querySelector('.container');
  const maxX = container.offsetWidth - naoBtn.offsetWidth;
  const maxY = container.offsetHeight - naoBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  naoBtn.style.position = 'absolute';
  naoBtn.style.left = `${randomX}px`;
  naoBtn.style.top = `${randomY}px`;
});

simBtn.addEventListener('click', () => {
  const numero = '5598985197503';
  const mensagem = encodeURIComponent('Eu perdoo :)');
  window.location.href = `https://wa.me/${numero}?text=${mensagem}`;
});
