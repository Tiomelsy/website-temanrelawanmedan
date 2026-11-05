
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    // BUKA / TUTUP MENU MOBILE
    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("show");

            menuToggle.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        // Tutup menu setelah link navigasi ditekan
        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("show");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

        // Tutup menu jika pengguna menekan area di luar menu
        document.addEventListener("click", function (event) {

            const clickedInsideMenu = navigation.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                navigation.classList.remove("show");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }

        });

        // Tutup menu jika layar berubah menjadi desktop
        window.addEventListener("resize", function () {

            if (window.innerWidth > 760) {
                navigation.classList.remove("show");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }

        });

    }


    // ANIMASI CARD SAAT MUNCUL DI LAYAR
    const animatedCards = document.querySelectorAll(
        ".registration-card, .benefit-card, .social-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        animatedCards.forEach(function (card) {
            observer.observe(card);
        });

    } else {

        animatedCards.forEach(function (card) {
            card.classList.add("visible");
        });

    }

});
