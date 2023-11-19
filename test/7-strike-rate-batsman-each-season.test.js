const matches = require('../src/data/matchesInJson.json');
const deliveries = require('../src/data/deliveriesInJson.json');

const strikeRateOfaBatsmanForEachSeasonUSingHOF = require('../src/server/7-strike-rate-batsman-each-season');

// with empty data

test('strike of a batsman for every season with empty data', () => {
  expect(
    strikeRateOfaBatsmanForEachSeasonUSingHOF([], [], '')
  ).toStrictEqual({});
});

// with full data.
const output1 = require('../src/public/output/7-strikeRateOfaBatsmanForEachSeason.json');

test('strike rate of a batsman (MS Dhoni) for every season with full data', () => {
  expect(
    strikeRateOfaBatsmanForEachSeasonUSingHOF(
      matches,
      deliveries,
      'MS Dhoni'
    )
  ).toStrictEqual(output1);
});
