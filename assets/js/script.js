console.log('Portfolio Loaded');

// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Typing Animation
const typingText = document.getElementById('typing-text');
const words = [
    "Hi, I'm Syed Hussain-Sani",
    "Information Systems Graduate",
    "Tech Enthusiast & Problem Solver",
    "Building Real-World Projects",
    "Always Learning. Always Improving."
];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;
let typingSpeed = 100;

function type() {
    if (typingText) {
        currentWord = words[wordIndex];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex--);
        } else {
            typingText.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 150;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 100;
            setTimeout(type, 500);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', type);

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Load Theme from LocalStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.checked = true;
        }
    }
});

// Scroll To Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Page Transitions
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const url = this.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    });
});

// Initialize ParticleJS Background
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#0d6efd", "#00ffcc", "#8a2be2", "#ff00ff"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6,
            "random": false
        },
        "size": {
            "value": 4,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#cccccc",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    },
    "retina_detect": true
});
