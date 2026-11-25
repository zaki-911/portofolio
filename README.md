# Muhammad Zaki – Premium Personal Portfolio

A production-ready, editorial personal portfolio website engineered from scratch for **Muhammad Zaki** (Data Analyst, Data Scientist, AI Engineer, and Machine Learning Enthusiast) using Next.js 15 App Router, TypeScript, Tailwind CSS, Three.js, and Lucide React.

Inspired by the dark, sculptural aesthetic, refined typography, and negative space of the **Orpheus** design direction.

---

## 🎨 Visual Identity & Design System

- **Background Palette:**
  - Main: `#0B0B0D`
  - Secondary: `#121216`
  - Card: `#18181D`
- **Typography:**
  - Headings: `Space Grotesk`
  - Body: `Inter`
  - Editorial Accent: `DM Sans`
- **Accents & Glow:**
  - Electric Blue: `#648CFF`
  - Soft Purple: `#A78BFA`
  - Subdued chromatic rim lighting and subtle architectural grid lines
- **3D Sculptural Visual:**
  - Monochromatic metallic Torus Knot sculpture with inner icosahedron wireframe
  - Dual gyroscopic orbital rings with slow counter-rotation
  - Floating stardust particle field with mouse-lean interactivity and mobile/reduced-motion fallbacks

---

## 🏗️ Architecture & Directory Structure

```text
muhammad-zaki-portfolio/
├── app/
│   ├── layout.tsx                    # Root layout, Google fonts, metadata, Navbar & Footer
│   ├── page.tsx                      # Unified landing page orchestrating all 11 sections
│   ├── globals.css                   # Custom design tokens, scrollbar, glowing utilities
│   ├── not-found.tsx                 # Custom Orpheus-themed 404 error page
│   ├── projects/[slug]/page.tsx      # Dynamic SSG project case study pages
│   └── api/contact/route.ts          # Zod-validated serverless contact API endpoint
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky glassmorphism header with active section tracking
│   │   ├── Footer.tsx                # Editorial footer with dynamic copyright & back-to-top
│   │   └── PageTransition.tsx        # Framer Motion smooth entrance wrapper
│   ├── sections/
│   │   ├── Hero.tsx                  # Full-screen hero, headline, badges & 3D canvas
│   │   ├── About.tsx                 # Narrative editorial layout with philosophy & metrics
│   │   ├── Skills.tsx                # 6 categorized skill disciplines with interactive filters
│   │   ├── Experience.tsx            # Vertical timeline of tech & organizational leadership
│   │   ├── Projects.tsx              # Selected works showcase with category filtering
│   │   ├── Education.tsx             # Academic background, GPA 3.76, thesis & coursework
│   │   ├── Certifications.tsx        # 8 verified credentials with category classification
│   │   ├── Achievements.tsx          # Academic journal publication & IDTC sponsorship lead
│   │   └── Contact.tsx               # Direct channels + React Hook Form with API submission
│   ├── three/
│   │   ├── HeroScene.tsx             # WebGL renderer, camera, lights, mouse lerp & resize observer
│   │   └── AbstractSculpture.tsx     # Modular Three.js geometry, materials & particle buffers
│   └── ui/
│       ├── Button.tsx                # Accessible multi-variant button with subtle glow
│       ├── SectionHeading.tsx        # Editorial section header with numeric indices
│       ├── ProjectCard.tsx           # Visual showcase card with architecture preview
│       ├── SkillCard.tsx             # Competency card with interactive tag pills
│       ├── ExperienceCard.tsx        # Chronological timeline card with check bullet points
│       └── SocialLinks.tsx           # Social icon badges and direct channel cards
├── data/
│   ├── personal.ts                   # Core bio, location, roles, tagline, metrics & links
│   ├── skills.ts                     # Disciplines & technologies without fake percentages
│   ├── experiences.ts                # Diskominfo Kota Bandung & ITENAS leadership
│   ├── projects.ts                   # Detailed project records, architectures & highlights
│   ├── education.ts                  # ITENAS degree, honors, thesis & courses
│   ├── certifications.ts             # 8 industry & government verified accreditations
│   └── achievements.ts               # Peer-reviewed publication & organizational leadership
├── lib/
│   ├── utils.ts                      # Tailwind merge & className utility helper
│   └── validations.ts                # Zod validation schema for contact submissions
└── public/
    ├── cv/                           # Downloadable curriculum vitae asset
    ├── icon.svg                      # Custom SVG brand favicon
    └── [images, projects, models]   # Static asset directories
```

---

## 🚀 Getting Started

### 1. Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build & Static Generation
```bash
npm run build
npm run start
```

### 3. Deploying to Vercel
This repository is pre-configured for standard zero-configuration deployment on **Vercel**:
1. Push code to your GitHub / GitLab repository.
2. Import project in Vercel dashboard.
3. Next.js App Router and dynamic SSG project pages will be built and served automatically at the edge.
