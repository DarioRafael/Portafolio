document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");
    const darkModeButton = document.querySelector(".darkMode");

    // Función para aplicar o quitar el modo oscuro
    function applyDarkMode(isDark) {
        document.body.classList.toggle("dark-mode", isDark);
        document.querySelector("header").classList.toggle("dark-mode", isDark);
        document.querySelector("footer").classList.toggle("dark-mode", isDark);
        document.querySelectorAll("header ul li a").forEach(link => {
            link.classList.toggle("dark-mode", isDark);
        });
    }

    // Recuperar el estado del modo oscuro desde localStorage
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    applyDarkMode(darkModeEnabled);

    menuToggle.addEventListener("click", function () {
        if (languageMenu.classList.contains("active")) {
            languageMenu.classList.remove("active");
        }
        navMenu.classList.toggle("active");
    });

    languageToggle.addEventListener("click", function () {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        }
        languageMenu.classList.toggle("active");
    });

    darkModeButton.addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark-mode");
        applyDarkMode(isDark);
        localStorage.setItem("darkMode", isDark.toString());
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1100) {
            navMenu.classList.remove("active");
            languageMenu.classList.remove("active");
        } else {
            navMenu.classList.add("no-transition");
            setTimeout(() => {
                navMenu.classList.remove("no-transition");
            }, 500);
        }
    });
});

//Cambiar idioma por defecto.
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('es'); // Idioma por defecto
});

document.getElementById('settings-button').addEventListener('click', function() {
    const settingsContainer = document.getElementById('settings-container');
    settingsContainer.classList.toggle('active');
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
