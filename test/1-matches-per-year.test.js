const countMatchesPerYearUsingHOF = require('../src/server/1-matches-per-year');

test('counts matches per every year', () => {
  expect(countMatchesPerYearUsingHOF([])).toStrictEqual({});
});

const matches = require('../src/data/matchesInJson.json');
const output1 = require('../src/public/output/1-matchesPerYear.json');

test('counts matches per every year with whole data', () => {
  expect(countMatchesPerYearUsingHOF(matches)).toStrictEqual(output1);
});

/**
 * 
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
 */
