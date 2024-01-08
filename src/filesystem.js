function write(path, data) {
    const fs = require('fs')

    fs.writeFile(path, data, (err) => {
       if (err) throw err;
       else{
          console.log("The file is updated with the given data")
       }
    })
}

function read(path) {
    const fs = require('fs')

    fs.readFile(path, (err, output) => {
       if (err) throw err;
          return inputD.toString();
    })
}

function append(path, data) {
    const fs = require('fs');

    fs.writeFile(path, data, (err) => {
      if (err) {
        console.error('Error creating the file:', err);
        return;
      }
      console.log('File created successfully');
    });
}

export { write, read, append }