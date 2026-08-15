# 🌌 PARALLAX DYNAMICS // BEYOND DISTANCE.

> *"We don't predict humanity's future. We make it reachable."*

Welcome to the official corporate portal of **Parallax Dynamics**, an integrated interstellar transportation, deep-space exploration, planetary logistics, and frontier security conglomerate operating throughout known space and beyond.

---

## 🛰️ Project Overview

**Parallax Dynamics** is an immersive, sci-fi megacorporation web platform built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. It combines a slick corporate aesthetic, interactive starfield canvases, real-time telemetry, procedural audio feedback, and rich campaign/worldbuilding lore.

### ✨ Key Features

- **🌐 Live Telemetry & Warp Systems**: Real-time sub-space network status, FTL traffic indicators, and galactic positioning readouts.
- **🚀 Starship Fleet Catalogue (`/fleet`)**: Interactive vessel dossiers (Horizon-Class Cruiser, Atlas Colony Carrier, Valkyrie Expedition Vessel, Hammerhead Security Frigate, Odyssey Science Platform) with interactive tactical blueprint / optical render modes and deep technical specifications.
- **🪐 Core Divisions & Services (`/services`)**:
  - `HORIZON™` — Luxury Interstellar Passenger Corridors
  - `ATLAS™` — Heavy Logistics & Colony Infrastructure
  - `GENESIS™` — Deep-Space Scientific Reconnaissance
  - `FRONTIER™` — Charting Unknown Systems & Relays
  - `INDUSTRIAL` — Orbital Asteroid Refineries & Extraction
  - `VANGUARD™` — Tactical Escort, Anti-Piracy & Emergency Rescue
  - `SPECIAL ACQUISITIONS` — Discreet Procurement & Level 5 Clearance Terminal
- **👥 The Founders (`/founders`)**: Executive dossiers and personnel files for the seven governing founders:
  - **Flint Duskbourne** — *Chief Operations Officer & Fleet Commander*
  - **Quill Varon** — *Chief Science Officer & Research Director*
  - **Fenn** — *VP of Corporate Relations & Diplomacy*
  - **Cass** — *Director of Special Acquisitions*
  - **Kant Vixit** — *Chief Engineering Officer & Chief Inventor*
  - **Onix** — *Director of Xenobiology & Medical Research*
  - **Reggie** — *Chief Security Marshal & Fleet Protector*
- **📜 Corporate Doctrine: The Axioms (`/axioms`)**: The seven core principles guiding all Parallax initiatives (*Axiom VII: "We go forward. Retreat is mathematically incompatible with corporate policy."*).
- **📂 Declassified Operations Archive (`/operations`)**: Deep-dive mission dossiers with full timelines, personnel assignments, incident logs, compliance commentary, and Captain's logs (e.g., `PD-0101`: *A City Without Dawn*).
- **🔊 Procedural Sci-Fi Audio Engine**: Zero-asset, Web Audio API sound synthesizer providing interactive mechanical clicks, telemetry blips, and hover tones.
- **✨ Canvas Starfield & Particle Systems**: Dynamic, responsive HTML5 canvas background rendering star trails and celestial depth.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS Glassmorphism / Scanline Effects |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animation & Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Typography** | `Orbitron` (Display), `Space Grotesk` (Body), `JetBrains Mono` (Telemetry & Code) |
| **Audio** | Procedural Web Audio API Sound Engine |

---

## 📂 Project Structure

```text
ParallaxDynamics/
├── profiles/                 # High-resolution character portraits & founder art
├── public/
│   └── media/
│       ├── broadcast/        # Corporate broadcast media
│       ├── fleet/            # Starship renders & blueprints
│       ├── founders/         # Executive portrait assets
│       ├── hero/             # Landing page visuals & space transit imagery
│       └── services/         # Division service hero photography
├── src/
│   ├── app/
│   │   ├── axioms/           # The 7 Corporate Axioms page
│   │   ├── fleet/            # Starship catalogue with blueprint inspection
│   │   ├── founders/         # Executive board & dossier modal system
│   │   ├── operations/       # Operational mission archives & [id] route
│   │   ├── services/         # Divisions, service matrix & clearance modal
│   │   ├── globals.css       # Design tokens, scanlines & custom scrollbars
│   │   ├── layout.tsx        # Root layout with Starfield, Navbar & Footer
│   │   └── page.tsx          # Homepage with telemetry & feature showcases
│   ├── components/
│   │   ├── Button.tsx        # Sci-fi themed interactive buttons with sound
│   │   ├── ChevronMotif.tsx  # Geometric corporate motif
│   │   ├── CorporateMetrics.tsx # Dynamic corporate telemetry & counters
│   │   ├── CorporateVideoPlayer.tsx # Simulated corporate video broadcast
│   │   ├── Footer.tsx        # Global corporate footer & disclaimer
│   │   ├── HeroTelemetry.tsx # Real-time landing page telemetry ticker
│   │   ├── LogoBadge.tsx     # Vector brand badge
│   │   ├── ModalPortal.tsx   # Accessible DOM portal for modals
│   │   ├── Navbar.tsx        # Global navigation with mobile menu
│   │   ├── OperationalRecordModal.tsx # Classified mission reader modal
│   │   └── StarfieldCanvas.tsx # Animated HTML5 canvas background
│   ├── data/
│   │   └── operationsData.ts # Canonical mission archives & logs
│   └── utils/
│       └── soundEngine.ts    # Web Audio API procedural sound engine
├── tailwind.config.ts        # Custom cyberpunk/sci-fi color palettes & glow utilities
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18+ or 20+ recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nyendra/Parallex-Dynamics.git
   cd Parallex-Dynamics
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

---

## 📜 Corporate Disclaimer

*Confidence should not be interpreted as a guarantee of regulatory approval, sub-light collision immunity, or temporal consistency. Special Acquisitions activities comply with all applicable legislation within the jurisdiction in which applicable legislation is recognized.*

---

<div align="center">
  <sub>PARALLAX DYNAMICS // REGISTERED WITH THE INTERSTELLAR COMMERCE COMMISSION // ALL RIGHTS RESERVED</sub>
</div>
