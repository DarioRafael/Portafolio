document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        }
        if (window.innerWidth <= 768) {
            navMenu.classList.add("no-transition");
            setTimeout(() => {
                navMenu.classList.remove("no-transition");
            }, 500);
        }
    });
});
