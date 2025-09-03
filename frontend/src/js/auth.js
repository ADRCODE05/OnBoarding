const API = path => `https://onboarding-5-75gc.onrender.com/api/v1${path}`;

function saveToken(t) { localStorage.setItem('token', t); }
function saveRole(r) { localStorage.setItem('role', r); }
function getToken() { return localStorage.getItem('token'); }
function getRole() { return localStorage.getItem('role'); }

function logout() { 
  localStorage.removeItem('token'); 
  localStorage.removeItem('role');
  // Intenta /login, si falla (404), redirige a /index
  fetch('/login', { method: 'HEAD' }).then(res => {
    if (res.ok) {
      window.location.href = '/login';
    } else {
      window.location.href = '/index';
    }
  }).catch(() => {
    window.location.href = '/index';
  });
}

export { saveToken, getToken, saveRole, getRole, logout, API };