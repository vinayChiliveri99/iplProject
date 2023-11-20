// 6. Find a player who has won the highest number of Player of the Match awards for each season

let matches = require('../data/matchesInJson.json');

function findHighestPlayerOfMatchAwardsInaSeasonWithHOF(matches) {
  // Initialize an empty object to store the midway data named as result.

  let result = matches.reduce((acc, match) => {
    // Check if the season exists in the result object, if not, create an empty object for the season

    if (acc[match.season] === undefined) {
      acc[match.season] = {};
    } else {
      // Update the count for the player in the current season

      if (acc[match.season][match.player_of_match] === undefined) {
        acc[match.season][match.player_of_match] = 1;
      } else {
        acc[match.season][match.player_of_match] += 1;
      }
    }

    return acc;
  }, {});

  // console.log(result);

  // by this time, our intermediate looks, like this.
  // from this midway, we need to find the max player of match awards won by a player in the season.

  /**
   * Example of the intermediate result:
    {
      '2017': {
        'SPD Smith': 1,
        'CA Lynn': 1,
        'GJ Maxwell': 1,
        'KM Jadhav': 1,
        'Rashid Khan': 2,
        'N Rana': 2,
        'AR Patel': 1,
        'SV Samson': 1,
      },
      '2018': {
        'player': times,
        'player': times,
        .....
      },
      ...
    }
   */

  // Use Object.entries and reduce to find the player with the highest count for each season
  const finalResult = Object.entries(result).reduce((acc, year) => {
    // maxCount to store the max value.
    // here year[0] contains the years, and year[1] contain the players details with their counts.

    let maxCount = 0;
    Object.entries(year[1]).map((player) => {
      let currentCount = player[1];

      // Update the acc object with the player who has the highest count
      // player[0] contains the player name and player[1] contains the count of times.

      if (currentCount > maxCount) {
        maxCount = currentCount;
        acc[year[0]] = {};
        acc[year[0]][player[0]] = maxCount;
      } else if (currentCount === maxCount) {
        acc[year[0]][player[0]] = maxCount;
      }
    });

    return acc;
  }, {});

  // console.log(finalResult);

  return finalResult;
}

// findHighestPlayerOfMatchAwardsInaSeasonWithHOF(matches);

module.exports = findHighestPlayerOfMatchAwardsInaSeasonWithHOF;
