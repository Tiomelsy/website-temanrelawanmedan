document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const menuNav = document.getElementById("menuNav");

    if (menuToggle && menuNav) {

        // Membuka dan menutup hamburger menu
        menuToggle.addEventListener("click", function () {

            menuNav.classList.toggle("buka");
            menuToggle.classList.toggle("aktif");

            const menuTerbuka = menuNav.classList.contains("buka");

            menuToggle.setAttribute("aria-expanded", menuTerbuka);

            menuToggle.setAttribute(
                "aria-label",
                menuTerbuka ? "Tutup menu" : "Buka menu"
            );

        });

        // Menutup menu setelah salah satu link diklik
        const navLinks = menuNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menuNav.classList.remove("buka");
                menuToggle.classList.remove("aktif");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Buka menu");

            });

        });

    }

});