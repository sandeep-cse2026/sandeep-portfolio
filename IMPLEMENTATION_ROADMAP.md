# Next.js 15 Neo-Brutalist Portfolio - Implementation Roadmap

This roadmap outlines the steps to build your modern, minimal developer portfolio using Next.js 15, Tailwind CSS, Framer Motion, and other specified technologies, following a Neo-Brutalist design aesthetic.

---

## **Phase 1: Setup & Configuration**

- [ ] **Initialize Project:** (Already done - Next.js 15 project exists)
- [ ] **Install Dependencies:**
  ```bash
  npm install tailwindcss postcss autoprefixer framer-motion lucide-react react-hook-form zod zustand class-variance-authority clsx tailwind-merge
  npm install -D @types/node @types/react @types/react-dom eslint typescript eslint-config-next
  ```
- [ ] **Configure Tailwind CSS:**
    - [ ] Initialize Tailwind: `npx tailwindcss init -p`
    - [ ] Configure `tailwind.config.ts`:
        - Set up `content` paths (`./app/**/*.{js,ts,jsx,tsx}`, `./components/**/*.{js,ts,jsx,tsx}`, etc.).
        - Define theme colors (Deep Black `#0A0A0A`, Electric Purple `#A020F0`, Light Grey `#EDEDED`).
        - Extend theme with `Inter` font family.
        - Configure Neo-Brutalist styles (e.g., custom box shadows).
    - [ ] Configure `postcss.config.mjs` (usually default is fine).
    - [ ] Add Tailwind directives to `app/globals.css`.
- [ ] **Setup Global Styles & Fonts:**
    - [ ] Import `Inter` font in `app/layout.tsx` (e.g., using `next/font`).
    - [ ] Apply base background color and font styles in `app/globals.css` or `app/layout.tsx`.
- [ ] **ESLint & Prettier Setup:** (Optional but recommended)
    - [ ] Configure ESLint (`eslint.config.mjs`).
    - [ ] Set up Prettier for code formatting consistency.

---

## **Phase 2: Folder Structure & Core Layout**

- [ ] **Create Core Directories:**
    - [ ] `app/components/ui` (For reusable base UI elements like Button, Card - using shadcn/ui structure is a good practice)
    - [ ] `app/components/shared` (For components used across multiple pages, e.g., Header, Footer)
    - [ ] `app/components/icons` (If custom icons are needed beyond Lucide)
    - [ ] `app/lib/utils.ts` (Utility functions, e.g., `cn` for merging Tailwind classes)
    - [ ] `app/lib/hooks` (Custom React hooks)
    - [ ] `app/lib/store` (Zustand store setup)
    - [ ] `app/sections/[page]` (Components specific to page sections, e.g., `app/sections/home/HeroSection.tsx`)
    - [ ] `app/styles` (If more specific CSS modules or global styles are needed beyond `globals.css`)
    - [ ] `app/constants` (For static data like navigation links, tech stack items)
- [ ] **Implement Global Layout (`app/layout.tsx`):**
    - [ ] Add base HTML structure (`html`, `body`).
    - [ ] Apply global font and background.
    - [ ] Include Header/Navigation component (if applicable).
    - [ ] Include Footer component (if applicable).
    - [ ] Set up metadata (title template, base description).
    - [ ] Wrap content with Framer Motion `AnimatePresence` for page transitions (optional).
- [ ] **Setup Zustand Store (`app/lib/store/`):**
    - [ ] Define state slices (e.g., UI state, theme state - although dark mode is default).
    - [ ] Create store hook.

---

## **Phase 3: Design System Implementation**

- [ ] **Base UI Components (`app/components/ui`):**
    - [ ] Create `Button` component (Neo-Brutalist style, hover effects).
    - [ ] Create `Card` component (Sharp edges, subtle shadow, potential border).
    - [ ] Define typography styles (headings, paragraphs, code blocks) in `globals.css` or Tailwind config.
- [ ] **Color Palette Integration:**
    - [ ] Ensure primary colors (`#0A0A0A`, `#A020F0`, `#EDEDED`) are used consistently via Tailwind classes.
- [ ] **Icon Setup:**
    - [ ] Use `lucide-react` for icons where needed.

---

## **Phase 4: Page & Component Development**

- [ ] **Homepage (`/` - `app/page.tsx`):**
    - [ ] Build `HeroSection` (`app/sections/home/HeroSection.tsx`) with animated intro and purple accents.
    - [ ] Build `TechStackSection` (`app/sections/home/TechStackSection.tsx`) with interactive cards.
    - [ ] Build `ProjectsPreviewSection` (`app/sections/home/ProjectsPreviewSection.tsx`) with a grid layout.
    - [ ] Integrate sections into `app/page.tsx`.
    - [ ] Add page-specific metadata.
- [ ] **About Page (`/about` - `app/about/page.tsx`):**
    - [ ] Build `TimelineSection` (`app/sections/about/TimelineSection.tsx`).
    - [ ] Build `SkillsSection` (`app/sections/about/SkillsSection.tsx`).
    - [ ] Add narrative/bio content.
    - [ ] Integrate sections into `app/about/page.tsx`.
    - [ ] Add page-specific metadata.
- [ ] **Projects Page (`/projects` - `app/projects/page.tsx`):**
    - [ ] Build `ProjectCard` component (`app/components/shared/ProjectCard.tsx`) with image previews, tags, and hover animations.
    - [ ] Fetch or define project data (e.g., from `app/constants/projects.ts` or a CMS/API).
    - [ ] Implement project grid/list layout in `app/projects/page.tsx`.
    - [ ] Add page-specific metadata.
- [ ] **Contact Page (`/contact` - `app/contact/page.tsx`):**
    - [ ] Build `ContactForm` component (`app/sections/contact/ContactForm.tsx`).
        - [ ] Use `react-hook-form` for form state management.
        - [ ] Use `zod` for schema validation.
        - [ ] Style form elements with Neo-Brutalist theme.
    - [ ] Implement form submission logic (e.g., Next.js Server Action sending an email or saving to DB).
    - [ ] Add social media links (`GitHub`, `LinkedIn`, etc.) with icons.
    - [ ] Integrate form and links into `app/contact/page.tsx`.
    - [ ] Add page-specific metadata.
- [ ] **Custom 404 Page (`app/not-found.tsx`):**
    - [ ] Create the `not-found.tsx` file.
    - [ ] Design a custom Neo-Brutalist styled "Not Found" message.
    - [ ] Add a link back to the homepage.

---

## **Phase 5: Animations & Interactivity**

- [ ] **Page Transitions:**
    - [ ] Implement fade, slide, or other transitions using `Framer Motion` (`AnimatePresence` in `layout.tsx` or motion divs in page components).
- [ ] **Component Animations:**
    - [ ] Add hover effects to buttons, cards, links (e.g., slight scale, shadow change, distortion).
    - [ ] Animate elements on load/scroll into view (`motion.div`, `initial`, `animate`, `viewport`).
- [ ] **Interactive Elements:**
    - [ ] Implement subtle glitch effects or other Neo-Brutalist inspired interactions if desired.
    - [ ] Add parallax scrolling effects to sections if appropriate.

---

## **Phase 6: Deployment & Optimization**

- [ ] **Vercel Setup:**
    - [ ] Connect GitHub repository to Vercel.
    - [ ] Configure build settings (usually automatic).
- [ ] **SEO Optimization:**
    - [ ] Implement dynamic metadata generation in `layout.tsx` and page files (`generateMetadata` function).
    - [ ] Include relevant keywords.
    - [ ] Add Open Graph tags for social sharing previews.
    - [ ] Create `sitemap.xml` and `robots.txt`.
- [ ] **Performance Optimization:**
    - [ ] Use `next/image` for all images for automatic optimization.
    - [ ] Implement lazy loading for images and potentially components below the fold.
    - [ ] Analyze bundle size and optimize imports (dynamic imports if needed).
    - [ ] Minify assets (handled by Next.js build).
- [ ] **Lighthouse Audit:**
    - [ ] Run Lighthouse tests in Chrome DevTools.
    - [ ] Address performance, accessibility, best practices, and SEO issues identified. Aim for high scores (90+).
- [ ] **Accessibility (a11y):**
    - [ ] Ensure semantic HTML structure.
    - [ ] Check color contrast (especially with the purple accent).
    - [ ] Add ARIA attributes where necessary.
    - [ ] Ensure keyboard navigability.

---

## **Phase 7: Refinement & Testing**

- [ ] **Cross-Browser Testing:**
    - [ ] Test on latest versions of Chrome, Firefox, Safari, Edge.
- [ ] **Responsiveness:**
    - [ ] Test on various screen sizes (mobile, tablet, desktop). Adjust Tailwind classes as needed.
- [ ] **Content Review:**
    - [ ] Proofread all text content.
    - [ ] Ensure all links work correctly.
    - [ ] Update project details and resume data.
- [ ] **Final Code Cleanup:**
    - [ ] Remove console logs and unused code.
    - [ ] Ensure consistent code style.

---

Good luck with the implementation!
