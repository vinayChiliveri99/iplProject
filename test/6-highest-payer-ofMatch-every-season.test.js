const matches = require('../src/data/matchesInJson.json');

// need to be changed.

const findHighestPlayerOfMatchAwardsInaSeasonWithHOF = require('../src/server/6-highest-player-ofMatch-every-season');
const output1 = require('../src/public/output/6-highestPlayerMatchForEverySeason.json');

test('function incompleted', () => {
  expect(
    findHighestPlayerOfMatchAwardsInaSeasonWithHOF(matches)
  ).toStrictEqual(output1);
});
