// ===================================
// Navegación móvil
// ===================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menú móvil
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================================
// Scroll suave para navegación
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Header al hacer scroll
// ===================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Animaciones al hacer scroll
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .project-card, .stat-item');
    animateElements.forEach(el => observer.observe(el));
});

// ===================================
// Contador animado para estadísticas
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Activar contadores cuando sean visibles
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// Formulario de contacto
// ===================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Validación básica antes de enviar
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            e.preventDefault();
            showAlert('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }
        
        // Si la validación pasa, el formulario se envía a FormSubmit automáticamente
        // No usamos e.preventDefault() para permitir el envío
    });
}

// ===================================
// Sistema de alertas
// ===================================
function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// ===================================
// Filtro de proyectos (opcional)
// ===================================
const projectFilters = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card');

projectFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remover clase active de todos los filtros
        projectFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        const filterValue = filter.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// ===================================
// Navegación activa según scroll
// ===================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Preloader (opcional)
// ===================================
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// ===================================
// Lazy loading para imágenes
// ===================================
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===================================
// Botón scroll to top
// ===================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-color, #ff6b35);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// ===================================
// Lightbox / Galería de Imágenes
// ===================================
const galleryImages = [
    'images/paneofinal.jpg',
    'images/paneo.jpg',
    'images/paneo2.jpg',
    'images/paneo3.jpg',
    'images/paneo4.jpg',
    'images/paneo5.jpg',
    'images/paneo6.jpg',
    'images/paneo7.jpg',
    'images/paneodelado.jpg',
    'images/paneofachada.jpg',
    'images/paneoInterno.jpg',
    'images/paneoventanas.jpg',
    'images/panoramico.jpg',
    'images/inicioDeExcavación.jpg',
    'images/marcacionDeTerreno.jpg',
    'images/enconfrado.jpg',
    'images/encofradoCadenasMuro.jpg',
    'images/encofradoDeColumnas.jpg',
    'images/InicioEncofradoColumnas.jpg',
    'images/LevantamientoDeMuros.jpg',
    'images/desencofrado.jpg',
    'images/desencofradoCompleto.jpg',
    'images/inicioDeDesencofrado.jpg',
    'images/armazónTecho.jpg',
    'images/armazónTechoCompletado.jpg',
    'images/armazonDeSobrebase.jpg',
    'images/techo.jpg',
    'images/techoAmedias.jpg',
    'images/techoCompletadoarmazon.jpg',
    'images/TechoTerminado.jpg',
    'images/instalaciondetubosdeagua.jpg',
    'images/conexiondeagua.jpg',
    'images/conexiondeagua1.jpg',
    'images/conexiondeagua2.jpg',
    'images/conexionDeAguaa.jpg',
    'images/instalandoTuberiasDeAgua.jpg',
    'images/isntalacionDEtuberiasDEagua.jpg',
    'images/bifurcación.jpg',
    'images/tarrajeo.jpg',
    'images/tarrajeo2.jpg',
    'images/tarrajeoacabado.jpg',
    'images/tarrajeoCieloraso.jpg',
    'images/tarrajeocielorasso.jpg',
    'images/tarrajeoInferior.jpg',
    'images/tarrajeoINFERIOR2.jpg',
    'images/tarrajeoTerminado.jpg',
    'images/tarrajeoVentana.jpg',
    'images/cieloOTROmaterial.jpg',
    'images/fotoCuartoInterior.jpg',
    'images/arena.jpg',
    'images/dueños.jpg',
    'images/maestro.jpg',
    'images/maestrotoma2.jpg',
    'images/obreros.jpg',
    'images/plano.jpg',
    'images/fotoimprovisada.jpg'
];

let currentImageIndex = 0;

function openGallery(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.src = galleryImages[currentImageIndex];
    lightbox.classList.add('active');
    updateCounter();
    
    // Prevenir scroll del body cuando el lightbox está abierto
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop: volver al inicio o al final
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = galleryImages[currentImageIndex];
        lightboxImage.style.opacity = '1';
        updateCounter();
    }, 150);
}

function updateCounter() {
    const counter = document.getElementById('image-counter');
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
}

// Cerrar lightbox con tecla ESC
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        }
    }
});

// Cerrar lightbox al hacer clic fuera de la imagen
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

console.log('🚀 Website loaded successfully!');
