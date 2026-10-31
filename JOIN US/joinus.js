document.addEventListener("DOMContentLoaded", function () {

    const formCard = document.getElementById("formCard");

    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const forgotPassword = document.getElementById("forgotPassword");


    // =====================================
    // LOGIN KE SIGN UP
    // =====================================

    showSignup.addEventListener("click", function (event) {

        event.preventDefault();

        formCard.classList.add("active");

    });


    // =====================================
    // SIGN UP KE LOGIN
    // =====================================

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
            "Fitur Login belum terhubung dengan database TRI."
        );

    });


    // =====================================
    // SIGN UP FORM
    // =====================================

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const password = document.getElementById("signupPassword").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Password dan konfirmasi password tidak sama!");

            document.getElementById("confirmPassword").focus();

            return;

        }

        alert(
            "Form pendaftaran berhasil diisi. Fitur Sign Up belum terhubung dengan database TRI."
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
    // 3D CARD MOUSE EFFECT
    // KHUSUS PERANGKAT DENGAN POINTER
    // =====================================

    const formSection = document.querySelector(".form-section");

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (canHover.matches) {

        formSection.addEventListener("mousemove", function (event) {

            if (formCard.classList.contains("active")) {
                return;
            }

            const rect = formSection.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = ((x - centerX) / centerX) * 3;
            const rotateX = ((centerY - y) / centerY) * 3;

            formCard.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });


        formSection.addEventListener("mouseleave", function () {

            if (!formCard.classList.contains("active")) {

                formCard.style.transform = "";

            }

        });

    }


    // =====================================
    // RESET 3D SAAT BERPINDAH FORM
    // =====================================

    showSignup.addEventListener("click", function () {

        formCard.style.transform = "";

    });

    showLogin.addEventListener("click", function () {

        formCard.style.transform = "";

    });

});