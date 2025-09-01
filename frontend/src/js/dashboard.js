import { API, getToken, logout } from "./auth.js";
import { showApp } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Mostrar "Cargando..." mientras verifica token
    showApp(false);

    const token = getToken();

    // Solo mostrar dashboard si hay token
    if (!token) {
        window.location.href = '../../index.html';
        return;
    }

    // Mostrar dashboard
    showApp(true);

    // Logout
    const logoutBtn = document.querySelector('#logoutBtn');
    if(logoutBtn) logoutBtn.addEventListener('click', logout);
    

    // Cargar cursos
    const courseForm = document.querySelector('#courseForm');
    if (courseForm) {
        const coursesModule = await import('./courses.js');
        coursesModule.loadCourses?.();
    }
});



const loadUserData = async () => {
    try {
        const res = await fetch(API('/me'), {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        if(!res.ok) {
            throw new Error('No se pudo obtener el usuario')
        }

        const user = await res.json()

        document.querySelectorAll('.userFullName').forEach(el => el.textContent = user.username || "Usuario")  
        document.querySelectorAll('.roleFullName').forEach(el => el.textContent = user.role || "Desconocido")  
    } catch (error) {
        console.error(error.message);
    }
}

document.addEventListener('DOMContentLoaded', loadUserData)