const fs = require("node:fs");
const deleteFile = require("node:fs");


//This uses File System native module to create a new file, and write data there. It's a method,
//which requires name of the file, then data of the file, and finally the callback - in this case the err method,
//which will throw an error text if an error occured 


/*
fs.writeFile('message.txt', 'This file has been created with Node native File System Module', (err) => {
    if (err) throw err;
    console.log('The file has been created');
});
*/

deleteFile.unlink('message.txt', (err) => {
    if (err) throw err;
    console.log('The file has been deleted succesfuly.');
});   