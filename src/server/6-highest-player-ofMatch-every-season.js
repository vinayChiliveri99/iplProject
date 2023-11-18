let matches = require('../data/matchesInJson.json');

function findHighestPlayerOfMatchAwardsInaSeasonWithHOF(matches) {
  let result = matches.reduce((acc, match) => {
    if (acc[match.season] === undefined) {
      acc[match.season] = {};
    } else {
      if (acc[match.season][match.player_of_match] === undefined) {
        acc[match.season][match.player_of_match] = 1;
      } else {
        acc[match.season][match.player_of_match] += 1;
      }
    }

    return acc;
  }, {});

  // console.log(result);

  // now sort the data and extract the top.

  const finalResult = Object.entries(result).reduce((acc, year) => {
    let maxCount = 0;
    Object.entries(year[1]).map((player) => {
      let currentCount = player[1];

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
