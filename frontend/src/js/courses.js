import { getToken, API } from "./auth.js";

async function loadCourses() {
  const courseGrid = document.querySelector("#coursesGrid");
  courseGrid.innerHTML = `<p class="text-gray-700">Cargando cursos...</p>`;

  try {
    const res = await fetch(API("/courses"), {
      headers: { Authorization: `Bearer ${getToken()}` }
    });

    if (!res.ok) throw new Error("Respuesta inesperada");
    const data = await res.json();
    renderCoursesCard(data);
  } catch (err) {
    console.error(err);
    courseGrid.innerHTML = `<p class="text-red-600">Error al cargar cursos</p>`;
  }
}


function renderCourseCard(c) {
  return `
  <div class="bg-white rounded-xl shadow-sm p-6 hover-scale transition-transform">
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-lg font-semibold text-gray-900">${escapeHtml(c.title)}</h3>
      <span class="text-xs px-2 py-1 rounded-full ${c.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}">
        ${c.status}
      </span>
    </div>
    <p class="text-gray-600 mb-4">${escapeHtml(c.description)}</p>
    <div class="text-sm text-gray-500 flex items-center justify-between">
      <span>Depto: ${escapeHtml(c.department)}</span>
      <span>Duración: ${escapeHtml(c.duration)}</span>
    </div>
  </div>`;
}

function escapeHtml(s='') {
  return String(s).replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","'":"&quot;","'":"&#39;"
  })[m]);
}

console.log('curso form ', document.querySelector("#courseForm")).addEventListener("submit", async (e) => {
  e.preventDefault();

  const body = {
    title: document.querySelector("#courseTitle").value.trim(),
    description: document.querySelector("#courseDescription").value.trim(),
    duration: document.querySelector("#courseDuration").value.trim(),
  };

  try {
    const res = await fetch(API("/courses"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) throw new Error("No se pudo crear el curso");
    closeModal();
    loadCourses();
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
});

