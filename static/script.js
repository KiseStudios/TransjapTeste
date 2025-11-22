// --- MENU MOBILE TOGGLE ---
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' que está no CSS (display: flex)
        navList.classList.toggle('active');
        
        // Muda o ícone de barras para X (opcional, visual)
        const icon = menuToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// --- EFEITO PARALLAX HERO (Se existir) ---
const heroBg = document.getElementById('hero-bg');
if (heroBg) {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    });
    function animateBg() {
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;
        heroBg.style.transform = `translate(${currentX * -20}px, ${currentY * -10}px)`;
        requestAnimationFrame(animateBg);
    }
    animateBg();
}

// --- EFEITO PARALLAX PARTICULAS (Se existir) ---
// (Mantido caso você mude de ideia e volte para partículas)
const container = document.getElementById('canvas-container');
if (container) {
    // ... (Seu código de Three.js anterior das partículas fica aqui se quiser manter backup) ...
    // Se estiver usando a imagem estática, este bloco simplesmente não roda.
}

// --- HEADER SCROLL ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});