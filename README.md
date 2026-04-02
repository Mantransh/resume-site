# Alex Morgan — Developer Portfolio

A modern, high-end developer portfolio built with **React 18 + Tailwind CSS**. Dark/light mode, smooth animations, fully responsive, accessible, and production-ready.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Design** | Dark-first, teal accent (`#00E5CC`), Syne + DM Sans + JetBrains Mono fonts |
| **Sections** | Hero · About · Skills · Experience · Projects · Education · Contact · Footer |
| **Dark/Light Mode** | Toggle with localStorage persistence + system preference detection |
| **Animations** | CSS keyframes + Intersection Observer entrance animations |
| **Responsive** | Mobile-first, breakpoints at 640px / 900px / 1100px |
| **Accessible** | Semantic HTML, ARIA labels, focus management, skip-to-content |
| **SEO** | Meta description, OG tags, semantic headings, clean URL anchors |
| **Performance** | Code-split sections, lazy animations, minimal JS |

---

## 🗂 Project Structure

```
resume-site/
├── index.html                  # HTML entry point + SEO meta
├── vite.config.js              # Vite config
├── tailwind.config.js          # Custom theme (fonts, colors, animations)
├── postcss.config.js
├── package.json
├── preview.html                # ✅ Standalone HTML demo (open directly in browser)
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Root layout + section assembly
    ├── index.css               # Tailwind layers + global styles
    ├── data/
    │   └── portfolio.js        # ✏️  ALL content lives here — edit this!
    ├── hooks/
    │   ├── useTheme.js         # Dark/light mode hook
    │   └── useInView.js        # Scroll-triggered animation hook
    └── components/
        ├── Navbar.jsx          # Sticky nav, mobile drawer, active section
        ├── Hero.jsx            # Name, title, avatar, CTAs, social links
        ├── About.jsx           # Bio, stats grid, quick info
        ├── Skills.jsx          # Animated progress bars, badge cloud
        ├── Experience.jsx      # Vertical timeline with achievements
        ├── Projects.jsx        # Filterable card grid
        ├── Education.jsx       # Degree + certifications
        ├── Contact.jsx         # Contact form + info cards
        ├── Footer.jsx          # Copyright, nav links, social icons
        ├── SectionDivider.jsx  # Decorative section separator
        └── ScrollToTop.jsx     # Floating scroll-up button
```

---

## 🚀 Quick Start (React app)

### Prerequisites
- Node.js v18+ 
- npm or yarn

### Install & Run

```bash
# 1. Unzip the source
unzip resume-portfolio-src.zip
cd resume-site

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`

---

## 🌐 Instant Preview (no install needed)

Open `preview.html` directly in any browser — it's a fully self-contained HTML file with zero dependencies. All sections, animations, theme toggle, and interactive features work out of the box.

---

## ✏️ Customizing Your Content

**All content is centralized in one file:**

```
src/data/portfolio.js
```

Edit these exported objects:

| Export | What it controls |
|---|---|
| `personal` | Name, title, email, social links, avatar initials |
| `about` | Bio paragraphs, stats, quick info |
| `skills` | Skill categories with progress levels |
| `techBadges` | Badge cloud items |
| `experience` | Work history timeline |
| `projects` | Project cards with tech stack |
| `education` | Degrees and certifications |

### Replacing the avatar
In `Hero.jsx`, replace the initials div with an `<img>` tag:
```jsx
<img src="/your-photo.jpg" alt="Your name" className="w-full h-full object-cover" />
```

### Connecting the contact form
The form is wired for demo purposes. To connect it, replace the `handleSubmit` function in `Contact.jsx` with your preferred service:
- [Formspree](https://formspree.io) — add `action` attribute
- [EmailJS](https://www.emailjs.com) — use their SDK
- Custom API endpoint — fetch POST

---

## 🎨 Customizing the Theme

Edit `tailwind.config.js`:

```js
colors: {
  accent: {
    DEFAULT: '#00E5CC',  // ← change this to your brand color
    dark: '#00BFA5',
    light: '#7FFFD4',
  },
}
```

Change fonts by updating the Google Fonts import in `index.html` and the `fontFamily` entries in `tailwind.config.js`.

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `react-icons` | Icon library (Fi, Hi icon sets) |
| `framer-motion` | (optional) Enhanced animations |
| `tailwindcss` | Utility-first CSS |
| `vite` | Build tool |

---

## 🚢 Deployment

Works on any static host. Recommended:

```bash
npm run build
# Deploy the /dist folder to:
# - Vercel: vercel deploy
# - Netlify: drag & drop /dist
# - GitHub Pages: gh-pages -d dist
```

---

## 📄 License

MIT — feel free to use as a template for your own portfolio.
