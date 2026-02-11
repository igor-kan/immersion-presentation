# Immersion

> **Resurrected & Unfinished**
> This repository is a reconstruction of the [Immersion](https://github.com/immersion-presentation/) presentation framework by the late Gilles Castel. The original source code was incomplete, so this version has been recovered from transpiled code and source maps.

Immersion is a React-based presentation framework that rivals Beamer. It allows for high-quality mathematical presentations with animated LaTeX transitions.

## Features

- **LaTeX Support**: Write LaTeX directly in your slides.
- **Animations**: animated transitions between LaTeX formulas (morphing).
- **React-based**: Build slides using React components.
- **Theming**: Customizable themes (Modern, Principiae).

## Installation

```bash
npm install
```

## Usage

This project consists of two parts:
1.  **The Library**: The core React components (in `src/`).
2.  **The LaTeX Server**: A local server required to render LaTeX to SVG for animations.

### 1. Start the LaTeX Server

The framework requires a backend to compile LaTeX snippets into SVGs.

(Instructions to be added - Work in Progress: A `server` directory will be provided)

### 2. Create a Presentation

Import `Presentation` and `Slide` from the library.

```jsx
import { Presentation, Slide } from 'immersion-presentation';

function App() {
  return (
    <Presentation>
      <Slide>
        <h1>Hello World</h1>
        <p>This is Immersion.</p>
      </Slide>
    </Presentation>
  );
}
```

## Status

- [x] Frontend source code recovered.
- [ ] Backend server implementation (In Progress).
- [ ] Example presentation.

## Credits

Created by [Gilles Castel](https://castel.dev).
Recovered and documented by the open source community.
