# Nuxt 4 Template

A modern, production-ready Nuxt 4 starter template with comprehensive configurations and internationalization support. Perfect for building modern web applications with cutting-edge technologies.

**Developed by:** [Manuel Hintermayr](https://github.com/manuelhintermayr)  
**Repository:** https://github.com/manuelhintermayr/nuxt4-template

## 🚀 Features

- ⚡️ **Nuxt 4** - Latest version with improved performance and new features
- 🎨 **Nuxt UI** - Modern UI components based on Tailwind CSS and Headless UI
- 🌍 **Internationalization** - Full i18n support with @nuxtjs/i18n
- 🌙 **Dark Mode** - Built-in dark/light mode toggle
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **TypeScript** - Full TypeScript support with type safety
- 🎯 **Component Architecture** - Modular, reusable Vue components
- 🎭 **Heroicons** - Beautiful SVG icons from the Heroicons library
- 🐭 **Mouse Follower** - Smooth mouse cursor effects with GSAP animations
- 🏗️ **Developer Experience** - Hot module replacement and fast refresh

## 🛠️ Technology Stack

### Core Frameworks
- **[Nuxt 4](https://nuxt.com/)** - The Intuitive Vue Framework
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript Framework
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript

### UI & Styling
- **[Nuxt UI](https://ui.nuxt.com/)** - Fully styled and customizable components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Headless UI](https://headlessui.dev/)** - Unstyled, accessible UI components

### Animation & Effects
- **[GSAP](https://greensock.com/gsap/)** - Professional-grade animation library
- **[Mouse Follower](https://github.com/Cuberto/mouse-follower)** - Smooth mouse cursor effects

### Internationalization
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** - Internationalization module
- **Support for:** English (en) and German (de) out of the box
- **Lazy loading** - Translation files loaded on demand

### Icons & Assets
- **[@iconify-json/heroicons](https://iconify.design/)** - Heroicons icon collection
- **[@nuxt/icon](https://github.com/nuxt/icon)** - Icon component with 200k+ icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/manuelhintermayr/nuxt4-template.git
cd nuxt4-template

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

## 🚦 Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun run dev
```

## 🏗️ Project Structure

```
nuxt4-template/
├── app/
│   ├── app.vue                 # Root application component
│   ├── components/             # Reusable Vue components
│   │   ├── AppHeader.vue       # Header with navigation and language switcher
│   │   ├── WelcomeSection.vue  # Welcome hero section
│   │   ├── FeatureCard.vue     # Reusable feature card component
│   │   ├── FeaturesGrid.vue    # Grid showcase of main features
│   │   ├── ButtonExamples.vue  # Button variants demonstration
│   │   ├── FormExamples.vue    # Form components showcase
│   │   ├── DemoAlert.vue       # Alert component example
│   │   ├── ExamplesSection.vue # Container for all examples
│   │   └── LanguageSwitcher.vue # Language selection dropdown
│   ├── pages/
│   │   └── index.vue           # Main landing page
│   └── plugins/
│       └── mouse-follower.client.ts # Mouse cursor effects initialization
├── i18n/
│   ├── i18n.config.ts         # i18n configuration
│   └── locales/               # Translation files
│       ├── en.json            # English translations
│       └── de.json            # German translations
├── public/                    # Static assets
├── nuxt.config.ts            # Nuxt configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Component Architecture

### Modular Design
All UI elements are extracted into reusable components following Vue.js best practices:

- **Props-based components** - `FeatureCard.vue` accepts title, description, icon, and color props
- **Composable integration** - Uses Nuxt's auto-imported composables like `useI18n`
- **TypeScript interfaces** - Fully typed props and component APIs
- **Scoped styling** - Component-specific styles when needed

### Available Components

#### Layout Components
- `AppHeader` - Navigation header with logo, title, language switcher, and dark mode toggle
- `WelcomeSection` - Hero section with internationalized welcome message

#### Content Components
- `FeatureCard` - Reusable card component for showcasing features
- `FeaturesGrid` - Grid layout showcasing Nuxt 4, Nuxt UI, and Dark Mode features
- `ExamplesSection` - Container for component demonstrations

#### Interactive Components
- `ButtonExamples` - Showcase of different button variants (solid, soft, outline, ghost, link)
- `FormExamples` - Form components including inputs, textarea, and select
- `DemoAlert` - Alert component with icon and message
- `LanguageSwitcher` - Dropdown for language selection

## 🐭 Mouse Follower Integration

This template includes **Mouse Follower** by Cuberto, providing smooth and professional cursor effects.

### Features:
- **Pointer Detection** - Automatic cursor changes on interactive elements (buttons, links)
- **State Detection** - Custom cursor states for different element types
- **GSAP Integration** - Smooth animations powered by GreenSock
- **Performance Optimized** - Efficient animation loops and event handling

### Usage:
Add data attributes to elements for custom cursor behavior:

```html
<!-- Pointer cursor -->
<button data-cursor-pointer>Click me</button>

<!-- Text cursor -->
<p data-cursor-text>Selectable text</p>

<!-- Hidden cursor -->
<div data-cursor="-hidden">No cursor here</div>

<!-- Inverse cursor -->
<div data-cursor="-inverse">Inverted cursor</div>
```

The cursor automatically detects:
- `a, button` elements → pointer cursor
- Form inputs → text cursor
- Custom data attributes → specific states

## 🌍 Internationalization

### Supported Languages
- **English (en)** - Default language
- **German (de)** - Secondary language

### Translation Structure
```json
{
  "header": {
    "title": "Page title"
  },
  "welcome": {
    "title": "Welcome message",
    "subtitle": "Description"
  },
  "features": {
    "nuxt4": {
      "title": "Feature title",
      "description": "Feature description"
    }
  }
}
```

### Adding New Languages
1. Create a new JSON file in `i18n/locales/` (e.g., `fr.json`)
2. Add the locale configuration in `nuxt.config.ts`:
```typescript
locales: [
  { code: 'en', name: 'English', file: 'en.json' },
  { code: 'de', name: 'Deutsch', file: 'de.json' },
  { code: 'fr', name: 'Français', file: 'fr.json' }
]
```

## 🏭 Production

Build the application for production:

```bash
npm run build
# or
pnpm build
# or
yarn build
# or
bun run build
```

Preview the production build locally:

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
# or
bun run preview
```

## 📚 Documentation

- **[Nuxt 4 Documentation](https://nuxt.com/docs/getting-started/introduction)** - Learn about Nuxt features
- **[Nuxt UI Documentation](https://ui.nuxt.com/)** - UI component library
- **[Vue 3 Documentation](https://vuejs.org/guide/)** - Vue.js framework guide
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - Utility-first CSS
- **[Nuxt i18n Documentation](https://i18n.nuxtjs.org/)** - Internationalization guide
- **[TypeScript Documentation](https://www.typescriptlang.org/docs/)** - TypeScript handbook

## 🤝 Contributing

This template is designed to be a starting point for Nuxt 4 projects. Feel free to:

- Fork the repository
- Customize components and styling
- Add new features and integrations
- Submit pull requests for improvements
- Report issues and suggestions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Acknowledgments

- **Nuxt Team** for the amazing framework
- **Tailwind Labs** for Tailwind CSS and Headless UI
- **Heroicons** for the beautiful icon set
- **Vue.js Team** for the progressive framework

---

**Happy coding!** 🚀

Built with ❤️ by [Manuel Hintermayr](https://github.com/manuelhintermayr)
