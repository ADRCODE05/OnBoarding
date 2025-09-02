import { getToken, API } from "./auth.js";
import { showApp, showSection } from "./ui.js";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function renderProfile(user) {
    if (!user) return;
    
    $("#profileName").textContent = user.username || "Nombre";
    $("#profileRole").textContent = user.role || "Cargo";
    $("#profileEmail").textContent = user.email || "email@ejemplo.com";

    $("#profileNameInput").value = user.username || "";
    $("#profileEmailInput").value = user.email || "";
    $("#profileCargoInput").value = user.role || "";
}

async function loadBasicUser() {
    try {
        const res = await fetch(API('/me'), {
            headers: { Authorization: `Bearer ${getToken()}` }
        });
        if (!res.ok) throw new Error("No se pudo obtener el usuario básico");

        const user = await res.json();
        $$(".userFullName").forEach(el => el.textContent = user.username || "Usuario");
        $$(".roleFullName").forEach(el => el.textContent = user.role || "Desconocido");
    } catch (err) {
        console.error(err.message);
    }
}



async function loadProfileData() {
    const token = getToken();
    if (!token) return;
    try {
        const res = await fetch(API('/profile'), {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error("No se pudo cargar la informacion del perfil.");
        const userData = await res.json();
        renderProfile(userData);
    } catch (err) {
        console.error("Error al cargar perfil:", err);
        $("#profileContent").innerHTML = `<p class="text-red-600">Error: No se pudo cargar el perfil.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const token = getToken();
    const isLogged = !!token;
    showApp(isLogged);  

    showSection('profileContent')



    if (isLogged) {
        loadProfileData();
        loadBasicUser()
    } else {
        window.location.href = "../../index.html";
    }
});
