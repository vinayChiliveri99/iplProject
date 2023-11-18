//3. Extra runs conceded per team in the year 2016

// the common thing in both data is match id.

// and then for every match just calculate the extra runs (by bowling team).

// the output has to be like this
/*
{
rcb : 10,
csk : 0,
rr : 20,
...
}
*/

function extraRunsCalculatorUsingHOF(matches, deliveries) {
  // get the match ids from the year 2016.

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
    let extraRuns = parseInt(delivery.extra_runs);

    // checking if current match id, is part of the match id's set we have, and the team is not empty.
    // if so keep updating the acc, if it has team by adding extra runs.
    // if not, just create one and assign extra runs to it.

    if (matchIds.has(currentMatchId) && team !== '') {
      if (acc[team]) {
        acc[team] = acc[team] + extraRuns;
      } else {
        acc[team] = extraRuns;
      }
    }

    return acc;
  }, {});

  return result;
}

module.exports = extraRunsCalculatorUsingHOF;
