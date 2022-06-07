const fs = require('fs/promises');

const strings =  ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function writeStrings() {
  try {
    const promises = strings.map((s, i) => {
      fs.writeFile(`./file${i}.txt`, s);
    })

    Promise.all(promises);
  } catch(err) {
    console.log(err);
  }
}

async function readStrings() {
  try {
    let string = '';

    for(let index = 0; index <= 4; index++) {
      let word = await fs.readFile(`./file${index}.txt`, 'utf-8');
  
      string = string + ' ' + word;
    }
  
    await fs.writeFile(`./file.all`, string);
    return string;

  } catch(err) {
    console.log(err)
  }
};