const container = document.getElementById('chuva-amor');
const frases = [
    'Eu te amo 🦴🤍',
    'Eu te amo 🤍🦴',
    'Eu te amo 🦴🤍✨',
    'Eu te amo 🤍🦴🌌',
    'Eu te amo 🦴🤍💫'
];

let indice = 0;

function criarCamada() {
    const camada = document.createElement('div');
    camada.classList.add('camada');
    
    const frase = frases[Math.floor(Math.random() * frases.length)];
    camada.innerHTML = `<span>${frase}</span>`;
    
    const angulo = Math.random() * Math.PI * 2;
    const distancia = 150 + Math.random() * 100;
    
    camada.style.left = `calc(50% + ${Math.cos(angulo) * distancia}px)`;
    camada.style.top = `calc(50% + ${Math.sin(angulo) * distancia}px)`;
    camada.style.transform = 'translate(-50%, -50%) scale(0.1)';
    camada.style.opacity = '0';
    
    container.appendChild(camada);
    
    // Animação de aproximação
    camada.animate([
        { transform: 'translate(-50%, -50%) scale(0.1)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 1, offset: 0.2 },
        { transform: 'translate(-50%, -50%) scale(2.5)', opacity: 0 }
    ], {
        duration: 6000,
        easing: 'ease-in',
        iterations: 1
    }).onfinish = () => camada.remove();
}

setInterval(criarCamada, 400);
