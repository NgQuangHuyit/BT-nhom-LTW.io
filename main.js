document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const registerLink = document.getElementById("register-link");
    const loginLink = document.getElementById("login-link");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("Username").value;
        const password = document.getElementById("password").value;
        // Xử lý đăng nhập  ở đây (chưa cần gọi đến backend)
        const usernamepattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!usernamepattern.test(username) || !passwordRegex.test(password)) {
            alert("Tên đăng nhập hoặc mật khẩu không hợp lệ, vui lòng nhập lại");
            return;
        }
        alert("Đăng nhập thành công!");
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const email = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const usernamepattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,}$/;
        if (!usernamepattern.test(newUsername)) {
            alert("Tên đăng nhập phải bắt đầu bằng chữ cái và có ít nhất 6 ký tự.");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("Mật khẩu không khớp. Vui lòng nhập lại.");
            return;
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Mật khẩu phải có ít nhất 8 ký tự, trong đó có ít nhất 1 chữ cái và 1 số.");
            return;
        }
        // Xử lý đăng ký ở đây (chưa cần gọi đến backend)
        alert("Đăng ký thành công!");
    });
});
