# gladyslopez.github.io

Personal academic portfolio website for **Gladys Lopez-Acevedo**, Global Lead for the Distributional Impacts of Markets and Institutions at the World Bank.

🌐 Live at: [gladyslopezacevedo.com](https://gladyslopezacevedo.com)

---

## About

This site showcases Gladys's academic and professional work including her biography, publications, CV, and other activities. It was built with React and Vite and is hosted on GitHub Pages with a custom domain via Namecheap.

---

## Pages

- **Home** — Bio, stats, research areas, contact info, and latest work
- **Publications** — Peer reviewed books, journal articles, and forthcoming work (auto-enriched via OpenAlex API)
- **Other** — Work in progress, blog posts, lending projects, distinctions, and certifications
- **CV** — Visual preview and download of her curriculum vitae

---

## Tech Stack

- React 18
- Vite
- GitHub Actions (CI/CD)
- GitHub Pages (hosting)
- Namecheap (custom domain)
- OpenAlex API (publication links)

---

## Project Structure

```
src/
├── components/
│   ├── Accordion.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Publications.jsx
│   ├── Other.jsx
│   └── CV.jsx
├── App.jsx
└── App.css
public/
├── images/
│   ├── Mom_photo.webp
│   ├── oaxaca.jpg
│   ├── book.jpg
│   └── cv.png
```

---

## Updating Content

All content is managed directly in the page files under `src/pages/`. No backend or CMS required.

| What to update | Where |
|---|---|
| Bio, photo, stats, contact | `src/pages/Home.jsx` |
| Publications | `src/pages/Publications.jsx` |
| Blog posts, projects, WIP | `src/pages/Other.jsx` |
| CV preview images | `src/pages/CV.jsx` |
| Footer links | `src/components/Footer.jsx` |
| Colors and fonts | `src/App.css` |

---

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Push to `main` — GitHub Actions automatically builds and deploys to GitHub Pages.

```bash
git add .
git commit -m "your message"
git push
```
