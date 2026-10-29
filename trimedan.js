document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const menuNav = document.getElementById("menuNav");

    if (!menuToggle || !menuNav) {
        return;
    }

    // Membuka dan menutup menu
    menuToggle.addEventListener("click", function () {

        const menuTerbuka = menuNav.classList.toggle("buka");

        menuToggle.classList.toggle("aktif", menuTerbuka);

        menuToggle.setAttribute(
            "aria-expanded",
            menuTerbuka ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            menuTerbuka ? "Tutup menu" : "Buka menu"
        );
    });

    // Menutup menu setelah memilih halaman
    menuNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menuNav.classList.remove("buka");
            menuToggle.classList.remove("aktif");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");

        });

    });

    // Menutup menu ketika klik di luar navigasi
    document.addEventListener("click", function (event) {

        const klikDiMenu = menuNav.contains(event.target);
        const klikDiTombol = menuToggle.contains(event.target);

        if (!klikDiMenu && !klikDiTombol) {

            menuNav.classList.remove("buka");
            menuToggle.classList.remove("aktif");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");

        }

    });

    // Menutup menu saat layar kembali ke ukuran desktop
    window.addEventListener("resize", function () {

        if (window.innerWidth > 800) {

            menuNav.classList.remove("buka");
            menuToggle.classList.remove("aktif");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");

        }

    });

});