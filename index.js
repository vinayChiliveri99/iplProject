const matches = require('./src/data/matchesInJson.json');
const deliveries = require('./src/data/deliveriesInJson.json');

const fs = require('fs');

const countMatchesPerYearUsingHOF = require('./src/server/1-matches-per-year');
const findNoOfMatchesWonPerTeamPerYearWithHOF = require('./src/server/2-matches-won-per-year-per-team');
const extraRunsCalculatorUsingHOF = require('./src/server/3-extra-runs-per-team-2016');
const findTop10EcoBowlersIn2015UsingHOF = require('./src/server/4-top-10-eco-bowlers-2015');
const countWinOfTossAndMatchWithHOF = require('./src/server/5-team-won-toss-match');
const findHighestPlayerOfMatchAwardsInaSeasonWithHOF = require('./src/server/6-highest-player-ofMatch-every-season');
const strikeRateOfaBatsmanForEachSeasonUSingHOF = require('./src/server/7-strike-rate-batsman-each-season');
const highestNumberOfDismissalsbyAnotherPlayerUsingHOF = require('./src/server/8-one-player-dismissed-another');
const findBestEconomicalBowlerInSuperOversUsingHOF = require('./src/server/9-bowler-best-eco-super-overs');

/* 1. Number of matches played per year for all the years in IPL. using fs push data in json file */

fs.writeFileSync(
  'src/public/output/1-matchesPerYear.json',
  JSON.stringify(countMatchesPerYearUsingHOF(matches), null, 2)
);

/* 2. Number of matches won per team per year in IPL. */

fs.writeFileSync(
  'src/public/output/2-matchesWonPerYearPerTeam.json',
  JSON.stringify(
    findNoOfMatchesWonPerTeamPerYearWithHOF(matches),
    null,
    2
  )
);

/* 3. Extra runs conceded per team in the year 2016 */

fs.writeFileSync(
  'src/public/output/3-extraRunsPerTeam2016.json',
  JSON.stringify(
    extraRunsCalculatorUsingHOF(matches, deliveries),
    null,
    2
  )
);

/* 4. Top 10 economical bowlers in the year 2015 */

fs.writeFileSync(
  'src/public/output/4-top10EconomicalBowlersIn2015.json',
  JSON.stringify(
    findTop10EcoBowlersIn2015UsingHOF(matches, deliveries),
    null,
    2
  )
);

/* 5. Find the number of times each team won the toss and also won the match */

fs.writeFileSync(
  'src/public/output/5-teamWonTossAndMatch.json',
  JSON.stringify(countWinOfTossAndMatchWithHOF(matches), null, 2)
);

/* 6. Find a player who has won the highest number of Player of the Match awards for each season */

fs.writeFileSync(
  'src/public/output/6-highestPlayerMatchForEverySeason.json',
  JSON.stringify(
    findHighestPlayerOfMatchAwardsInaSeasonWithHOF(matches),
    null,
    2
  )
);

/* 7. Find the strike rate of a batsman for each season */

fs.writeFileSync(
  'src/public/output/7-strikeRateOfaBatsmanForEachSeason.json',
  JSON.stringify(
    strikeRateOfaBatsmanForEachSeasonUSingHOF(matches, deliveries),
    null,
    2
  )
);

/* 8. Find the highest number of times one player has been dismissed by another player */

fs.writeFileSync(
  'src/public/output/8-highestOnePlayerDismissedAnother.json',
  JSON.stringify(
    highestNumberOfDismissalsbyAnotherPlayerUsingHOF(deliveries)
  ),
  null,
  2
);

/* 9. // Find the bowler with the best economy in super overs */

fs.writeFileSync(
  'src/public/output/9-bestEcoBowlerInSuperOvers.json',
  JSON.stringify(
    findBestEconomicalBowlerInSuperOversUsingHOF(deliveries)
  ),
  null,
  2
);
