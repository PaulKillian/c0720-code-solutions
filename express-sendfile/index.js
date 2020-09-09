const express = require('./node_modules/express');

const app = express();

app.use(function (req, res, next) {
  const options = {
    root: __dirname
  };
  res.sendFile('./hello.txt', options, function (err) {
    if (err) {
      next(err);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening...');
});
