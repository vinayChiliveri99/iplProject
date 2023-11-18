//1. Number of matches played per year for all the years in IPL.

function countMatchesPerYearUsingHOF(matches) {
  // iterating over matches data, and creating a object for year and keep on updating it.

  const result = matches.reduce((totalMatchesIn, match) => {
    let year = match.season;

    if (totalMatchesIn[year] !== undefined) {
      totalMatchesIn[year] += 1;
    } else {
      totalMatchesIn[year] = 1;
    }

    return totalMatchesIn;
  }, {});

  return result;
}

module.exports = countMatchesPerYearUsingHOF;
