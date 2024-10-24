// Select the particle container
const particleContainer = document.querySelector('.cute-particles');

// Create soft, floating particles (hearts/bubbles)
for (let i = 0; i < 80; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particleContainer.appendChild(particle);
}
