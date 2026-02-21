/* ===========================
   Aurum Login Page — script.js
   =========================== */

// ── DOM References ──────────────────────────────────────────
const form           = document.getElementById('loginForm');
const emailInput     = document.getElementById('email');
const passInput      = document.getElementById('password');
const emailErr       = document.getElementById('emailErr');
const passErr        = document.getElementById('passErr');
const loginBtn       = document.getElementById('loginBtn');
const togglePass     = document.getElementById('togglePass');
const successOverlay = document.getElementById('successOverlay');
const eyeIcon        = document.getElementById('eyeIcon');

// ── SVG icon paths ──────────────────────────────────────────
const EYE_OPEN = `
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>
`;

const EYE_OFF = `
  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8
           a18.45 18.45 0 0 1 5.06-5.94
           M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8
           a18.5 18.5 0 0 1-2.16 3.19
           m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
  <line x1="1" y1="1" x2="23" y2="23"/>
`;

// ── State ───────────────────────────────────────────────────
let passVisible = false;

// ── Password visibility toggle ───────────────────────────────
togglePass.addEventListener('click', () => {
  passVisible = !passVisible;
  passInput.type      = passVisible ? 'text' : 'password';
  eyeIcon.innerHTML   = passVisible ? EYE_OFF : EYE_OPEN;
});

// ── Validation helpers ───────────────────────────────────────
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidPassword(value) {
  return value.length >= 6;
}

function clearErrors() {
  [emailInput, passInput].forEach(el => el.classList.remove('invalid'));
  [emailErr,   passErr  ].forEach(el => el.classList.remove('show'));
}

function validateAll() {
  let valid = true;
  clearErrors();

  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailErr.classList.add('show');
    valid = false;
  }

  if (!isValidPassword(passInput.value)) {
    passInput.classList.add('invalid');
    passErr.classList.add('show');
    valid = false;
  }

  return valid;
}

// ── Live validation on blur ──────────────────────────────────
emailInput.addEventListener('blur', () => {
  if (!emailInput.value) return;
  const ok = isValidEmail(emailInput.value);
  emailInput.classList.toggle('invalid', !ok);
  emailErr.classList.toggle('show', !ok);
});

passInput.addEventListener('blur', () => {
  if (!passInput.value) return;
  const ok = isValidPassword(passInput.value);
  passInput.classList.toggle('invalid', !ok);
  passErr.classList.toggle('show', !ok);
});

// ── Clear error styling on input ─────────────────────────────
emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('invalid') && isValidEmail(emailInput.value)) {
    emailInput.classList.remove('invalid');
    emailErr.classList.remove('show');
  }
});

passInput.addEventListener('input', () => {
  if (passInput.classList.contains('invalid') && isValidPassword(passInput.value)) {
    passInput.classList.remove('invalid');
    passErr.classList.remove('show');
  }
});

// ── Form submit ───────────────────────────────────────────────
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!validateAll()) return;

  // Show loading state
  loginBtn.classList.add('loading');
  loginBtn.disabled = true;

  // Simulate an async API call (replace with real fetch in production)
  await simulateLogin({
    email:    emailInput.value.trim(),
    password: passInput.value,
    remember: document.getElementById('remember').checked,
  });

  // Show success overlay
  loginBtn.classList.remove('loading');
  successOverlay.classList.add('show');
});

// ── Simulated async login ─────────────────────────────────────
function simulateLogin(credentials) {
  console.log('Attempting login with:', credentials.email);
  return new Promise(resolve => setTimeout(resolve, 1800));
}
