// 2. Number of matches won per team per year in IPL.

function findNoOfMatchesWonPerTeamPerYearWithHOF(matches) {
  let result = matches.reduce((acc, match) => {
    let winnerTeam = match.winner;
    let year = match.season;

    if (winnerTeam !== '') {
      if (acc[year] !== undefined) {
        if (acc[year][winnerTeam] !== undefined) {
          acc[year][winnerTeam] += 1;
        } else {
          acc[year][winnerTeam] = 1;
        }
      } else {
        acc[year] = { [winnerTeam]: 1 };
      }
    }

    return acc;
  }, {});

  return result;
}

module.exports = findNoOfMatchesWonPerTeamPerYearWithHOF;
