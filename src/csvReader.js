const fs = require('fs');
const csv = require('csv-parser');

// this is how we are importing the fs (file system) module to js
// csv parseer converts csv to json 

function readCSV(filePath) {
    const results = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

module.exports = readCSV;
