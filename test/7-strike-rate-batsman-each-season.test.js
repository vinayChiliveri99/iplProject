const matches = require('../src/data/matchesInJson.json');
const deliveries = require('../src/data/deliveriesInJson.json');

const strikeRateOfaBatsmanForEachSeasonUSingHOF = require('../src/server/7-strike-rate-batsman-each-season');

// 1. with empty data

test('strike of a batsman for every season with empty data', () => {
  expect(
    strikeRateOfaBatsmanForEachSeasonUSingHOF([], [], '')
  ).toStrictEqual({});
});

// 2. with full data.
const output2 = require('../src/public/output/7-strikeRateOfaBatsmanForEachSeason.json');

test('strike rate of a batsman (MS Dhoni) for every season with full data', () => {
  expect(
    strikeRateOfaBatsmanForEachSeasonUSingHOF(
      matches,
      deliveries,
      'MS Dhoni'
    )
  ).toStrictEqual(output2);
});

// 3. to match with some other players data.

const output3 = {
  'DA Warner': {
    2009: 123.48,
    2010: 146.03,
    2011: 117.82,
    2012: 162.58,
    2013: 126.54,
    2014: 142.32,
    2015: 155.62,
    2016: 151.25,
    2017: 141.2,
  },
};

test('strike rate of DA Warner is being tested, with full data', () => {
  expect(
    strikeRateOfaBatsmanForEachSeasonUSingHOF(
      matches,
      deliveries,
      'DA Warner'
    )
  ).toStrictEqual(output3);
});

// 4. when you don't pass any player, we ll get empty object.

test('strike rate of DA Warner is being tested, with full data', () => {
  expect(
    strikeRateOfaBatsmanForEachSeasonUSingHOF(matches, deliveries, '')
  ).toStrictEqual({});
});
