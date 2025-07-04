const perdoaBtn = document.getElementById('perdoaBtn');
const respostaBtns = document.getElementById('respostaBtns');
const naoBtn = document.getElementById('naoBtn');
const simBtn = document.getElementById('simBtn');
const container = document.querySelector('.container');

// Mostrar botões "Sim" e "Não" ao clicar em "Me Perdoa?"
perdoaBtn.addEventListener('click', () => {
  perdoaBtn.style.display = 'none';
  respostaBtns.style.display = 'block';
});

// Redireciona para a página extra ao clicar "Sim"
simBtn.addEventListener('click', () => {
  window.location.href = 'agradecimento.html';
});

// Faz o botão "Não" mudar de lugar e mostrar frase ao passar o mouse
naoBtn.addEventListener('mouseover', () => {
  moveButton();
  createEmojiEffect();
});

// Faz o botão "Não" mudar de lugar e mostrar frase ao clicar
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

// Frases tristes para efeito
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
