//3. Extra runs conceded per team in the year 2016

// the common thing in both data is match id.
// get the match ids from the year 2016.
// and then for every match just calculate the extra runs (by bowling team) in innings 1 and 2 respectively.

// the output can be like this
/*
{
rcb : 10,
csk : 0,
rr : 20,
...
}
*/

function extraRunsCalculatorUsingHOF(matches, deliveries) {
  const matchIds = matches.reduce((acc, match) => {
    if (match.season === '2016') {
      acc.add(match.id);
    }
    return acc;
  }, new Set());

  // console.log(matchIds);

  const result = deliveries.reduce((acc, delivery) => {
    let currentMatchId = delivery.match_id;
    let team = delivery.bowling_team;
    let extraRuns = delivery.extra_runs;

    if (matchIds.has(currentMatchId)) {
      if (acc[team]) {
        acc[team] = parseInt(acc[team]) + parseInt(extraRuns);
      } else {
        acc[team] = parseInt(extraRuns);
      }
    }

    return acc;
  }, {});

  return result;
}

module.exports = extraRunsCalculatorUsingHOF;
