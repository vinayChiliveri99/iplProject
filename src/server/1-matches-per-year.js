// Number of matches played per year for all the years in IPL.

let matches = require('../data/matchesInJson.json');

// idea : the given objects are in array, as array of objects.
// iterate over array, for every index, get the object and extract the year by using its key 'season'
// then, check if year is valid
// if so, create a new key, value pair in the result object and just keep updating it.

function countMatchesPerYear(matches) {
  const result = {};

  for (let index = 0; index < matches.length; index++) {
    let match = matches[index];
    let year = match.season;

    // console.log(year); this gives the direct year, which we got from match.season

    if (year !== undefined) {
      result[year] = (result[year] || 0) + 1;
    }
  }

  console.log(JSON.stringify(result));
}

countMatchesPerYear(matches);

/* 
example : 

let name = 'Full Name';
let scientist = {
  [name]: 'Albert Einstein',
};
scientist; // returns: {Full Name: "Albert Einstein"}
*/
