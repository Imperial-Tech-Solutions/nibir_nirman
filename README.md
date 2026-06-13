# Nibir Nirman

Official website for Nibir Nirman, a construction company based in Bangladesh. Built with React and Vite.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Imperial-Tech-Solutions/nibir_nirman.git
cd nibir_nirman
npm install
```

## Development

Start the local development server:

```bash
npm start
```

The app will be available at **http://localhost:5173**. Changes to source files hot-reload automatically.

## Build for Production

Generate a production build:

```bash
npm run build
```

Output is placed in the `dist/` folder. To preview the production build locally before deploying:

```bash
npm run preview
```

The preview server runs at **http://localhost:4173**.

## Deployment (cPanel)

1. Run `npm run build` to generate the `dist/` folder.
2. Zip the contents of `dist/`:
   ```bash
   cd dist && zip -r ../build.zip . && cd ..
   ```
3. In cPanel File Manager, navigate to `public_html`.
4. Delete the old files (everything except `.well-known`, `.htaccess.bk`, and `wpBackup`).
5. Upload `build.zip` and extract it into `public_html`.

The `.htaccess` file included in the build handles SPA routing on Apache so all routes (e.g. `/projects`, `/about`) work correctly.

## Running Tests

```bash
npm test
```

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer, and layout wrappers
    sections/     # Page sections (Hero, About, Services, etc.)
  assets/         # Images and static media
  App.jsx         # Route definitions
  main.jsx        # App entry point
public/
  .htaccess       # Apache rewrite rules for SPA routing
  output.json     # Project data loaded at runtime
```
