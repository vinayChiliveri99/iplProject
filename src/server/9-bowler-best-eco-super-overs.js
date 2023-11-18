// Find the bowler with the best economy in super overs
let deliveries = require('../data/deliveriesInJson.json');
//
//

function findBestEconomicalBowlerInSuperOversUsingHOF(deliveries) {
  //

  let filteredData = deliveries.filter((delivery) => {
    return parseInt(delivery.is_super_over);
  });

  // console.log(filteredData);

  let result = filteredData.reduce((acc, delivery) => {
    const bowler = delivery.bowler;
    const isWideBall = delivery.wide_runs == 0 ? 1 : 0;
    const isNoBall = delivery.noball_runs == 0 ? 1 : 0;
    const wideRuns = parseInt(delivery.wide_runs);
    const batsmanRuns = parseInt(delivery.batsman_runs);
    const noballRuns = parseInt(delivery.noball_runs);
    const xRuns = wideRuns + batsmanRuns + noballRuns;

    if (acc[bowler]) {
      acc[bowler].totalRuns += xRuns;
      acc[bowler].totalBalls += isWideBall && isNoBall;
    } else {
      acc[bowler] = {
        totalRuns: xRuns,
        totalBalls: isWideBall && isNoBall,
      };
    }

    return acc;
  }, {});

  // console.log(result);

  let resultArray = Object.entries(result).reduce(
    (acc, [player, { totalRuns, totalBalls }]) => {
      acc.push({
        bowler: [player],
        economy: (totalRuns / (totalBalls / 6)).toFixed(2),
      });
      return acc;
    },
    []
  );

  resultArray.sort((a, b) => a.economy - b.economy);
  if (resultArray.length == 0) return {};
  return resultArray[0];
}

module.exports = findBestEconomicalBowlerInSuperOversUsingHOF;
