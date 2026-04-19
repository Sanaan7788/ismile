# iSmile Technologies | Marketing Website

A premium, modern, and fully responsive marketing landing page for iSmile Technologies. Built with a sleek dark-mode aesthetic, glowing neon meshes, glassmorphism, and dynamic scroll animations to give the feel of a next-generation Enterprise AI platform.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4)
- **Animations**: Framer Motion
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts)

## 💻 Getting Started

Follow these steps to run the project locally.

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

### 3. View the Site
Once the server has started, open your browser and navigate to:
**http://localhost:3000**

## 📂 Project Structure

- `docs/`: Contains the single source of truth for the website's content and design tokens (`CONTENT.json`, `DESIGN_SYSTEM.json`, `SITEMAP.md`).
- `src/app/`: Next.js App Router files. `page.tsx` renders the main homepage. `globals.css` contains all the custom Tailwind theme variables and glassmorphism utilities.
- `src/components/sections/`: Contains all the modular UI sections that make up the website:
  - `Header.tsx` & `Footer.tsx`
  - `Hero.tsx`
  - `ValueProp.tsx`
  - `Services.tsx` & `Products.tsx`
  - `Insights.tsx` & `WhatWeThink.tsx`
  - `CustomerStories.tsx` & `Partners.tsx`
  - `Contact.tsx`

## ✨ Key Design Features
- **Glassmorphism**: Translucent cards (`.glass-card`) and navigation overlays with background blurs.
- **Neon Meshes**: Animated, glowing gradient orbs in the background of primary sections.
- **Scroll Reveals**: Elements fade and slide into view as the user scrolls down the page via Framer Motion.
- **Fully Responsive**: Adapts fluidly from small mobile screens (360px) up to large desktop monitors.
