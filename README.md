# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Built with Vite for fast development and production builds

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/LASHETTY/Portfolio-blockly.co.in-assignment.git>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   └── About.tsx       # About section
├── pages/              # Page components
│   └── Index.tsx       # Main page
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## Customization

### Colors and Theming

The project uses Tailwind CSS for styling. You can customize the color scheme by modifying the `tailwind.config.ts` file.

### Components

All UI components are built using shadcn/ui, providing a consistent and accessible design system.

## Deployment

Build the project for production:

```bash
npm run build
```

The build files will be generated in the `dist` directory, ready for deployment to any static hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please feel free to reach out.
