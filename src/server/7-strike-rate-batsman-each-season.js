// 7. Find the strike rate of a batsman for each season

function strikeRateOfaBatsmanForEachSeasonUSingHOF(
  matches,
  deliveries,
  playerName = 'MS Dhoni' // Default value for playerName is 'MS Dhoni'
) {
  // Filter deliveries data for the specified player
  const filteredData = deliveries.filter((delivery) => {
    return delivery.batsman === playerName;
  });

  // Initialize an object to store cumulative runs and balls for each season
  const object = filteredData.reduce((acc, delivery) => {
    const batsmanRuns = parseInt(delivery.batsman_runs);
    const isWide = parseInt(delivery.wide_runs) > 0;
    const isNoBall = parseInt(delivery.noball_runs) > 0;
    const matchId = delivery.match_id;

    // Find the corresponding match in the matches data
    const matchIdInMatches = matches.find((m) => {
      return m.id === matchId;
    });

    if (matchIdInMatches) {
      // Extract the season (year) from the match data
      const year = matchIdInMatches.season;

      // Initialize the season in the accumulator if not present
      if (acc[year] === undefined) {
        acc[year] = {
          runs: 0,
          balls: 0,
        };
      }

      // Update runs and balls for each valid delivery (not wide or no-ball)
      if (!isNoBall && !isWide) {
        acc[year]['runs'] += batsmanRuns;
        acc[year]['balls'] += 1;
      }
    }

    return acc;
  }, {});

  // console.log(object);

  // Calculate and store the strike rate for each season
  const playerStrikeRate = Object.entries(object).reduce(
    (acc, [year, { runs, balls }]) => {
      // Calculate the strike rate and store it in the result object
      const strikeRate = ((runs / balls) * 100).toFixed(2);
      acc[year] = parseFloat(strikeRate);
      return acc;
    },
    {}
  );

  // Return the final object containing the strike rate for each season
  return playerStrikeRate;
}

// Export the function for external use
module.exports = strikeRateOfaBatsmanForEachSeasonUSingHOF;
