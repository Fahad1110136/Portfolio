# 🌿 Muhammad Fahad Idrees — Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A cinematic dark-eco themed personal portfolio website built with React.js**

[🌐 Live Demo](https://muhammadfahadidrees.netlify.app) · [📬 Contact](mailto:fahadidrees1110136@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/fahadi-idrees) · [🐙 GitHub](https://github.com/Fahad1110136)

</div>

---

## ✨ Overview

A fully responsive, multiple-pages portfolio application built to showcase my work as a Computer Science undergraduate at FAST-NUCES, Lahore. Designed around a **dark eco theme** with emerald green glow accents, cinematic animations, and a professional formal interface — built entirely from scratch with no UI frameworks.

---

## 🖥️ Pages & Features

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section with typewriter animation, profile placeholder, floating tech tags, and a full contact strip |
| **About** | `/about` | Bio, personal background, and a comprehensive skills grid |
| **Education** | `/education` | Timeline layout of academic history |
| **Experience** | `/experience` | Professional freelance work history |
| **Academic Projects** | `/academic-projects` | University projects with animated project cards |
| **Personal Projects** | `/personal-projects` | Self-built projects with animated project cards |
| **Achievements** | `/achievements` | Scholarships, hackathon results, certifications |
| **Contact** | `/contact` | Clickable contact cards for all social and communication channels |

---

## 🎨 Design System

- **Theme:** Dark eco — deep forest blacks and greens (`#080c0a` base, `#22c55e` accent)
- **Typography:**
  - Display: `Syne` — bold, geometric headings
  - Monospace: `JetBrains Mono` — code labels and tags
  - Body: `Inter` — clean readable prose
- **Effects:** CSS noise texture overlay, radial glow orbs, grid dot background, hover glow-outs, float animations
- **Responsive:** Mobile-first layouts across all breakpoints with hamburger navigation

---

## 🗂️ Project Structure

```
fahad-portfolio/
├── public/
│   └── index.html                  # HTML shell with meta tags
├── src/
│   ├── index.js                    # React entry point
│   ├── App.jsx                     # Router setup and global layout
│   ├── styles/
│   │   └── global.css              # CSS variables, animations, shared utilities
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky top navigation with mobile menu
│   │   ├── Navbar.css
│   │   ├── ProjectCard.jsx         # Reusable project card (icon + description + tags)
│   │   └── ProjectCard.css
│   ├── data/
│   │   └── portfolioData.js        # Single source of truth for all portfolio content
│   └── pages/
│       ├── Home.jsx + Home.css
│       ├── About.jsx + About.css
│       ├── Education.jsx + Education.css
│       ├── Experience.jsx + Experience.css
│       ├── AcademicProjects.jsx    # Uses ProjectCard component
│       ├── PersonalProjects.jsx    # Uses ProjectCard component
│       ├── Projects.css            # Shared project page styles
│       ├── Achievements.jsx + Achievements.css
│       └── Contact.jsx + Contact.css
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Fahad1110136/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Outputs a production-ready bundle to the `build/` directory, ready to deploy on GitHub Pages, Vercel, Netlify, or any static host.

---

## 🖼️ Adding Your Profile Photo

1. Place your photo (e.g. `photo.jpg`) inside the `public/` folder
2. Open `src/pages/Home.jsx`
3. Find the `home__photo-placeholder` div and replace it with:

```jsx
<img
  src="/photo.jpg"
  alt="Muhammad Fahad Idrees"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px'
  }}
/>
```

---

## ✏️ Customising Content

All portfolio content is centralised in a single file:

```
src/data/portfolioData.js
```

Edit the exported objects — `personal`, `education`, `experience`, `academicProjects`, `personalProjects`, `skills`, `achievements` — to update any section across the entire site instantly.

---

## 📦 Tech Stack

- **React.js 18** — Component-based UI
- **React Router DOM v6** — Client-side page routing
- **Pure CSS3** — Custom properties, Grid, Flexbox, animations
- **Google Fonts** — Syne, JetBrains Mono, Inter

No Tailwind. No UI libraries. No Bootstrap. Everything is handcrafted.

---

## 📬 Contact

| Channel | Details |
|---------|---------|
| **Email** | [fahadidrees1110136@gmail.com](mailto:fahadidrees1110136@gmail.com) |
| **Phone** | +92 320 1480611 |
| **LinkedIn** | [linkedin.com/in/fahadi-idrees](https://www.linkedin.com/in/fahadi-idrees) |
| **GitHub** | [github.com/Fahad1110136](https://github.com/Fahad1110136) |
| **Location** | Samanabad, Lahore, Pakistan |

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to use it as inspiration for your own portfolio — a credit or star is always appreciated!

---

<div align="center">

Designed & built by **Muhammad Fahad Idrees** · CS @ FAST-NUCES, Lahore

</div>
