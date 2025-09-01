// report.js
import { getToken, API } from "./auth.js";
import { showApp, showSection } from "./ui.js";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Renderizar filas de empleados
function renderEmployeeRow(emp) {
    const hours = Number(emp.total_duration?.hours) || 0
    const minutes = Number(emp.total_duration?.minutes) || 0;
    const totalHours = (hours + minutes / 60).toFixed(1);
    return `
        <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-4">${emp.name}</td>
        <td class="py-3 px-4">${emp.courses}</td>
        <td class="py-3 px-4">${emp.completed}</td> 
        <td class="py-3 px-4">${totalHours}h</td>
        <td class="py-3 px-4">
            <span class="px-2 py-1 text-xs rounded-full ${
            emp.status?.includes('Completado')
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }">${emp.status || 'Sin estado'}</span>
        </td>
        </tr>
    `;
}

function renderEmployeeReports(data) {
    const tableBody = $("#employeeReportsTable");
    if (!tableBody) return;
    tableBody.innerHTML = data.map(renderEmployeeRow).join("");
}

// Cargar reportes
async function loadReports() {
    const token = getToken();
    if (!token) {
        window.location.href = "../../index.html";
        return;
    }

    try {
        const userRes = await fetch(API('/me'), {
            headers: { Authorization: `Bearer ${token}` }
        })

        if(userRes.ok) {
            const user = await userRes.json()
            $$(".userFullName").forEach(el => el.textContent = user.username || "Usuario");
            $$(".roleFullName").forEach(el => el.textContent = user.role || "Desconocido"); 
        }

        const res = await fetch(API(`/reports`), {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Error al cargar reportes");
        const data = await res.json();
        console.log("DATA REPORTS:", data);
        renderEmployeeReports(data || []);

        // Mostrar contenido
        showSection("reportsContent")
        showApp(true);
    } catch (err) {
        console.error(err);
        $("#employeeReportsTable").innerHTML =
        `<tr><td colspan="7" class="text-center py-4 text-red-600">Error al cargar reportes</td></tr>`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    loadReports();
});
