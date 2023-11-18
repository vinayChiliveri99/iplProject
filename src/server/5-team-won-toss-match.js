// 5. Find the number of times each team won the toss and also won the match

// this is the structure of output, we aiming at.
// check if the result has this match winning team, if so upate it.
// if no, then create one and assign its value to be 1.
// added a edge case, to avoid errors, when the match winner and toss winner data is absent

/*
    result = {
        team1 : count++,
        team2 : count++;
    }
*/

function countWinOfTossAndMatchWithHOF(matches) {
  return matches.reduce((acc, match) => {
    if (
      match.toss_winner === match.winner &&
      match.toss_winner !== '' &&
      match.winner !== ''
    ) {
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
