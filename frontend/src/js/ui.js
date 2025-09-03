// Element helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// Obtiene el rol del usuario desde localStorage (ajusta según tu lógica)
function getUserRole() {
  return localStorage.getItem('role') || 'Admin';
}

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

// MARCAR EL MÓDULO ACTIVO EN EL SIDEBAR SEGÚN ROL
export function setActiveModule(moduleName) {
  const role = getUserRole();
  let activeClasses, inactiveClasses;

  if (role === 'Admin') {
    activeClasses = ["text-blue-600", "bg-blue-50", "border-r-2", "border-blue-600"];
    inactiveClasses = ["text-gray-700"];
  } else if (role === 'Employee') {
    activeClasses = ["text-green-600", "bg-green-50", "border-r-2", "border-green-600"];
    inactiveClasses = ["text-gray-700"];
  } else {
    // Otros roles o default
    activeClasses = ["text-gray-900", "bg-gray-50", "border-r-2", "border-gray-600"];
    inactiveClasses = ["text-gray-700"];
  }

  $$("#sidebar .nav-item").forEach(link => {
    link.classList.remove(...activeClasses);
    link.classList.add(...inactiveClasses);
  });

  // Busca el link correspondiente
  const activeLink = $(`#sidebar .nav-item[href*="${moduleName.replace("Content","").replace(".html","")}"]`);
  if (activeLink) {
    activeLink.classList.add(...activeClasses);
    activeLink.classList.remove(...inactiveClasses);
  }
}

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
  try { lucide?.createIcons(); } catch {}
  handleSidebar();

  // Marca el módulo activo en el sidebar según la url actual y el rol
  const path = window.location.pathname.split("/").pop();
  const role = getUserRole();

  let activeClasses, inactiveClasses;
  if (role === 'Admin') {
    activeClasses = ["text-blue-600", "bg-blue-50", "border-r-2", "border-blue-600"];
    inactiveClasses = ["text-gray-700"];
  } else if (role === 'Employee') {
    activeClasses = ["text-green-600", "bg-green-50", "border-r-2", "border-green-600"];
    inactiveClasses = ["text-gray-700"];
  } else {
    activeClasses = ["text-gray-900", "bg-gray-50", "border-r-2", "border-gray-600"];
    inactiveClasses = ["text-gray-700"];
  }

  document.querySelectorAll("#sidebar .nav-item").forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add(...activeClasses);
      link.classList.remove(...inactiveClasses);
    } else {
      link.classList.remove(...activeClasses);
      link.classList.add(...inactiveClasses);
    }
  });
});