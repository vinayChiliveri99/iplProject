// Find the number of times each team won the toss and also won the match

/*
    object = {
        team1 : count++,
        team2 : count++;
    }
*/

function countWinOfTossAndMatchWithHOF(matches) {
  return matches.reduce((acc, match) => {
    if (match.toss_winner === match.winner) {
      if (acc[match.winner]) {
        acc[match.winner] += 1;
      } else {
        acc[match.winner] = 1;
      }
    }
    return acc;
  }, {});
}

module.exports = countWinOfTossAndMatchWithHOF;
