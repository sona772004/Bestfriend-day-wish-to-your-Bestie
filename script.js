// Confetti container reference
const confettiContainer = document.querySelector('.confetti-container');

// Create emoji confetti falling down
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.innerText = ['💙', '🎉', '✨', '💫', '🎊'][Math.floor(Math.random() * 5)];
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
  confettiContainer.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

// Floating hearts rising up
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerText = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 2) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// Periodic animations
setInterval(createConfetti, 300);
setInterval(createFloatingHeart, 600);

// Love quotes auto-rotation
const quotes = [
  "Our bond is not a coincidence, it's destiny.",
  "You’re my today and all of my tomorrows.",
  "Together, we make the best team.",
  "From friends to forever 💖",
  "You + Me = Magic ✨"
];
let i = 0;
setInterval(() => {
  document.getElementById('quote').innerText = quotes[i];
  i = (i + 1) % quotes.length;
}, 4000);

// Surprise reveal popup after 10 seconds
setTimeout(() => {
  alert("🎁 Surprise Reveal: I’m so lucky to have you! 💙");
}, 10000);

// Play music on button click (required for autoplay policy)
document.getElementById('play-btn').addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  music.play()
    .then(() => {
      document.getElementById('play-btn').textContent = "Enjoy the Magic ✨";
    })
    .catch(err => {
      alert("Music couldn't play: " + err.message);
      console.error("Playback error:", err);
    });
});
