const matches = require('../src/data/matchesInJson.json');
const deliveries = require('../src/data/deliveriesInJson.json');

const findTop10EcoBowlersIn2015UsingHOF = require('../src/server/4-top-10-eco-bowlers-2015');

test('count top 10 economical bowlers in the year 2015 with empty data', () => {
  expect(findTop10EcoBowlersIn2015UsingHOF([], [])).toStrictEqual([]);
});

// with full data
const output1 = require('../src/public/output/4-top10EconomicalBowlersIn2015.json');

test('count top 10 economical bowlers in the year 2015 with empty data', () => {
  expect(
    findTop10EcoBowlersIn2015UsingHOF(matches, deliveries)
  ).toStrictEqual(output1);
});
