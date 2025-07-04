const perdoaBtn = document.getElementById('perdoaBtn');
const respostaBtns = document.getElementById('respostaBtns');
const naoBtn = document.getElementById('naoBtn');
const simBtn = document.getElementById('simBtn');
const container = document.querySelector('.container');

// Mostrar os botões "Sim" e "Não"
perdoaBtn.addEventListener('click', () => {
  perdoaBtn.style.display = 'none';
  respostaBtns.style.display = 'block';
  startMovingButton();
});

// Ir pro WhatsApp
simBtn.addEventListener('click', () => {
  const numero = '5598985197503';
  const mensagem = encodeURIComponent('Eu perdoo :)');
  window.location.href = `https://wa.me/${numero}?text=${mensagem}`;
});

// Função que move o botão e cria brilhos
function startMovingButton() {
  setInterval(() => {
    const maxX = container.offsetWidth - naoBtn.offsetWidth;
    const maxY = container.offsetHeight - naoBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    naoBtn.style.position = 'absolute';
    naoBtn.style.left = `${randomX}px`;
    naoBtn.style.top = `${randomY}px`;

    createEmojiEffect(randomX, randomY);
  }, 1000); // Muda de lugar a cada 1 segundo
}

// Criar o efeito de emojis tristes 💔😢
function createEmojiEffect(x, y) {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = Math.random() > 0.5 ? '😢' : '💔';
  emoji.style.left = `${x + 20}px`;
  emoji.style.top = `${y}px`;
  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 1500);
}
