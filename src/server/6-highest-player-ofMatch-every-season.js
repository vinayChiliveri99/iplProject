// Find a player who has won the highest number of Player of the Match awards for each season

/* 
 traverse through matches, for every year, create player of match and increment them.
 result = 2008 : {
    virat : 2,
    dhoni : 3,
    gayle : 1,
 },
 2009 : {
    virat : 2,
    rohit : 5,
    ...
 },
 ......

 After this point, traverse through the results object, and for every result[i] (to be clear, we wont be using indexing as object)
 find max from the object, and keep updating the answer object.

 at last 
 answer = {
    2008 : {dhoni : 3,},
    2009 : {rohit : 5},
    ...

 }
*/

let matches = require('../data/matchesInJson.json');

function findHighestPlayerOfMatchAwardsInaSeason(matches) {
  let result = {};

  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let year = match.season;
    let playerOfMatch = match.player_of_match;

    if (result[year]) {
      if (result[year][playerOfMatch]) {
        result[year][playerOfMatch] += 1;
      } else {
        result[year][playerOfMatch] = 1;
      }
    } else {
      result[year] = {};
    }
  }

  //  console.log(result);

  let answer = {};

  for (let year in result) {
    let playerWithMaxPOM = '';
    let maximum = 0;

    for (let player in result[year]) {
      if (result[year][player] > maximum) {
        maximum = result[year][player];
        playerWithMaxPOM = player;
      }
    }

    answer[year] = {
      [playerWithMaxPOM]: maximum,
    };
  }

  console.log(JSON.stringify(answer));
}

findHighestPlayerOfMatchAwardsInaSeason(matches);
