import { API, getToken } from "./auth.js";  
import { showApp, showSection } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    (async () => {
        console.log("Cargando documentos de prueba...");

        // Mostrar app y sección
        showApp(true);
        showSection("documentsContent");

        const token = getToken();
        if (!token) {
            window.location.href = "../../index.html";
            return;
        }

        // Traer usuario
        try {
            const userRes = await fetch(API("/me"), {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (userRes.ok) {
                const user = await userRes.json();
                document.querySelectorAll(".userFullName")
                    .forEach(el => el.textContent = user.username || "Usuario");
                document.querySelectorAll(".roleFullName")
                    .forEach(el => el.textContent = user.role || "Desconocido");
            }
        } catch (err) {
            console.error("Error cargando usuario:", err);
        }

        // Mock de documentos
        const mockDocuments = [
            {
                title: "Reglamento Interno 2025",
                category: "Políticas Internas",
                updated: "Hace 2 días",
                icon: "file-text",
                color: "blue"
            },
            {
                title: "Proceso de Contratación",
                category: "Procesos",
                updated: "Hace 1 semana",
                icon: "workflow",
                color: "green"
            },
            {
                title: "Manual de Seguridad",
                category: "Manuales",
                updated: "Hace 3 semanas",
                icon: "book",
                color: "purple"
            }
        ];

        const container = document.querySelector("#documentsContent .mt-8 .space-y-4");
        if (container) {
            container.innerHTML = mockDocuments.map(doc => `
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="bg-${doc.color}-50 p-2 rounded-lg">
                            <i data-lucide="${doc.icon}" class="h-5 w-5 text-${doc.color}-600"></i>
                        </div>
                        <div>
                            <h4 class="font-medium text-gray-900">${doc.title}</h4>
                            <p class="text-sm text-gray-500">Actualizado ${doc.updated} • ${doc.category}</p>
                        </div>
                    </div>
                    <button class="text-blue-600 hover:text-blue-800">
                        <i data-lucide="external-link" class="h-4 w-4"></i>
                    </button>
                </div>
            `).join("");
        }

        if (window.lucide) {
            lucide.createIcons();
        }
    })();
});
