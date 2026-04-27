# Care First Community Initiative (CFCI)

Professional, responsive TypeScript React application with Tailwind CSS for CFCI.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation & header
│   ├── Hero.tsx        # Hero section
│   ├── MissionVisionMandate.tsx
│   ├── About.tsx       # About us section
│   ├── Programs.tsx    # Programs grid
│   ├── CoreValues.tsx  # Values section
│   ├── SMT.tsx         # Senior Management Team
│   ├── Activities.tsx  # Activities gallery
│   ├── Organogram.tsx  # Organizational structure
│   ├── Contact.tsx     # Contact form & info
│   └── Footer.tsx      # Footer
├── data/
│   └── constants.ts    # Data & content
├── types/
│   └── index.ts        # TypeScript interfaces
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles & Tailwind
```

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ },
  brand: { /* Your brand colors */ }
}
```

### Content Updates
- **Text content**: Edit `src/data/constants.ts`
- **Team members**: Update `teamMembers` array
- **Programs**: Modify `programs` array
- **Contact info**: Update `contactInfo` object

### Images
Replace placeholder images in `public/assets/img/`:
- `hero.jpg` - Hero section image
- `activities/*.jpg` - Activity photos
- `organogram.png` - Organizational chart
- `logo.svg` - Organization logo
- `favicon.ico` - Site icon

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

### Tech Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **ESLint** - Code linting

## 🚀 Deployment

### Static Hosting
Deploy the `dist` folder to any static host:
- **Netlify**: Connect your repo for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions
- **Cloudflare Pages**: Fast global CDN

### Build Commands
```bash
npm run build
# Deploy the 'dist' folder
```

## ♿ Accessibility & SEO

- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **SEO**: Meta tags, structured data, semantic HTML
- **Performance**: Optimized images, lazy loading, code splitting
- **Mobile**: Responsive design, touch-friendly interactions

## 📱 Features

- ✅ Fully responsive design
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Component-based architecture
- ✅ Mobile-first approach
- ✅ Accessibility compliant
- ✅ SEO optimized
- ✅ Contact form ready
- ✅ Image optimization
- ✅ Fast loading

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` with:
- Custom color palette
- Extended animations
- Responsive breakpoints
- Component utilities

### TypeScript
Strict configuration with:
- Path aliases (`@/components`, `@/types`)
- React JSX support
- Type checking on build

## 📞 Support

For questions about this website template, please contact:
- **Email**: bagyo@cfci-ng.org
- **Phone**: +234 802 653 3075, +234 703 462 4598
