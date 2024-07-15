document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");

    menuToggle.addEventListener("click", function() {
        if (languageMenu.classList.contains("active")) {
            languageMenu.classList.remove("active");
        }
        navMenu.classList.toggle("active");
    });

    languageToggle.addEventListener("click", function() {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        }
        languageMenu.classList.toggle("active");
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
            }
            if (languageMenu.classList.contains("active")) {
                languageMenu.classList.remove("active");
            }
        }
        if (window.innerWidth <= 768) {
            navMenu.classList.add("no-transition");
            setTimeout(() => {
                navMenu.classList.remove("no-transition");
            }, 500);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('es'); // Idioma por defecto
});

function changeLanguage(language) {
    fetch('translations.json')
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                element.textContent = translations[language][key];
            });
            document.title = translations[language]['site_title'];
        });
}
