// Smooth scrolling for links
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Scroll to the top of the element
    });
  });
});

// Animation on scroll with futuristic effects
window.addEventListener('scroll', throttle(animateOnScroll, 100));

function throttle(callback, delay) {
  let lastTime = 0;
  return function() {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      lastTime = now;
      callback();
    }
  };
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.animated-title, .scroll-animate');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    
    // Add animation when the element is near the viewport
    if (elementTop < windowHeight - 150) {
      el.classList.add('visible');
      if (el.classList.contains('animated-title')) {
        el.classList.add('glowing'); // Add glowing effect for titles
      }
    }
  });
}

// Glow effect for animated titles
const style = document.createElement('style');
style.innerHTML = `
  .animated-title.glowing {
    animation: glowing 1.5s ease-in-out infinite;
  }

  @keyframes glowing {
    0% {
      text-shadow: 0 0 5px #00F5FF, 0 0 10px #00F5FF, 0 0 15px #00F5FF;
    }
    50% {
      text-shadow: 0 0 20px #00F5FF, 0 0 30px #00F5FF, 0 0 40px #00F5FF;
    }
    100% {
      text-shadow: 0 0 5px #00F5FF, 0 0 10px #00F5FF, 0 0 15px #00F5FF;
    }
  }

  .scroll-animate {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .scroll-animate.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
