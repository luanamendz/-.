const perdoaBtn = document.getElementById('perdoaBtn');
const respostaBtns = document.getElementById('respostaBtns');
const naoBtn = document.getElementById('naoBtn');
const simBtn = document.getElementById('simBtn');
const container = document.querySelector('.container');

// Mostrar os botões "Sim" e "Não"
perdoaBtn.addEventListener('click', () => {
  perdoaBtn.style.display = 'none';
  respostaBtns.style.display = 'block';
});

// WhatsApp quando clicar em "Sim"
simBtn.addEventListener('click', () => {
  const numero = '5598985197503';
  const mensagem = encodeURIComponent('Eu perdoo :)');
  window.location.href = `https://wa.me/${numero}?text=${mensagem}`;
});

// Quando passa o mouse no botão "Não"
naoBtn.addEventListener('mouseover', () => {
  moveButton();
  createEmojiEffect();
});

// Quando clica no botão "Não"
naoBtn.addEventListener('click', () => {
  moveButton();
  createEmojiEffect();
});

// Função para mover o botão "Não"
function moveButton() {
  const maxX = container.offsetWidth - naoBtn.offsetWidth;
  const maxY = container.offsetHeight - naoBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  naoBtn.style.position = 'absolute';
  naoBtn.style.left = `${randomX}px`;
  naoBtn.style.top = `${randomY}px`;
}

// Criar efeito de emoji saindo do botão "Não"
function createEmojiEffect() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = Math.random() > 0.5 ? '😢' : '💔';

  const btnRect = naoBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const left = btnRect.left - containerRect.left + naoBtn.offsetWidth / 2;
  const top = btnRect.top - containerRect.top;

  emoji.style.left = `${left}px`;
  emoji.style.top = `${top}px`;

  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 1500);
}
