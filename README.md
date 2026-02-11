# Immersion Presentation Framework

> **Resurrected**: This repository is a restoration of the unfinished "Immersion" presentation framework created by the late Gilles Castel.

Immersion is a React-based presentation framework designed for creating beautiful, mathematical presentations with fluid animations and first-class LaTeX support.

## Features

- **React-based**: Build slides using React components.
- **LaTeX Support**: Render LaTeX formulas with high quality using MathJax (via a local server).
- **Animations**: Smooth transitions between slides and morphing of LaTeX equations.
- **Visual Editor**: (Partial support) Tools for editing animations.
- **Tools**: Includes `create-presentation` CLI and templates.

## Prerequisites

- Node.js (v14+ recommended)
- `npm` or `yarn`

## Getting Started

### 1. Install Dependencies

Install the library dependencies:

```bash
npm install --legacy-peer-deps
```

### 2. Build the Library

Build the Immersion library:

```bash
npm run build
```

### 3. Start the LaTeX Server

Immersion requires a backend server to render LaTeX to SVG.

```bash
cd server
npm install
node index.js
```

The server runs on `http://localhost:3001`.

### 4. Run the Example Presentation

Open a new terminal and navigate to the example directory:

```bash
cd example
npm install
npm run dev
```

Then open your browser to the URL shown (usually `http://localhost:5173` or similar).

## Usage

Create a new presentation in your React app:

```tsx
import { themes, Presentation } from "immersion-presentation";
import "immersion-presentation/dist/index.css";

const { Slide } = themes.principiae;

function App() {
  return (
    <Presentation>
      <Slide header="Intro">
        <h1>Welcome to Immersion</h1>
      </Slide>
      <Slide header="Math">
        <p>
          $ \int_a^b f(x) dx = F(b) - F(a) $
        </p>
      </Slide>
    </Presentation>
  );
}
```

## Tools

The `tools/` directory contains:
- `create-presentation`: A CLI tool for scaffolding new presentations.
- `template`: A template project structure.

## License

MIT
