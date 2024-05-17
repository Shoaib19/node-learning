const fs = require('fs');

// **** reading and writing files ****

// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) 
//     {
//         console.log(err);
//     }
//     else {
//         fs.writeFile('./docs/blog1.txt', data.toString() ,(err, data) => {
//             console.log("Done");
//         })
//     }
// })

// **** append content to file ****

// fs.appendFile('./docs/blog.txt', "Hello node", () => {
//     console.log("Done Appending");
// })

// **** creating and deleteing diractory ****

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err) 
//         console.log(err) 
//         else 
//         console.log("Created");
//     })
// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if (err) 
//         console.log(err)
//         else
//         console.log(" deleted");
//     })
// }

// **** delete file ****

// if(fs.existsSync('./docs/delete_file.txt')){
//     fs.unlink('./docs/delete_file.txt', (err) => {
//         if (err)
//         console.log(err)
//         else
//         console.log(" deleted");
//     })
// }

