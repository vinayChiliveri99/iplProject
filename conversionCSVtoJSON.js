const csvtojson = require('csvtojson');
const fs = require('fs');

// Replace these paths with the paths to your CSV files
const csvFilePath1 = './src/data/deliveries.csv';
const csvFilePath2 = './src/data/matches.csv';

// Replace these paths with the desired paths for the output JSON files
const jsonFilePath1 = './src/data/deliveriesInJson.json';
const jsonFilePath2 = './src/data/matchesInJson.json';

// Function to convert CSV to JSON and write to file
function convertCsvToJson(csvFilePath, jsonFilePath) {
  csvtojson()
    .fromFile(csvFilePath)
    .then((jsonArrayObj) => {
      const jsonString = JSON.stringify(jsonArrayObj, null, 2);

      fs.writeFile(jsonFilePath, jsonString, 'utf8', (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log(
            'JSON file has been written successfully:',
            jsonFilePath
          );
        }
      });
    })
    .catch((err) => {
      console.error('Error converting CSV to JSON:', err);
    });
}

// Convert each CSV file to JSON
convertCsvToJson(csvFilePath1, jsonFilePath1);
convertCsvToJson(csvFilePath2, jsonFilePath2);
