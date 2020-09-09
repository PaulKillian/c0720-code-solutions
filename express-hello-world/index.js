const express = require('./node_modules/express');

const app = express();

app.use(function (reg, res) {
  res.send('Hello, Paul');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening...');
});
