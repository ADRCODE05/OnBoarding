// Logout
import { logout } from "./auth";

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.querySelector('#logoutBtn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    } 
})