//3. Extra runs conceded per team in the year 2016

let deliveries = require('../data/deliveriesInJson.json');
let matches = require('../data/matchesInJson.json');

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

function extraRunsCalculator(matches, deliveries) {
  let matchIds = new Set();
  let result = {};

  for (let index = 0; index < matches.length; index++) {
    let match = matches[index];
    let year = match.season;

    if (year === 2016 || year === '2016') {
      let id = match.id;
      matchIds.add(id);
    }
  }
  // now i have the data of the matches played in the year 2016 with match Ids.
  // console.log(matchIds);

  // iterate over deliveries and check if matchId present in the matchIds set, if so,
  // get the extra runs conceaded by bowling team and update it in the object.

  for (let index = 0; index < deliveries.length; index++) {
    let currentObject = deliveries[index];
    let currentMatchId = currentObject.match_id;
    let team = currentObject.bowling_team;
    let extraRuns = currentObject.extra_runs;

    if (matchIds.has(currentMatchId)) {
      if (result[team] === undefined) {
        result[team] = parseInt(extraRuns); // since the runs stored in string format.
      } else {
        result[team] = parseInt(result[team]) + parseInt(extraRuns);
      }
    }
  }

  console.log(JSON.stringify(result));
}

extraRunsCalculator(matches, deliveries);
