const video = document.getElementById('introVideo');
const heroSection = document.getElementById('home');
const heroText = document.querySelector('.hero-text');
const backgrounds = ['bg-1', 'bg-2', 'bg-3'];
let currentIndex = 0;
let isStarted = false;

const changeBackground = () => {
  heroSection.classList.remove(backgrounds[currentIndex]);
  currentIndex = (currentIndex + 1) % backgrounds.length;
  heroSection.classList.add(backgrounds[currentIndex]);
};

if (video) {
  video.addEventListener('click', () => {
    if (!isStarted) {
      isStarted = true;
      video.classList.add('hidden');
      heroText.classList.add('visible');
      setInterval(changeBackground, 2500);
    }
  });
}

if (heroSection) {
  heroSection.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
      changeBackground();
    }
  });
}

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const parentDropdown = toggle.parentElement;
    const isOpen = parentDropdown.classList.contains('active');

    document.querySelectorAll('.nav-links li.dropdown').forEach((item) => {
      item.classList.remove('active');
    });

    if (!isOpen) {
      parentDropdown.classList.add('active');
    }
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-links li.dropdown').forEach((item) => {
    item.classList.remove('active');
  });
});