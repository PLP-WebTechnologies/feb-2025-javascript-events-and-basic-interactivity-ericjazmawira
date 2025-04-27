// Button click event
const magicButton = document.getElementById('magicButton');
magicButton.addEventListener('click', () => {
  magicButton.textContent = "You Clicked Me!";
  magicButton.style.backgroundColor = "#4CAF50";
  const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    openTab(button.getAttribute('data-tab'));
  });
});

});

// Double-click event 
magicButton.addEventListener('dblclick', () => {
  alert("Secret Double Click Unlocked!");
});

// Keypress detection
document.addEventListener('keydown', (e) => {
  if (e.key === 'm' || e.key === 'M') {
    alert("You pressed the magic key!");
  }
});

// Tabs function
function openTab(tabName) {
  const tabs = document.getElementsByClassName('tab-content');
  for (let tab of tabs) {
    tab.classList.remove('show');
  }
  document.getElementById(tabName).classList.add('show');
}

// Form validation
const form = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!name || !email || password.length < 8) {
    formMessage.textContent = "Chill, re-check your input!";
    formMessage.className = 'error';
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.className = 'success';
  }
});

// Slideshow
const slideImage = document.getElementById('slideImage');
const galleryImages = document.querySelectorAll('.gallery img');

let currentIndex = 0;

// all srcs from gallery
const slideSources = Array.from(galleryImages)
  .map(img => img.src);

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideSources.length;
  slideImage.src = slideSources[currentIndex];
}

// Rotate slides every 3 seconds
setInterval(showNextSlide, 3000);
