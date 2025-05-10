# Forkit - Web Development & Digital Agency Website

A modern, responsive website for a web development and digital agency built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design that looks great on all devices
- 🌍 Multi-language support (English and German)
- 🎨 Modern UI with Lexend font family
- 🧩 Component-based architecture
- 🚀 Fast and lightweight

## Pages

- **Home**: Agency introduction and service overview
- **Services**: Detailed service descriptions
- **Portfolio**: Showcase of past work with filterable categories
- **About**: Company story, values, and team
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/forkit.git
cd forkit
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to http://localhost:3000

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **i18next**: Internationalization framework

## Project Structure

```
forkit/
├── public/
├── src/
│   ├── assets/           # Images and other static assets
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── i18n.ts           # Internationalization configuration
│   ├── App.tsx           # Main app component
│   └── index.tsx         # Application entry point
└── package.json
```

## Customization

### Colors

You can customize the colors by editing the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      'primary': '#2563EB',    // Change this to your primary color
      'secondary': '#10B981',  // Change this to your secondary color
      'dark': '#1F2937',       // Change this to your dark color
    }
  },
},
```

### Fonts

The website uses the Lexend font family. You can change it by:

1. Updating the font import in `src/index.css`
2. Updating the font family in `tailwind.config.js`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Lexend Font](https://fonts.google.com/specimen/Lexend)
