// // Number of matches won per team per year in IPL.

let matches = require('../data/matchesInJson.json');

function fetchTeamsInEveryYear(matches) {
  let result = {};

  for (let index = 0; index < matches.length; index++) {
    let match = matches[index];
    let year = match.season;
    let winnerTeam;

    if (match.winner !== '') {
      winnerTeam = match.winner;

      if (result[year]) {
        if (result[year][winnerTeam] === undefined) {
          result[year][winnerTeam] = 1;
        } else {
          result[year][winnerTeam]++;
        }
      } else {
        result[year] = { [winnerTeam]: 1 };
      }
    }
  }

  // console.log(JSON.stringify(result));
  console.log(JSON.stringify(result));
}

fetchTeamsInEveryYear(matches);

// Declared an empty object called result to store the end result in a specific format.
/*
    {
        2008: {
            srh: 10,
            csk: 7,
            ...
        },
        2009: {
            srh: 5,
            mi: 10,
            ...
        }
    }
    An object inside another object.

    Iterating over the data and extracting a single match object from the array of objects of the JSON file.
    From each match, extracting the year and winner of the match.

    Excluding matches where the winner is empty.

    if the year is already present in the result object:
        if the winning team is not present for the current year, initialize it with 1.
        if the winning team is already present for the current year, increment its count.
    if the year is not present in the result object, create a new object for that year with the winning team and initialize its count to 1.

    and finally, printing the result to console.
*/
