const express = require('express');

const app = express();

app.use((req, res, next) => {
  const options = { root: __dirname };
  switch (req.originalUrl) {
    case '/index.html':
    case '/styles.css':
    case '/main.js':
      res.sendFile(req.originalUrl, options);
      break;
    default:
      next();
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening...');
});
