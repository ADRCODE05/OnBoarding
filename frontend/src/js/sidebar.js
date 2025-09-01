import { getRole } from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
    // Tomamos el rol guardado al iniciar sesión
    const role = parseInt(getRole());
    console.log('Rol actual', role);
    

    switch(role) {  
        case 1:
            document.querySelectorAll(".role-Admin")
            .forEach(el => el.classList.remove("hidden"));
            break;
        case 2:
            document.querySelectorAll(".role-Empleado")
            .forEach(el => el.classList.remove("hidden"));
            break;
        case 3:
            document.querySelectorAll(".role-Talento-Humano")
            .forEach(el => el.classList.remove("hidden"));
            break;
        default:
            console.warn('Rol no definido o session expirada');
    }
});
