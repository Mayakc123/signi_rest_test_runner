const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => {
  res.json({ message: 'API is working fine!' });
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
