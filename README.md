# Anirudh Pilla — Software Development Engineer Portfolio

A modern, high-performance portfolio website built with React, TypeScript, Vite, and Tailwind CSS showcasing production microservices experience, distributed systems architecture (Boltticket, Facttwin, Akrivia HCM), system simulations, and technical capabilities.

---

## 🚀 Quick Deployment Guide

### Option 1: Direct GitHub + Vercel Dashboard (Recommended)

1. **Push to GitHub**:
   - In Google AI Studio, click the **Settings / Menu icon (top right)** and select **Export to GitHub** (or download as ZIP and push to your GitHub repo):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Anirudh Pilla SDE Portfolio"
   git branch -M main
   git remote add origin https://github.com/anirudhpilla/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Navigate to [vercel.com/new](https://vercel.com/new) and log in with your GitHub account.
   - Click **Import** next to your `portfolio` repository.
   - Vercel automatically detects the Vite framework settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **Deploy**. Your portfolio will be live in under a minute with automatic SSL, global CDN edge caching, and continuous deployment on every git push!

---

### Option 2: Deploy Using Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Run the deployment command from your project root:
   ```bash
   vercel
   ```

3. To deploy directly to production:
   ```bash
   vercel --prod
   ```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, Tailwind CSS, Motion animations, Lucide React icons
- **Build System**: Vite 6, esbuild
- **Architecture**: Single Page Application (SPA) with Vercel Edge CDN rewrites
- **Custom Components**:
  - Interactive Redis/SQL performance simulator & latency visualizer
  - Architecture breakdown of Facttwin & Boltticket (955 RPS, Redis Lua locks)
  - Printable / Copy-ready interactive Resume Modal
  - Interactive Project Showcase & System Design Diagrams
