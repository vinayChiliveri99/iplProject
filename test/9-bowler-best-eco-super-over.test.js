const deliveries = require('../src/data/deliveriesInJson.json');
const findBestEconomicalBowlerInSuperOversUsingHOF = require('../src/server/9-bowler-best-eco-super-overs');

// with empty data.
test('best economical bowler with empty data', () => {
  expect(
    findBestEconomicalBowlerInSuperOversUsingHOF([])
  ).toStrictEqual({});
});

// with full data.
const output1 = require('../src/public/output/9-bestEcoBowlerInSuperOvers.json');
test('best econmical bowler with full data', () => {
  expect(
    findBestEconomicalBowlerInSuperOversUsingHOF(deliveries)
  ).toStrictEqual(output1);
});
