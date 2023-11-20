// 1. Number of matches played per year for all the years in IPL.

function countMatchesPerYearUsingHOF(matches) {
  // iterating over matches data, and creating a object for year and keep on updating it.

  const result = matches.reduce((totalMatchesIn, match) => {
    const year = match.season;

    // check if year is not, empty. As year is the center point of our problem.

    if (year !== '') {
      // if year is present in the object, just keep incrementing it.
      // if not present, then create a object with the year and assign its value to 1.

      if (totalMatchesIn[year] !== undefined) {
        totalMatchesIn[year] += 1;
      } else {
        totalMatchesIn[year] = 1;
      }
    }

    return totalMatchesIn;
  }, {});

  return result;
}

module.exports = countMatchesPerYearUsingHOF;
