// Element helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));


export function showApp(isLogged) {
  const loading = $("#loadingScreen");
  const login = $("#loginScreen");
  const app = $("#mainApp");

  if (loading) loading.classList.add("hidden");
  if (isLogged) {
    login?.classList.add("hidden");
    app?.classList.remove("hidden");
  } else {
    if(app) app.classList.add("hidden");
    if(login) login.classList.remove("hidden");
  }
}

export function showSection(id) {
  // Oculta todas las secciones
  $$(".section-content").forEach(section => section.classList.add("hidden"));
  // Muestra la sección seleccionada
  const section = document.getElementById(id);
  if (section) {
    section.classList.remove("hidden");
  }
  // Actualiza el menú activo
  setActiveModule(id);
}

// Sidebar (solo abrir/cerrar)
function handleSidebar() {
  $("#openSidebar")?.addEventListener("click", () => {
    $("#sidebar")?.classList.remove("-translate-x-full");
    $("#sidebarOverlay")?.classList.remove("hidden");
  });
  $("#closeSidebar")?.addEventListener("click", () => {
    $("#sidebar")?.classList.add("-translate-x-full");
    $("#sidebarOverlay")?.classList.add("hidden");
  });
  $("#sidebarOverlay")?.addEventListener("click", () => {
    $("#sidebar")?.classList.add("-translate-x-full");
    $("#sidebarOverlay")?.classList.add("hidden");
  });
}

// MARCAR EL MÓDULO ACTIVO EN EL SIDEBAR
export function setActiveModule(moduleName) {
  // Limpia todos los nav-items del sidebar
  $$("#sidebar .nav-item").forEach(link => {
    link.classList.remove("text-blue-600", "bg-blue-50", "border-r-2", "border-blue-600");
    link.classList.add("text-gray-700");
  });

  // Busca el link correspondiente
  const activeLink = $(`#sidebar .nav-item[href*="${moduleName.replace("Content","").replace(".html","")}"]`);
  if (activeLink) {
    activeLink.classList.add("text-blue-600", "bg-blue-50", "border-r-2", "border-blue-600");
    activeLink.classList.remove("text-gray-700");
  }
}

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
  try { lucide?.createIcons(); } catch {}
  handleSidebar();

// Marca el módulo activo en el sidebar según la url actual
document.addEventListener("DOMContentLoaded", () => {
  // Obtiene el archivo actual, ej: dashboard.html, courses.html, etc
  const path = window.location.pathname.split("/").pop();

  // Recorre todos los enlaces del sidebar
  document.querySelectorAll("#sidebar .nav-item").forEach(link => {
    if (link.getAttribute("href") === path) {
      // Si es el link de la página actual, pinta como activo
      link.classList.add("text-blue-600", "bg-blue-50", "border-r-2", "border-blue-600");
      link.classList.remove("text-gray-700");
    } else {
      // Los demás quedan desactivados
      link.classList.remove("text-blue-600", "bg-blue-50", "border-r-2", "border-blue-600");
      link.classList.add("text-gray-700");
    }
  });
});
