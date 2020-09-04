/* eslint-disable no-console */
const fs = require('fs');

fs.writeFile('./' + process.argv[2], err => {
  if (err) throw err;
});
