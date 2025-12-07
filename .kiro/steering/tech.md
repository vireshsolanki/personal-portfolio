# Technology Stack

## Core Technologies

- **React 18** - UI library with hooks
- **Vite 4** - Build tool and dev server
- **JavaScript (ES6+)** - Primary language (not TypeScript)
- **CSS3** - Styling with custom properties

## Dependencies

- `react` & `react-dom` - Core React libraries
- `react-icons` - Icon library for UI elements
- `@vitejs/plugin-react` - Vite plugin for React support

## Build System

The project uses **Vite** as the build tool and development server.

### Common Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build (http://localhost:4173)
npm run preview
```

## Deployment

- Configured for **Vercel** deployment
- Configuration files: `vercel.json`, `.vercelignore`
- Production build outputs to `dist/` directory
- Static assets served from `public/` directory

## Browser APIs

- **IntersectionObserver** - Used for scroll animations and section detection
- **Passive event listeners** - For optimized scroll performance
