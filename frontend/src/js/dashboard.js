import { getToken, logout } from "./auth.js";
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
        const coursesModule = await import('../pages/courses.js');
        coursesModule.loadCourses?.();
    }
});
