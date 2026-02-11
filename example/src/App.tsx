import { themes, Presentation } from "immersion-presentation";
import "immersion-presentation/dist/index.css";
// import "immersion-presentation/dist/show.macro.js";
// import step from "immersion-presentation/dist/step.macro.js";

// Vite babel macro support is tricky with relative imports.
// We are disabling macros for this example and using manual steps prop for simplicity.
// In a real setup, babel-plugin-macros should pick up the files.

const { Slide } = themes.principiae;

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Presentation>
        <Slide header="Introduction" steps={[0, 1]}>
          {(step: number) => (
            <div>
              <h1>Welcome to Immersion</h1>
              {step > 0 && <p>This is a step animation!</p>}
            </div>
          )}
        </Slide>
        <Slide header="LaTeX Example">
          <p>
            The fundamental theorem of calculus relates differentiation and integration:
          </p>
          <p>
            $ \int_a^b f(x) dx = F(b) - F(a) $
          </p>
        </Slide>
      </Presentation>
    </div>
  );
}

export default App;
