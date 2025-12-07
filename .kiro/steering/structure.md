# Project Structure

## Directory Organization

```
portfolio-app/
├── src/
│   ├── components/          # React components (one per section)
│   ├── data/               # Content data (portfolio.js)
│   ├── hooks/              # Custom React hooks
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
│   ├── projects/          # Project images
│   ├── photo.jpeg         # Profile photo
│   └── favicon.svg        # Site favicon
└── dist/                  # Production build output
```

## Component Architecture

### Component Pattern

- Each major section has its own component in `src/components/`
- Components are paired with CSS files (e.g., `Hero.jsx` + `Hero.css`)
- Components import data from `src/data/portfolio.js`
- Functional components using React hooks

### Component List

- `Navbar.jsx` - Navigation with active section highlighting
- `Hero.jsx` - Landing section with profile image
- `About.jsx` - About section with bio
- `Skills.jsx` - Tech stack and skills display
- `Projects.jsx` - Project showcase with images
- `Experience.jsx` - Work experience timeline
- `Reviews.jsx` - Client testimonials
- `Contact.jsx` - Contact information and social links
- `Footer.jsx` - Footer section

## Data Management

All portfolio content is centralized in `src/data/portfolio.js`:

- `personalInfo` - Name, title, contact, social links
- `stats` - Key statistics
- `about` - Bio paragraphs
- `techStack` - Technologies list
- `skills` - Categorized skills
- `experience` - Work history
- `projects` - Project details with images
- `reviews` - Client testimonials

## Styling Conventions

- Component-specific styles in separate CSS files
- Global styles and CSS variables in `src/index.css`
- Dark theme with neon green accent (`--primary: #00ff87`)
- Responsive design using media queries
- No CSS frameworks or preprocessors

## Custom Hooks

- `useScrollAnimation.js` - IntersectionObserver hook for scroll-triggered animations

## Asset Management

- Static assets in `public/` directory
- Project images in `public/projects/`
- Assets referenced with absolute paths from root (e.g., `/photo.jpeg`)
