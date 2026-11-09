/* =========================================================
   TEMAN RELAWAN INDONESIA MEDAN
   JAVASCRIPT PROGRAM TERLAKSANA
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. MENU NAVIGASI MOBILE
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".header nav");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        // Tutup menu setelah salah satu menu diklik
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        // Tutup menu ketika klik di luar navigasi
        document.addEventListener("click", function (event) {
            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

    }


    /* =====================================================
       2. LIGHTBOX DOKUMENTASI FOTO
    ===================================================== */

    const photoLinks = document.querySelectorAll(
        ".photo-gallery a[href^='#']"
    );

    photoLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            const lightbox = document.querySelector(targetId);

            if (lightbox) {
                event.preventDefault();

                lightbox.classList.add("lightbox-open");

                document.body.style.overflow = "hidden";

                history.replaceState(null, "", targetId);
            }

        });

    });


    // Tutup lightbox
    document.querySelectorAll(".lightbox-close").forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const lightbox = button.closest(".photo-lightbox");

            if (lightbox) {
                lightbox.classList.remove("lightbox-open");
            }

            document.body.style.overflow = "";

            history.replaceState(
                null,
                "",
                window.location.pathname + window.location.search
            );

        });

    });


    // Tutup lightbox menggunakan tombol Escape
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            document.querySelectorAll(
                ".photo-lightbox.lightbox-open"
            ).forEach(function (lightbox) {

                lightbox.classList.remove("lightbox-open");

            });

            document.body.style.overflow = "";

            history.replaceState(
                null,
                "",
                window.location.pathname + window.location.search
            );

        }

    });


    /* =====================================================
       3. TUTUP LIGHTBOX KETIKA AREA GELAP DIKLIK
    ===================================================== */

    document.querySelectorAll(".photo-lightbox").forEach(function (lightbox) {

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                lightbox.classList.remove("lightbox-open");

                document.body.style.overflow = "";

                history.replaceState(
                    null,
                    "",
                    window.location.pathname + window.location.search
                );

            }

        });

    });


    /* =====================================================
       4. ANIMASI KARTU PROGRAM SAAT SCROLL
    ===================================================== */

    const programCards = document.querySelectorAll(".program-box");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("program-visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });

        programCards.forEach(function (card) {
            observer.observe(card);
        });

    } else {

        programCards.forEach(function (card) {
            card.classList.add("program-visible");
        });

    }


    /* =====================================================
       5. TAHUN OTOMATIS PADA FOOTER
    ===================================================== */

    const footerYear = document.querySelector(".footer-year");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

});