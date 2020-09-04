const fs = require('fs');

let stringData = '';

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  stringData = data;
  if (err) throw err;
});

fs.writeFile(process.argv[3], stringData, 'utf8', err => {
  if (err) throw err;
  // console.log(process.argv[2]);
});
