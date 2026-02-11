import { Presentation, Slide } from 'immersion-presentation';
import 'immersion-presentation/dist/index.css';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Presentation>
        <Slide>
          <h1>Hello World</h1>
          <p>This is Immersion.</p>
        </Slide>
        <Slide>
          <h1>LaTeX Support</h1>
          <p>Here is some math: $E = mc^2$</p>
        </Slide>
      </Presentation>
    </div>
  );
}

export default App;
