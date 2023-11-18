// 4. Top 10 economical bowlers in the year 2015

// Formula to find the bowler economy = total runs/(totalballs/6);
// The total runs  = wideRuns + batsmanRuns + noballRuns, which is stored in xRuns.
// total balls = except wide balls and no balls, everything. (wide balls & no balls, doesn't increase balls count).

function findTop10EcoBowlersIn2015UsingHOF(matches, deliveries) {
  // extracting the match Ids from matches data, that are played in the year 2015,
  // and storing them in a set.

  let matchIds = matches.reduce((acc, match) => {
    if (match.season === '2015' || match.season === 2015) {
      acc.add(match.id);
    }
    return acc;
  }, new Set());

  // now iterate over deliveries and check if the current delivery bowled, has a match Id which is
  // present in our set of id's. If so proceed further.

  let object = deliveries.reduce((acc, delivery) => {
    const matchId = delivery.match_id;

    if (matchIds.has(matchId)) {
      // found that, current match id, is a part of our set of Id's.
      // now fetch all the required data, that are necessary to calculate the economy.
      // totalRuns given by bowler is accumulation of
      // wide runs, batsman runs and no ball runs.

      // also, calculate total balls, which is a main factor of deciding economy.
      // ball is added, to bowlers count only when the ball is not wide and not a no ball.

      const bowler = delivery.bowler;
      const isNotWideBall = delivery.wide_runs == 0 ? 1 : 0;
      const isNotNoBall = delivery.noball_runs == 0 ? 1 : 0;
      const wideRuns = parseInt(delivery.wide_runs);
      const batsmanRuns = parseInt(delivery.batsman_runs);
      const noballRuns = parseInt(delivery.noball_runs);
      const xRuns = wideRuns + batsmanRuns + noballRuns;

      // keep creating and updating the acc, to have the updated data.

      if (acc[bowler]) {
        acc[bowler].totalRuns += xRuns;
        acc[bowler].totalBalls += isNotWideBall && isNotNoBall;
      } else {
        acc[bowler] = {
          totalRuns: xRuns,
          totalBalls: isNotWideBall && isNotNoBall,
        };
      }
    }

    return acc;
  }, {});

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

  let resultArray = Object.entries(object).reduce(
    (acc, [player, { totalRuns, totalBalls }]) => {
      // added a edge case, to avoid errors, when balls count is zero.

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

  // sort the array, based on economy and in ascending order and slice it to return the top 10.

  resultArray.sort((a, b) => a.economy - b.economy);
  return resultArray.slice(0, 10);
}

module.exports = findTop10EcoBowlersIn2015UsingHOF;
