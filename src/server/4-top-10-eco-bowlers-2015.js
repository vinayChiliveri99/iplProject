// Top 10 economical bowlers in the year 2015

// bowler economy = total runs/(totalballs/6);
// total runs = wideRuns + batsmanRuns + noballRuns,
// total balls = except wide balls, everything.

function findTop10EcoBowlersIn2015UsingHOF(matches, deliveries) {
  let matchIds = matches.reduce((acc, match) => {
    if (match.season === '2015' || match.season === 2015) {
      acc.add(match.id);
    }
    return acc;
  }, new Set());

  let object = deliveries.reduce((acc, delivery) => {
    const matchId = delivery.match_id;
    const bowler = delivery.bowler;
    const isWideBall = delivery.wide_runs == 0 ? 1 : 0;
    const isNoBall = delivery.noball_runs == 0 ? 1 : 0;
    const wideRuns = parseInt(delivery.wide_runs);
    const batsmanRuns = parseInt(delivery.batsman_runs);
    const noballRuns = parseInt(delivery.noball_runs);
    const xRuns = wideRuns + batsmanRuns + noballRuns;

    if (matchIds.has(matchId)) {
      if (acc[bowler]) {
        acc[bowler].totalRuns += xRuns;
        acc[bowler].totalBalls += isWideBall && isNoBall;
      } else {
        acc[bowler] = {
          totalRuns: xRuns,
          totalBalls: isWideBall && isNoBall,
        };
      }
    }

    return acc;
  }, {});

  // by this I will have data of all the

  let resultArray = Object.entries(object).reduce(
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
  return resultArray.slice(0, 10);
}

module.exports = findTop10EcoBowlersIn2015UsingHOF;
