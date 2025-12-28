# 🚀 Zah Portfolio

A cutting-edge, serverless Next.js portfolio website for a Solana developer with a bold black-yellow-white color scheme.

## ✨ Features

- **Modern Design**: Ultra-modern, minimalist design with corporate tech fonts
- **Animations**: Smooth animations powered by Framer Motion
- **Glitch Effects**: Custom glitch effects on images and text
- **Custom Cursor**: Yellow glow trail cursor that follows mouse movement
- **Responsive**: Fully responsive design for all devices
- **Dark Mode**: Sleek dark theme throughout
- **Easter Egg**: Konami code triggers Solana token rain animation! 🎮

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles and Tailwind
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/
│   ├── sections/      # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Timeline.tsx
│   │   ├── Achievements.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── CustomCursor.tsx
│   ├── KonamiCode.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   └── NoiseOverlay.tsx
public/
└── assets/           # Images and logos
```

## 🎨 Color Palette

- **Primary Black**: `#0a0a0a`
- **Secondary Black**: `#111111`
- **Accent Yellow**: `#FFD700`
- **Accent Orange**: `#FFA500`
- **Pure White**: `#FFFFFF`

## 🎮 Easter Egg

Try entering the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Đoàn Đỗ Thành Danh (Zah)**
- GitHub: [@lilzahs](https://github.com/lilzahs)
- X: [@doandanh_zah](https://x.com/doandanh_zah)
- Telegram: [@doandanh_zah](https://t.me/doandanh_zah)
