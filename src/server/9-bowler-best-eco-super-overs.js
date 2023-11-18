// 9. Find the bowler with the best economy in super overs
let deliveries = require('../data/deliveriesInJson.json');
//
//

function findBestEconomicalBowlerInSuperOversUsingHOF(deliveries) {
  // filter the data, to contain only deliveries bowled in super over.

  let filteredData = deliveries.filter((delivery) => {
    return parseInt(delivery.is_super_over);
  });

  // console.log(filteredData);

  let result = filteredData.reduce((acc, delivery) => {
    // now fetch all the required data, that are necessary to calculate the economy.
    // totalRuns given by bowler is accumulation of
    // wide runs, batsman runs and no ball runs.

    // also, calculate total balls, which is a main factor of deciding economy.
    // ball is added, to bowlers count only when the ball is not wide and not a no ball.

    const bowler = delivery.bowler;

    // isNotWideBall and isNotNoBall used to calculate total balls

    const isNotWideBall = delivery.wide_runs == 0 ? 1 : 0;
    const isNotNoBall = delivery.noball_runs == 0 ? 1 : 0;

    // wide runs, batsman runs and no ball runs used to calculate total runs

    const wideRuns = parseInt(delivery.wide_runs);
    const batsmanRuns = parseInt(delivery.batsman_runs);
    const noballRuns = parseInt(delivery.noball_runs);

    const xRuns = wideRuns + batsmanRuns + noballRuns;

    // keep updating, if acc has the bowler, else create one.

    if (acc[bowler]) {
      acc[bowler].totalRuns += xRuns;
      acc[bowler].totalBalls += isNotWideBall && isNotNoBall;
    } else {
      acc[bowler] = {
        totalRuns: xRuns,
        totalBalls: isNotWideBall && isNotNoBall,
      };
    }

    return acc;
  }, {});

  // console.log(result);

  // by this I will have data of all the bowlers, with their total runs and total balls.
  // in the form of an object
  /*
  {
    player : {
      totalRuns : xRuns,
      totalBalls : yBalls,
    }
    ........
  }
  */

  // now, extract the player and calculate the economy, and push to the array as a new object
  // which contains the pair of {bowler : player, economy : some x}

  let resultArray = Object.entries(result).reduce(
    (acc, [player, { totalRuns, totalBalls }]) => {
      // added extra case, where i check the total balls > 0, to avoid mathematical errors.

      if (totalBalls > 0) {
        acc.push({
          bowler: [player],
          economy: (totalRuns / (totalBalls / 6)).toFixed(2),
        });
      }
      return acc;
    },
    []
  );

  // sort the array in ascending order based on the economy and return the one at zero index.

  resultArray.sort((a, b) => a.economy - b.economy);
  if (resultArray.length == 0) return {};
  return resultArray[0];
}

module.exports = findBestEconomicalBowlerInSuperOversUsingHOF;
