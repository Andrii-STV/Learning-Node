const fs = require("node:fs");
const deleteFile = require("node:fs");
const readMe = require("node:fs");


//This uses File System native module to create a new file, and write data there. It's a method,
//which requires name of the file, then data of the file, and finally the callback - in this case the err method,
//which will throw an error text if an error occured 

/*
fs.writeFile('message.txt', 'This file has been created with Node native File System Module', (err) => {
    if (err) throw err;
    console.log('The file has been created');
});
*/

//This is a method which can read the file. It requires such items for input: name of file,
// optinally the decoding method (e.g. utf-8) and a callback.
// Logically, in the callback, not only error object needed, but also data to store the actual data.    

readMe.readFile('message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Your file contents this data: ', data);
});


//This also uses the same module, but in this case, there is another method,
//which removes the file. It requires only file name and callback
/*
deleteFile.unlink('message.txt', (err) => {
    if (err) throw err;
    console.log('The file has been deleted succesfuly.');
});   
*/