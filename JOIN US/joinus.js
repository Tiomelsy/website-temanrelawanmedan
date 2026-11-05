
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // HEADER RESPONSIVE
    // =====================================

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    function closeMenu() {

        mainNav.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu navigasi");

    }


    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
        );

    });


    // Tutup menu setelah memilih navigasi

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", closeMenu);

    });


    // Tutup menu jika pengguna menekan area di luar menu

    document.addEventListener("click", function (event) {

        if (
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            closeMenu();

        }

    });


    // Tutup menu ketika ukuran layar berubah

    window.addEventListener("resize", function () {

        if (window.innerWidth > 850) {
            closeMenu();
        }

    });


    // =====================================
    // LOGIN DAN SIGN UP
    // =====================================

    const formCard = document.getElementById("formCard");

    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const forgotPassword = document.getElementById("forgotPassword");


    // LOGIN KE SIGN UP

    showSignup.addEventListener("click", function (event) {

        event.preventDefault();

        formCard.classList.add("active");

    });


    // SIGN UP KE LOGIN

    showLogin.addEventListener("click", function (event) {

        event.preventDefault();

        formCard.classList.remove("active");

    });


    // =====================================
    // LOGIN FORM
    // =====================================

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Fitur Login belum terhubung dengan database TRI Medan."
        );

    });


    // =====================================
    // SIGN UP FORM
    // =====================================

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Password dan konfirmasi password tidak sama!");

            document.getElementById("confirmPassword").focus();

            return;

        }


        alert(
            "Form berhasil diisi. Fitur Sign Up belum terhubung dengan database TRI Medan."
        );

        signupForm.reset();

    });


    // =====================================
    // FORGOT PASSWORD
    // =====================================

    forgotPassword.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Fitur lupa password belum tersedia."
        );

    });


    // =====================================
    // RESET FORM 3D
    // =====================================

    showSignup.addEventListener("click", function () {

        formCard.style.transform = "";

    });


    showLogin.addEventListener("click", function () {

        formCard.style.transform = "";

    });

});
