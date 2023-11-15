// Find the number of times each team won the toss and also won the match

let matches = require('../data/matchesInJson.json');

/*
    object = {
        team1 : count++,
        team2 : count++;
    }
*/

function countWinOfTossAndMatch(matches) {
  let result = {};

  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let toss = match.toss_winner;
    let matchWinner = match.winner;

    if (matchWinner === toss) {
      if (result[toss]) {
        result[matchWinner] += 1;
      } else {
        result[matchWinner] = 1;
      }
    }
  }

  console.log(JSON.stringify(result));
}

countWinOfTossAndMatch(matches);
