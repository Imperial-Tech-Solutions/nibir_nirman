# Nibir Nirman

Official website for Nibir Nirman, a construction company based in Bangladesh. Built with React and Vite.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

## Installation

```bash
git clone https://github.com/Imperial-Tech-Solutions/nibir_nirman.git
cd nibir_nirman
npm install
```

## Development

```bash
npm start
```

The app will be available at **http://localhost:5173**.

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The preview server runs at **http://localhost:4173**.

## Deployment (cPanel)

1. Run `npm run build`
2. Zip the output:
   ```bash
   cd dist && zip -r ../build.zip . && cd ..
   ```
3. In cPanel File Manager, upload `build.zip` to `public_html` and extract it.

## Running Tests

```bash
npm test
```
