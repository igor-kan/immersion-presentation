const express = require('express');
const cors = require('cors');
const mjAPI = require('mathjax-node');

const app = express();
app.use(cors());

// Configure MathJax
mjAPI.config({
  MathJax: {
    // default options
  }
});
mjAPI.start();

app.get('/latex', (req, res) => {
  const tex = req.query.tex;
  const preamble = req.query.preamble || '';

  if (!tex) {
    return res.status(400).send('Missing tex parameter');
  }

  // Combine preamble and tex.
  // MathJax processes math mode by default, so definitions must be valid in math mode or global context.
  // However, \newcommand generally works inside math mode in MathJax if allowed.
  // Or we might need to configure macros.
  // For simplicity, let's prepend.
  const math = preamble + ' ' + tex;

  mjAPI.typeset({
    math: math,
    format: "TeX", // assume display mode or inline? usually TeX means inline unless specified
    svg: true,
    width: 100 // arbitrary width container
  }, function (data) {
    if (data.errors) {
      console.error(data.errors);
      res.status(400).json({ name: 'CompilationError', latexErrors: data.errors, tex: tex });
    } else {
      res.set('Content-Type', 'image/svg+xml');
      res.send(data.svg);
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`LaTeX server listening on port ${PORT}`);
});
