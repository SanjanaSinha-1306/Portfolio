const textElement = document.getElementById('typewriter');
const nameToType = "SANJANA KUMARI SINHA";
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentString = nameToType.substring(0, charIndex);
    textElement.textContent = currentString;

    let typeSpeed = isDeleting ? 70 : 150;

    if (!isDeleting && charIndex === nameToType.length) {
        typeSpeed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeSpeed = 500;
    }

    if (!isDeleting && charIndex < nameToType.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    typeEffect();

    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const target = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', target);
        themeBtn.innerText = target === 'dark' ? '🌙' : '☀️';
    });
});