# Project Overview: Kroma Nuxt Web

This is a **Nuxt 4** project for **Kroma**, a dental and medical services provider. The platform manages clinical specialties, laboratory services, an educational academy, and a product catalog.

## Core Technologies
- **Framework:** [Nuxt 4](https://nuxt.com/) (Vue 3)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Carousel/Gallery:** [Swiper](https://swiperjs.com/)
- **Build Tool:** Vite

## Directory Structure
- `app/`: Main source directory (configured as `srcDir`).
  - `components/`: Modular Vue components.
    - `Default/`: General site components (NavBar, Footer, Hero, etc.).
    - `Portal/`: Admin or user portal specific components.
  - `layouts/`: Page layouts (e.g., `default.vue`, `portal.vue`).
  - `pages/`: File-based routing for all site sections.
  - `assets/`: Static source assets like CSS (`main.css`), custom scripts, and videos.
- `public/`: Static assets (images, icons, robots.txt, favicons).
- `app.config.ts`: Centralized configuration for navigation menus, contact details, and gallery data.
- `nuxt.config.ts`: Nuxt-specific configurations (Tailwind integration, directory settings, deployment targets).

## Building and Running

### Development
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Production
```bash
# Build the application (SSG)
pnpm generate

# Preview the production build
pnpm preview
```

## Development Conventions

- **Component Auto-import:** Components are auto-prefixed by their subfolder. Example: `app/components/Default/NavBar.vue` becomes `<DefaultNavBar />`.
- **Configuration-First:** Update `app/app.config.ts` to modify navigation menus, contact info, or the main gallery without changing component logic.
- **Routing:** Use file-based routing within `app/pages/`. Page metadata (like breadcrumbs) can be controlled via `definePageMeta`.
- **Styling:** Prefer Tailwind CSS utility classes. Avoid complex custom CSS unless necessary for specific animations or third-party library overrides.
- **Static Assets:** Place global images and icons in `public/images/` or `public/icons/` for easy referencing via absolute paths.
