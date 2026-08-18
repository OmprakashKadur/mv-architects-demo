# MV Architects and Interiors — 3D Architecture & Marketing Platform

Award-quality 3D marketing website for **MV Architects and Interiors** (Bengaluru, Karnataka, India). Engineered for high local search visibility, lead conversion, and real-time WebGL spatial immersion.

---

## Key Features & Layers

- **Layer 1 — Procedural 3D Hero Scene (`@react-three/fiber` & `three`)**:
  - Atmospheric interior room shell with window light simulation, minimalist modular sofa, travertine coffee table, and architectural brass floor lamp.
  - Camera dolly & orbit tied to scroll progress.
  - Automatic fallback to high-resolution poster image on mobile (`<768px`), reduced-motion preference, or low hardware concurrency (`<4`).
  - Real DOM `<h1>` rendered above canvas for instant LCP score.

- **Layer 2 — 360° Walkthrough Panorama Viewer (`@react-three/drei`)**:
  - Interactive spherical panorama viewer on project detail pages (`/projects/[slug]`).
  - Damped `OrbitControls` with autorotate until user drag.
  - Interactive 3D HTML Hotspots revealing material specifications, dimensions, and finishes.
  - Multi-room switcher tabs (e.g. Central Atrium vs Culinary Studio).
  - Arrow-key keyboard rotation for accessibility.

- **Layer 3 — Cinematic Scroll & Design System**:
  - Lenis smooth scrolling with reduced-motion support.
  - Responsive project showcase rail (horizontal on desktop, vertical stack on mobile).
  - Interactive Before & After comparison slider.
  - Curated architectural design tokens: `Bone #F4F1EC`, `Charcoal #1C1A19`, `Clay #A8624A`, `Brass #C9A227`, `Stone #8A857E`.
  - Custom fine-pointer architectural ring cursor.

- **Lead Conversion & SEO**:
  - Zod-validated Indian lead form (10-digit mobile, property type, budget, locality, honeypot).
  - Direct WhatsApp fast-track prefilled lead redirect.
  - Sticky mobile action bar with direct "Call Studio" and "WhatsApp" triggers.
  - Complete JSON-LD Schemas: `LocalBusiness`, `InteriorDesigner`, `FAQPage`, `BreadcrumbList`, and `Article`.
  - Dynamic `sitemap.xml` and `robots.txt`.

---

## How to Customize Assets

### 1. Swapping Project Photography
All project content and image URLs are centralized in [`src/content/projects.ts`](src/content/projects.ts).
- Replace `heroImage`, `galleryImages`, and `beforeAfter` URLs with your 2000px WebP photography.

### 2. Dropping in a Custom 3D GLB Room Model
Place your Draco-compressed GLB model in `/public/models/room.glb`. In [`src/components/3d/HeroScene.tsx`](src/components/3d/HeroScene.tsx), use `@react-three/drei`'s `useGLTF('/models/room.glb')` inside a `<Suspense>` boundary.

### 3. Adding Real 360° Panorama Photographs
Shoot equirectangular panoramas (2:1 ratio, 4096×2048) with an Insta360 or 360° camera.
Update the `panoramas` array in [`src/content/projects.ts`](src/content/projects.ts) with your URLs and custom 3D hotspot coordinates.

### 4. Studio Information & Contact Details
Update studio address, coordinates, phone numbers, WhatsApp, and social handles in [`src/content/studio.ts`](src/content/studio.ts).

### 5. Resend / CRM Integration
To deliver lead submissions directly via email or CRM, wire your webhook or Resend API key inside [`src/components/contact/EnquiryForm.tsx`](src/components/contact/EnquiryForm.tsx) in the `onSubmit` handler.

---

## Deployment to GitHub Pages

The repository includes an automated GitHub Actions deployment workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. In GitHub repo **Settings > Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`:
   ```bash
   git add .
   git commit -m "Deploy MV Architects & Interiors 3D website"
   git push origin main
   ```
3. Live URL: **`https://omprakashkadur.github.io/mv-architects-demo/`**
