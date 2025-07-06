// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                alert('Por favor, complete todos los campos.');
                if (feedback) {
                    feedback.textContent = 'Todos los campos son obligatorios.';
                    feedback.setAttribute('aria-live', 'assertive');
                }
                return;
            }

            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un email válido.');
                if (feedback) {
                    feedback.textContent = 'Formato de correo electrónico inválido.';
                    feedback.setAttribute('aria-live', 'assertive');
                }
                return;
            }

            alert('¡Mensaje enviado con éxito!');
            if (feedback) {
                feedback.textContent = 'Mensaje enviado con éxito.';
                feedback.setAttribute('aria-live', 'polite');
            }

            form.reset();
        });
    }

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle del menú móvil
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggle && navbarCollapse) {
        navbarToggle.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    }

    // Efecto en scroll para navbar
    window.addEventListener('scroll', function () {
        const nav = document.querySelector('.navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });

    // Accesibilidad en carrusel
    const carousel = document.getElementById('mainCarousel');
    if (carousel) {
        carousel.addEventListener('focusin', function () {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) carouselInstance.pause();
        });

        carousel.addEventListener('focusout', function () {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) carouselInstance.cycle();
        });
    }
});
    