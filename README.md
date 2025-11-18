# Gallery Project

Simple static gallery project using Tailwind CSS for styling and a small Node static server.

## Description

This project compiles Tailwind CSS from `src/input.css` into `dist/output.css` and serves the `src` files via `server.js`.

## Prerequisites

- Node.js (14+ recommended)
- npm (comes with Node)

## Install

From the project root (`gallery`) run:

```powershell
npm install
```

## Available scripts

- `npm run build` — build and minify Tailwind CSS into `dist/output.css`.
- `npm run dev` — watch `src/input.css` and rebuild CSS while developing.
- `npm start` — start the simple Node server (`server.js`).

## Run (development)

Open a terminal and run:

```powershell
npm run dev
npm start
```

Then open `http://localhost:3000` (or the port configured in `server.js`).

## Project structure

- `src/` — HTML, input.css, scripts and source assets.
- `dist/` — generated `output.css` after build.
- `server.js` — small static file server used in development.

## Notes

- If you use a local Tailwind CLI, you can tweak the `build` and `dev` scripts in `package.json`.
- Replace any API tokens directly in the source files if necessary, or prefer environment variables.
