
document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // MOBILE NAVIGATION
    // ==============================

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });

        // Tutup menu setelah link ditekan
        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                mainNav.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            });

        });

    }


    // ==============================
    // LOGIN & REGISTER SWITCH
    // ==============================

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    const formTitle = document.getElementById("formTitle");
    const formSubtitle = document.getElementById("formSubtitle");

    if (
        loginForm &&
        registerForm &&
        showRegister &&
        showLogin
    ) {

        showRegister.addEventListener("click", function () {

            loginForm.classList.add("hidden");
            registerForm.classList.remove("hidden");

            formTitle.textContent = "Create Account";
            formSubtitle.textContent =
                "Mulai perjalananmu bersama TRI Medan.";

        });


        showLogin.addEventListener("click", function () {

            registerForm.classList.add("hidden");
            loginForm.classList.remove("hidden");

            formTitle.textContent = "Welcome Back!";
            formSubtitle.textContent =
                "Masuk untuk melanjutkan.";

        });

    }


    // ==============================
    // SHOW / HIDE PASSWORD
    // ==============================

    document.querySelectorAll(".password-toggle").forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = button.dataset.target;
            const input = document.getElementById(targetId);

            if (!input) return;

            const showPassword = input.type === "password";

            input.type = showPassword ? "text" : "password";

            button.innerHTML = showPassword
                ? '<i class="fa-regular fa-eye-slash"></i>'
                : '<i class="fa-regular fa-eye"></i>';

        });

    });


    // ==============================
    // LOGIN DEMO
    // ==============================

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Fitur login belum terhubung ke database. " +
                "Silakan hubungkan halaman ini dengan sistem backend."
            );

        });

    }


    // ==============================
    // REGISTER DEMO
    // ==============================

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const password =
                document.getElementById("registerPassword").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {

                alert("Konfirmasi password tidak sesuai!");
                return;

            }

            alert(
                "Formulir berhasil diperiksa, tetapi pendaftaran " +
                "belum tersimpan karena belum terhubung ke database."
            );

        });

    }


    // ==============================
    // FORGOT PASSWORD DEMO
    // ==============================

    const forgotPassword = document.getElementById("forgotPassword");

    if (forgotPassword) {

        forgotPassword.addEventListener("click", function () {

            alert(
                "Fitur lupa password belum tersedia. " +
                "Silakan hubungi admin TRI Medan."
            );

        });

    }

});
