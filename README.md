# 🧑‍💻 Vivek Kumar Singh — Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel)

### Full-Stack Developer • Real-Time Systems • Competitive Programmer

A personal portfolio site built with React, TypeScript, and Framer Motion — featuring smooth scroll-triggered animations, an intro video hero, and a project showcase.

</div>

---

# 🌐 Live Demo

### 🚀 Deployment

https://vivekkumarsingh.vercel.app/

---

# 📌 Overview

This is my personal developer portfolio — a single-page site introducing who I am, what I do, and the projects I've built. It's designed with a dark, minimal aesthetic, smooth fade-in scroll animations, and a video-driven hero section.

---

# ✨ Sections

## 🎬 Hero

- Full-viewport intro with animated typography
- Embedded intro video (`intro.mp4`) with a modal player
- Magnetic hover effects on interactive elements

---

## 👤 About

- Short bio and background
- Highlights full-stack + competitive programming identity

---

## 🛠️ Services

- **Full Stack Development** — MERN stack apps with secure auth and modern UI
- **Real-Time Systems** — Low-latency multiplayer & chat features with Socket.IO and WebRTC
- **Competitive Programming** — 600+ DSA problems solved across LeetCode and CodeChef
- **UI/UX Design** — Clean, intuitive interface design
- **API & Payment Integration** — RESTful APIs, Razorpay payments, Brevo SMTP
- **Cloud Deployment & DevOps** — Docker containerization, deployment on Vercel and Render

---

## 📁 Projects

- Showcases flagship projects: **DSABattle**, **Eventara**, and **Zync**
- Includes project screenshots and live/repo links per project

---

## 📬 Contact

- Direct contact cards for Email, WhatsApp, LinkedIn, and GitHub
- Each card links out directly (mailto, wa.me, profile URLs)

---

# 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

**Other libraries:** `lucide-react` for icons, custom `FadeIn` and `Magnet` components for scroll and hover animations.

---

# 🏗️ Project Structure

```bash
VivekPortfolio/
├── public/
│   ├── DSABattle1.png / DSABattle2.png / DSABattle3.png
│   ├── Eventara1.png / Eventara2.png / Eventara3.png
│   ├── Zync1.png / Zync2.png / Zync3.png
│   └── intro.mp4
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── ContactButton.tsx
│   │   ├── FadeIn.tsx
│   │   ├── LiveProjectButton.tsx
│   │   ├── Magnet.tsx
│   │   ├── MarqueeSection.tsx
│   │   └── VideoModal.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── vite.config.ts
├── vercel.json
└── package.json
```

---

# 🚀 Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/vivekKumarSingh4545/VivekPortfolio.git
cd VivekPortfolio
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Run Locally

```bash
npm run dev
```

The site runs at `http://localhost:5173` (default Vite port).

## 4. Build for Production

```bash
npm run build
npm run preview
```

## 5. Deploy

This project is configured for **Vercel** deployment (`vercel.json` included) — connect the repo to Vercel for automatic builds on push.

---

# 🎨 Design Notes

- Dark theme (`#0C0C0C` background, `#D7E2EA` foreground) with a minimal, editorial typographic style
- Section headings use large, responsive `clamp()`-based font sizing
- Scroll-triggered fade-in animations via a reusable `FadeIn` wrapper (Framer Motion)
- Magnetic cursor-follow interaction on select elements (`Magnet.tsx`)
- Rounded section transitions (`rounded-t-[...]`) for a smooth visual flow between sections

---

# 💡 Future Improvements

- [ ] Blog / writing section
- [ ] Dark/light theme toggle
- [ ] Case-study style deep dives per project
- [ ] Contact form with direct email delivery (in addition to contact links)
- [ ] Resume download button

---

# 👨‍💻 Author

### Vivek Kumar Singh
Full-Stack Development • Real-Time Systems • Competitive Programming

## 🔗 Connect With Me

- **Email:** vivekkumarsingh4545@gmail.com
- **GitHub:** https://github.com/vivekKumarSingh4545
- **LinkedIn:** https://www.linkedin.com/in/vivekkumarsingh4545/
- **WhatsApp:** +91 88878 06458

---

# 📜 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this portfolio interesting, consider giving the repo a star.
