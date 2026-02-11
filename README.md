# Immersion Presentation Framework

> **Resurrected**: This repository is a restoration of the unfinished "Immersion" presentation framework created by the late Gilles Castel.

Immersion is a React-based presentation framework designed for creating beautiful, mathematical presentations with fluid animations and first-class LaTeX support.

## Features

- **React-based**: Build slides using React components.
- **LaTeX Support**: Render LaTeX formulas with high quality using MathJax (via a local server).
- **Animations**: Smooth transitions between slides and morphing of LaTeX equations.
- **Visual Editor**: (Partial support) Tools for editing animations.

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

Then open your browser to the URL shown (usually `http://localhost:5173`).

## Usage

Create a new presentation in your React app:

```tsx
import { Presentation, Slide } from 'immersion-presentation';
import 'immersion-presentation/dist/index.css';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Presentation>
        <Slide>
          <h1>Slide 1</h1>
          <p>Content...</p>
        </Slide>
        <Slide>
          <h1>Slide 2</h1>
          <p>More content...</p>
        </Slide>
      </Presentation>
    </div>
  );
}
```

## License

MIT
