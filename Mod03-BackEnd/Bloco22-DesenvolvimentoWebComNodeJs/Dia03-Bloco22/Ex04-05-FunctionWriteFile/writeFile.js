const fs = require('fs');

function writeFile(file, content) {
  fs.writeFileSync(`${__dirname}/${file}`, content);

  return 'ok';
}

module.exports = writeFile;