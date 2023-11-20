// 2. Number of matches won per team per year in IPL.

function findNoOfMatchesWonPerTeamPerYearWithHOF(matches) {
  // checking if the year is not empty and winner team is not empty, to avoid errors.

  return matches.reduce((acc, match) => {
    const winnerTeam = match.winner;
    const year = match.season;

    // eslint-disable-next-line prettier/prettier
    if (winnerTeam !== '' && year !== '') {
      // when the data is clear, move ahead with creating the object,
      // if there's no object with the winning team in that year, create one
      // if its already present just keep updating the values.

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
}

module.exports = findNoOfMatchesWonPerTeamPerYearWithHOF;

/*
  By Object Destructuring :

  function findNoOfMatchesWonPerTeamPerYearWithHOF(matches) {
  return matches.reduce((acc, { winner, season }) => {
    if (winner && season) {
      acc[season] = acc[season] || {};
      acc[season][winner] = (acc[season][winner] || 0) + 1;
    }
    return acc;
  }, {});
}

module.exports = findNoOfMatchesWonPerTeamPerYearWithHOF;

*/
