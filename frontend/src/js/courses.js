import { getToken, API } from "./auth.js";
import { showApp, showSection } from "./ui.js";


const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// CARGAR CURSOS
async function loadCourses() {
  const courseGrid = document.querySelector("#coursesGrid");
  if (!courseGrid) return;

  courseGrid.innerHTML = `<p class="text-gray-700">Cargando cursos...</p>`;

  try {
    const userRes = await fetch(API('/me'), {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
    if(userRes.ok) {
      const user = await userRes.json()
      $$(".userFullName").forEach(el => el.textContent = user.username || "Usuario");
      $$(".roleFullName").forEach(el => el.textContent = user.role || "Desconocido"); 
  }

  
    const res = await fetch(API("/courses"), {
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    if (!res.ok) throw new Error("Erro al cargar los cursos");

    const data = await res.json();
    renderCoursesCard(data);
  } catch (err) {
    console.error(err);
    courseGrid.innerHTML = `<p class="text-red-600">Error al cargar cursos</p>`;
  } finally {
    showApp(true)
  }
}

function getStateText(stateId) {
  switch (stateId) {
    case 1:
      return "Publicado";
    case 2:
      return "Borrador";
    default:
      return "Desconocido";
  }
}


// renderizar cursos
function renderCourseCard(c) {
  const statusText = getStateText(c.state_id); // Obtiene el texto del estado
  const isPublished = c.state_id === 1; // Compara con el número
  return `
  <div class="bg-white rounded-xl shadow-sm p-6 hover-scale transition-transform">
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-lg font-semibold text-gray-900">${escapeHtml(
        c.title
      )}</h3>
      <span class="text-xs px-2 py-1 rounded-full ${
        isPublished
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-700"
      }">
        ${statusText}
      </span>
    </div>
    <p class="text-gray-600 mb-4">${escapeHtml(c.description)}</p>
    <div class="text-sm text-gray-500 flex items-center justify-between">
      <span>Duración: ${escapeHtml(c.duration)}</span>
      <span>Typee: ${escapeHtml(c.type_id)}</span>
    </div>
  </div>`;
}

function renderCoursesCard(courses) {
  const courseGrid = document.querySelector("#coursesGrid");
  courseGrid.innerHTML = courses.map(renderCourseCard).join("");
}

// Escampe HTML
function escapeHtml(s = "") {
  return String(s).replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&quot;",
        "'": "&#39;",
      }[m])
  );
}

const courseForm = document.querySelector("#courseForm");
if (courseForm) {
  courseForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const body = {
      title: document.querySelector("#courseTitle").value.trim(),
      description: document.querySelector("#courseDescription").value.trim(),
      duration: document.querySelector("#courseDuration").value.trim(),
    };

    try {
      const res = await fetch(API("/courses/create"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("No se pudo crear el curso");
      loadCourses();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  });
}



document.addEventListener('DOMContentLoaded', () => {
  showSection('coursesContent')
  loadCourses()
})
