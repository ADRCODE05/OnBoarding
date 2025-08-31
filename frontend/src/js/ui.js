// Element helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// UI state based on token
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

document.addEventListener("DOMContentLoaded", () => {
  try { lucide?.createIcons(); } catch {}
  handleSidebar();
});
