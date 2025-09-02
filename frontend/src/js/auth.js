const API = path => `https://onboarding-5-75gc.onrender.com/api/v1${path}`;

function saveToken(t) { localStorage.setItem('token', t); }
function saveRole(r) { localStorage.setItem('role', r); }
function getToken() { return localStorage.getItem('token'); }
function getRole() { return localStorage.getItem('role'); }


function logout() { 
  localStorage.removeItem('token'); 
  localStorage.removeItem('role')
  window.location.href = "/dashboard"
;
}

export { saveToken, getToken, saveRole, getRole, logout, API };
