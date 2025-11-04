document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const landing = document.getElementById("landing");
  const memories = document.getElementById("memories");
  const message = document.getElementById("message");

  // --- Page transitions ---
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      landing.classList.add("hidden");
      memories.classList.remove("hidden");
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      memories.classList.add("hidden");
      message.classList.remove("hidden");
    });
  }

  // --- Floating Heart Animation ---
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Base heart size
    const baseSize = 20;
    const scale = 0.8 + Math.random() * 0.5;
    const size = baseSize * scale;

    // Apply consistent size
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Random left position
    heart.style.left = `${Math.random() * 100}%`;

    // Slight variation in animation duration
    const duration = 3 + Math.random() * 2;
    heart.style.animationDuration = `${duration}s`;

    // Random shades for visual variation
    const shades = ["#ff2f6e", "#ff5c8d", "#ff89a7"];
    heart.style.backgroundColor = shades[Math.floor(Math.random() * shades.length)];

    // Apply perfect heart rotation (matches CSS)
    heart.style.transform = `rotate(-45deg) scale(${scale})`;

    // Append and remove after animation
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
  }

  // Generate hearts continuously
  setInterval(createHeart, 400);

  // --- Memory Card Hover / Tap ---
  const imgCards = document.querySelectorAll(".img-card");

  imgCards.forEach((card) => {
    const textDiv = card.querySelector(".memory-text");
    const text = card.dataset.text;
    if (textDiv && text) textDiv.textContent = text;

    // Desktop hover
    card.addEventListener("mouseenter", () => card.classList.add("active"));
    card.addEventListener("mouseleave", () => card.classList.remove("active"));

    // Mobile tap toggle
    card.addEventListener("click", () => card.classList.toggle("active"));
  });
});
