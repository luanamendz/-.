const perdoaBtn = document.getElementById('perdoaBtn');
const respostaBtns = document.getElementById('respostaBtns');
const naoBtn = document.getElementById('naoBtn');
const simBtn = document.getElementById('simBtn');
const container = document.querySelector('.container');

// Mostrar botões
perdoaBtn.addEventListener('click', () => {
  perdoaBtn.style.display = 'none';
  respostaBtns.style.display = 'block';
});

// Redirecionar ao clicar em "Sim"
simBtn.addEventListener('click', () => {
  window.location.href = 'agradecimento.html';
});

// Botão "Não" muda de lugar + efeito
naoBtn.addEventListener('mouseover', () => {
  moveButton();
  createEmojiEffect();
});

naoBtn.addEventListener('click', () => {
  moveButton();
  createEmojiEffect();
});

// Move botão "Não"
function moveButton() {
  const maxX = container.offsetWidth - naoBtn.offsetWidth;
  const maxY = container.offsetHeight - naoBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  naoBtn.style.position = 'absolute';
  naoBtn.style.left = `${randomX}px`;
  naoBtn.style.top = `${randomY}px`;
}

// Efeitos tristes
function createEmojiEffect() {
  const frases = [
    'Por favor 😢',
    'Desculpa 💔',
    'Nãooo 😞',
    'Não seja assim ☹️',
    'Perdão 😔'
  ];

  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = frases[Math.floor(Math.random() * frases.length)];

  const btnRect = naoBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const left = btnRect.left - containerRect.left + naoBtn.offsetWidth / 2;
  const top = btnRect.top - containerRect.top;

  emoji.style.left = `${left}px`;
  emoji.style.top = `${top}px`;

  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 2000);
}
