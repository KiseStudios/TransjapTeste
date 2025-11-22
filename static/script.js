// --- EFEITO PARALLAX (IMAGEM SEGUE O MOUSE SUAVEMENTE) ---
const heroBg = document.getElementById('hero-bg');

if (heroBg) {
    // Variáveis para suavização (Lerp)
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener('mousemove', (e) => {
        // Pega posição do mouse (-1 a 1)
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    function animateBg() {
        // Interpolação linear para movimento suave (delay)
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        // Aplica o movimento (Ajuste -20px para mover mais ou menos)
        const moveX = currentX * -20; 
        const moveY = currentY * -10;

        // Aplica no CSS
        heroBg.style.transform = `translate(${moveX}px, ${moveY}px)`;

        requestAnimationFrame(animateBg);
    }

    animateBg();
}

// --- MENU & SCROLL (MANTIDO IGUAL) ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
if(menuToggle){
    menuToggle.addEventListener('click', () => {
        if (navList.style.display === 'flex') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '80px';
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.background = 'rgba(5,5,5,0.98)';
            navList.style.padding = '20px';
            navList.style.borderBottom = '2px solid #F7C800';
        }
    });
}