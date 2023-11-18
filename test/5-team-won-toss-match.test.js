const matches = require('../src/data/matchesInJson.json');
const deliveries = require('../src/data/deliveriesInJson.json');

const countWinOfTossAndMatchWithHOF = require('../src/server/5-team-won-toss-match');

test('count wins which won both toss and match with empty data', () => {
  expect(countWinOfTossAndMatchWithHOF([])).toStrictEqual({});
});

const output1 = require('../src/public/output/5-teamWonTossAndMatch.json');
test('count wins which won both toss and match with empty data', () => {
  expect(countWinOfTossAndMatchWithHOF(matches)).toStrictEqual(
    output1
  );
});
