const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const status = document.getElementById("status");

const success = document.getElementById("success");
const closeBtn = document.getElementById("closeBtn");

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

let noClicks = 0;

const funnyMessages = [
  "Nice try 😂",
  "No button is feeling shy today 😭",
  "Are you REALLY sure? 👀",
  "Sanu please think again 🥹",
  "That button is running away 😂",
  "System says: YES is recommended ❤️",
  "Error 404: NO not found 💀",
  "Bro... just press YES 😂❤️"
];

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton(e) {
  e.preventDefault();

  noClicks++;

  status.textContent =
    funnyMessages[Math.min(noClicks - 1, funnyMessages.length - 1)];

  const x = Math.random() * 220 - 110;
  const y = Math.random() * 140 - 70;

  noBtn.style.transform =
    `translate(${x}px, ${y}px) rotate(${Math.random() * 20 - 10}deg)`;

  yesBtn.style.transform =
    `scale(${1 + noClicks * 0.04})`;
}

yesBtn.addEventListener("click", () => {
  success.style.display = "grid";

  for (let i = 0; i < 100; i++) {
    createConfetti();
  }

  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

closeBtn.addEventListener("click", () => {
  success.style.display = "none";
});

secretBtn.addEventListener("click", () => {
  secretMessage.textContent =
    "🤫 Secret unlocked: Sanu, you are officially my favourite notification. ❤️😂";
  
  secretBtn.textContent = "🔓 Secret Unlocked ❤️";
});

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.textContent =
    ["❤️", "💗", "💕", "💖", "💘"][Math.floor(Math.random() * 5)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";
  heart.style.animationDuration = 3 + Math.random() * 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

function createConfetti() {
  const piece = document.createElement("div");

  piece.className = "confetti";

  piece.style.left = Math.random() * 100 + "vw";
  piece.style.background =
    ["#ff4f91", "#ffffff", "#ffd166", "#7df9ff", "#ff69b4"]
    [Math.floor(Math.random() * 5)];

  piece.style.animationDuration =
    2 + Math.random() * 2 + "s";

  document.body.appendChild(piece);

  setTimeout(() => piece.remove(), 4000);
}

// Floating hearts
setInterval(createHeart, 900);