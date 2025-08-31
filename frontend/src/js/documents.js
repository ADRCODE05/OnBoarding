// ../pages/documents.js
import { getToken, API } from "./auth.js"; // Ajusta la ruta según tu proyecto

export async function loadDocuments() {
    const section = document.querySelector('.section[data-section="documents"]');
    if (!section) return;

    // Mostrar mensaje de carga
    section.innerHTML = `<p class="text-gray-700">Cargando documentos...</p>`;

    try {
        const res = await fetch(API("/documents"), {
            headers: { Authorization: `Bearer ${getToken()}` }
        });

        if (!res.ok) throw new Error("Error al cargar documentos");

        const data = await res.json();

        // Renderizar documentos
        section.innerHTML = data.map(doc => `
            <div class="bg-white shadow rounded p-4 mb-3">
                <strong>${doc.name}</strong> - ${doc.type}
            </div>
        `).join('');

    } catch (err) {
        console.error(err);
        section.innerHTML = `<p class="text-red-600">No se pudieron cargar los documentos</p>`;
    }
}
