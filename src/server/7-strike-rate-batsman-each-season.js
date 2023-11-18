// Find the strike rate of a batsman for each season

function strikeRateOfaBatsmanForEachSeasonUSingHOF(
  matches,
  deliveries
) {
  const object = deliveries.reduce((acc, delivery) => {
    let batsman = delivery.batsman;
    let batsmanRuns = parseInt(delivery.batsman_runs);
    let isWide = parseInt(delivery.wide_runs) > 0;
    let isNoBall = parseInt(delivery.noball_runs) > 0;

    if (batsman === 'MS Dhoni') {
      const matchId = delivery.match_id;
      const matchIdInMatches = matches.find((m) => {
        return m.id === matchId;
      });

      if (matchIdInMatches) {
        const year = matchIdInMatches.season;

        if (acc[year] === undefined) {
          acc[year] = {
            runs: 0,
            balls: 0,
          };
        }

        if (!isNoBall && !isWide) {
          acc[year]['runs'] += batsmanRuns;
          acc[year]['balls'] += 1;
        }
      }
    }
    return acc;
  }, {});

  // console.log(object);

  const playerStrikeRate = Object.entries(object).reduce(
    (acc, [year, { runs, balls }]) => {
      const strikeRate = ((runs / balls) * 100).toFixed(2);
      acc[year] = parseFloat(strikeRate);
      return acc;
    },
    {}
  );

  return playerStrikeRate;
}

module.exports = strikeRateOfaBatsmanForEachSeasonUSingHOF;
