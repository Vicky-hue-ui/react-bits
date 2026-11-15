<div align="center">

# ✨ React Bits

**A stunning, interactive image gallery built with React & Vite**

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br/>

> 🎨 Experience the magic of **ChromaGrid** — a beautifully crafted, interactive image grid  
> with spotlight reveals, color transitions, and glowing accents.

<br/>

</div>

---

## 🌟 Features

| Feature | Description |
|---------|-------------|
| 🔦 **Spotlight Reveal** | Mouse-following radial spotlight that reveals full-color images from grayscale |
| 🎨 **Accent Glow** | Per-card accent colors with animated border glow and background wash |
| 🖼️ **Responsive Grid** | Auto-fitting grid layout with configurable columns, gap, and minimum card width |
| 🌓 **Dark & Light Themes** | Built-in theme support with carefully tuned color palettes |
| ⚡ **Buttery Smooth** | 60fps animation loop with exponential damping and reduced-motion support |
| 🧩 **Highly Configurable** | 15+ props to customize every visual aspect of the grid |

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Vicky-hue-ui/react-bits.git

# Navigate into the project
cd react-bits

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app in your browser.

---

## 📁 Project Structure

```
react-bits/
├── public/               # Static assets (images)
│   ├── gym.jpg
│   ├── london.jpg
│   ├── nature.jpg
│   ├── sea.jpg
│   ├── starfish.jpg
│   └── tiger.jpg
├── src/
│   ├── assets/           # App assets (SVGs, PNGs)
│   ├── component/
│   │   ├── ChromaGrid.jsx   # ✨ The star component
│   │   └── ChromaGrid.css   # Styling & animations
│   ├── App.jsx           # Main app with grid configuration
│   ├── App.css           # App-level styles
│   ├── index.css         # Global styles & CSS variables
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint rules
└── package.json
```

---

## 🎛️ ChromaGrid Props

The `ChromaGrid` component accepts the following props for full customization:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | Sample data | Array of card objects (`{ image, title, subtitle, accent }`) |
| `columns` | `Number` | `3` | Maximum number of columns |
| `minCardWidth` | `Number` | `180` | Minimum card width in pixels |
| `gap` | `Number` | `12` | Gap between cards in pixels |
| `radius` | `Number` | `260` | Spotlight radius in pixels |
| `softness` | `Number` | `0.6` | Spotlight edge softness (0–1) |
| `damping` | `Number` | `0.45` | Mouse-follow smoothing factor |
| `fadeOut` | `Number` | `0.6` | Fade-out duration when pointer leaves |
| `grayscale` | `Number` | `1` | Grayscale intensity for inactive cards (0–1) |
| `dim` | `Number` | `0.12` | Dimming intensity for inactive cards (0–0.9) |
| `glow` | `Number` | `0.5` | Background glow intensity (0–1) |
| `borderGlow` | `Number` | `1` | Border glow intensity (0–1) |
| `reveal` | `String` | `"spotlight"` | Reveal mode: `"spotlight"` or `"card"` |
| `aspectRatio` | `String` | `"3 / 2"` | Card aspect ratio |
| `cardRadius` | `Number` | `22` | Card border radius in pixels |
| `showInfo` | `Boolean` | `true` | Show title and subtitle below image |
| `frame` | `Boolean` | `false` | Wrap grid in a frosted-glass frame |
| `theme` | `String` | `"dark"` | Color theme: `"dark"` or `"light"` |

### Usage Example

```jsx
import ChromaGrid from './component/ChromaGrid';

const items = [
  {
    image: 'gym.jpg',
    title: 'Gym',
    subtitle: 'Fitness',
    accent: '#ffd23f'
  },
  {
    image: 'london.jpg',
    title: 'London',
    subtitle: 'City of Dreams',
    accent: '#3fb8ff'
  }
];

function App() {
  return (
    <ChromaGrid
      items={items}
      columns={3}
      radius={260}
      reveal="spotlight"
      glow={0.5}
      borderGlow={1}
      grayscale={1}
    />
  );
}
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## 🧰 Built With

- **[React 19](https://react.dev)** — UI library
- **[Vite 8](https://vitejs.dev)** — Lightning-fast build tool
- **[ESLint](https://eslint.org)** — Code quality & linting
- **CSS Custom Properties** — Theming & animation engine

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by [Vicky](https://github.com/Vicky-hue-ui)**

⭐ Star this repo if you found it useful!

</div>
