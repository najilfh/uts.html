document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = ""; // Bersihkan pesan error sebelumnya

    const loginData = {
        username: username,
        password: password
    };

    try {
        const response = await fetch("https://simanis.ith.ac.id/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        const result = await response.json();

        if (response.ok) {
            localStorage.setItem("token", result.token || "dummyToken");
            alert("Login berhasil!");
            window.location.href = "home.html";
        } else {
            errorMessage.textContent = "Login gagal: " + (result.message || "Username atau password salah");
        }
    } catch (error) {
        console.error("Error:", error);
        errorMessage.textContent = "Terjadi kesalahan: " + error.message;
    }
});
