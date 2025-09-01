import { saveToken, API, saveRole } from "./auth.js";
import { showApp } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    // Mostrar login mientras se verifica
    showApp(false);

    // Toggle password
    const togglePassword = document.querySelector("#togglePassword");
    if(togglePassword) {
        togglePassword.addEventListener('click', () => {
        const input = document.querySelector('#loginPassword');
        if(!input) return;
        input.type = input.type === "password" ? "text" : "password";
        });
    }

    // Login form
    const loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.querySelector("#loginEmail").value.trim();
        const password = document.querySelector("#loginPassword").value;
        const btn = document.querySelector("#loginButton");
        if (btn) btn.disabled = true;

        try {
            const res = await fetch(API('/login'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Error de login');

            saveToken(data.token);
            saveRole(data.user.id_role)
            alert('Inicio de session correctamente')
            window.location.href = './src/pages/dashboard.html';
        } catch (error) {
            alert(error.message);
        } finally {
            if (btn) btn.disabled = false;
        }
        });
    }
});
