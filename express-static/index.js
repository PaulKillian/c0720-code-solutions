const express = require('express');

const path = require('path');

const app = express();

const rootPath = path.join(__dirname, '/public');

const exStatic = express.static(rootPath);

app.use(exStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
