const fs = require('fs');

//  **** reading and writing to streams ****

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) =>{
//   console.log("***** new Chunk *****");
//   writeStream.write("\n NEW CHUNK \n");
//   writeStream.write(chunk);
// })


//  **** piping ****

readStream.pipe(writeStream);