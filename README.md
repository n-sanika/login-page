# Aurum — Demo Login Page

A polished, dark-themed login page built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just clean, well-structured frontend code.

---
## 🌐 Live Demo
👉 [View Live](https://n-sanika.github.io/login-page/)

---
## 📁 Project Structure

```
login-page/
├── index.html   — Page markup and structure
├── style.css    — All styles, variables, animations
├── script.js    — Form validation and interaction logic
└── README.md    — This file
```

---

## ✨ Features

- **Two-panel layout** — decorative left panel with geometric SVG art + clean right-side form
- **Dark luxury theme** — charcoal backgrounds, warm gold (`#c8a97e`) accents, grain overlay
- **Google Fonts** — Playfair Display (headings) + DM Sans (body)
- **Form validation**
  - Real-time validation on input blur
  - Full validation on submit
  - Clear, inline error messages
- **Password toggle** — show/hide with animated eye icon swap
- **Loading state** — spinner animation on the submit button during async login
- **Success overlay** — smooth fade-in confirmation screen after login
- **Remember me** checkbox + Forgot password link
- **Responsive** — single-column layout on screens ≤ 600px

---

## 🚀 Getting Started

No build step required. Just open the file directly in your browser:

```bash
# Option 1 — open directly
open index.html

# Option 2 — use a local dev server (recommended)
npx serve .
# or
python3 -m http.server 3000
```

Then visit `http://localhost:3000` in your browser.

---

## 🔧 Customisation

### Change brand name / copy
Edit the text inside `index.html` — look for `Aurum`, the panel tagline, and form labels.

### Change colours
All colours are CSS custom properties at the top of `style.css`:

```css
:root {
  --bg:      #0d0d0f;   /* page background */
  --card:    #131316;   /* form card */
  --border:  #242428;   /* borders */
  --accent:  #c8a97e;   /* gold accent */
  --accent2: #e8c99e;   /* lighter gold (hover) */
  --text:    #f0ece4;   /* primary text */
  --muted:   #6b6860;   /* secondary text */
  --error:   #e07070;   /* error red */
}
```

### Connect to a real backend
In `script.js`, replace the `simulateLogin()` function with a real `fetch` call:

```js
async function simulateLogin(credentials) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  return res.json();
}
```

---

## 🌐 Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No polyfills needed.

---

## 📄 License

Free to use for personal and commercial projects.
