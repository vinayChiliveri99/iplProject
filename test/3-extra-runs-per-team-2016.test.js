const extraRunsCalculatorUsingHOF = require('../src/server/3-extra-runs-per-team-2016');
const matches = require('../src/data/matchesInJson.json');
const deliveries = require('../src/data/deliveriesInJson.json');

// 1. with empty data
test('count extra runs conceaded per team in 2016 with empty data', () => {
  expect(extraRunsCalculatorUsingHOF([], [])).toStrictEqual({});
});

// 2. with full data
const output1 = require('../src/public/output/3-extraRunsPerTeam2016.json');
test('count extra runs conceaded per team in 2016 with full data', () => {
  expect(
    extraRunsCalculatorUsingHOF(matches, deliveries)
  ).toStrictEqual(output1);
});
