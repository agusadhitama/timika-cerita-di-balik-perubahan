// =========================
// SCROLL TO SECTION
// =========================
function scrollToSection() {
  document.getElementById("sejarah").scrollIntoView({
    behavior: "smooth"
  });
}


// =========================
// SCROLL ANIMATION (FADE-IN)
// =========================
const items = document.querySelectorAll('.item');

function revealOnScroll() {
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 60) {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener('scroll', revealOnScroll);


// =========================
// FAKTA BERTAHAP (INTERAKTIF)
// =========================
let factLevel = 0;

const facts = [
  "Timika berkembang sebagai salah satu pusat ekonomi penting di Papua.",
  "Perkembangan ini membawa peluang besar, namun juga tantangan sosial.",
  "Tidak semua perubahan dirasakan secara merata oleh masyarakat lokal.",
  "Di tengah semuanya, budaya dan identitas terus dijaga dan dipertahankan."
];

function reveal(el) {
  if (factLevel < facts.length) {
    el.innerText = facts[factLevel];
    factLevel++;
  } else {
    el.innerText = "Masih banyak cerita lain yang belum terdengar...";
  }
}


// =========================
// SCROLL ATMOSPHERE (SUBTLE DEPTH)
// =========================
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const intensity = scrollY / maxScroll;

  // Background jadi sedikit lebih dalam (smooth)
  const color = 10 - intensity * 5;
  document.body.style.background = `rgb(${color}, ${color}, ${color})`;
});


// =========================
// AUDIO CONTROL (USER INTERACTION SAFE)
// =========================
const audio = document.getElementById("bgSound");

function enableAudio() {
  if (audio && audio.paused) {
    audio.volume = 0.25; // lembut
    audio.play().catch(() => {});
  }
}

// autoplay restriction workaround
document.addEventListener("click", enableAudio, { once: true });


// =========================
// PARALLAX EFFECT (HERO)
// =========================
const hero = document.querySelector('.hero');

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (hero) {
    hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
  }
});


// =========================
// SMALL POLISH (FADE BODY IN)
// =========================
window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});