# Bong Capstone - Mobile-First React App

A modern, mobile-first web application built with React 18 and Vite, optimized for mobile interfaces.

## Features

- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 📱 **Mobile-First Design** - Optimized for mobile devices with touch-friendly interactions
- 🎨 **Modern UI** - Clean and responsive design that works everywhere
- 🔧 **PWA Ready** - Progressive Web App capabilities for app-like experience
- 🌙 **Dark Mode** - Automatic dark mode support based on system preferences
- ♿ **Accessible** - Follows WCAG guidelines for accessibility
- 🚀 **Fast Loading** - Optimized bundle size and lazy loading

## Technology Stack

- **React 18.3+** - Modern UI library with concurrent features
- **Vite 5.4+** - Next-generation frontend build tool
- **React Router 6** - Declarative routing for React applications
- **Vite PWA Plugin** - Progressive Web App capabilities
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bong-capstone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
bong-capstone/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable React components
│   │   ├── Layout.jsx
│   │   └── Navigation.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.jsx         # Root component
│   ├── main.jsx        # Application entry point
│   └── router.jsx      # Route configuration
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

## Mobile Optimization

This application follows mobile-first best practices:

- **Touch Targets**: Minimum 44x44px touch targets for all interactive elements
- **Viewport**: Properly configured viewport meta tags
- **Responsive Design**: Mobile-first CSS with progressive enhancement
- **Performance**: Optimized assets and lazy loading
- **PWA**: Installable on mobile devices with offline support
- **Safe Areas**: Support for device notches and safe areas

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari 12+
- Chrome Android 90+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
