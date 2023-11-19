const countMatchesPerYearUsingHOF = require('../src/server/1-matches-per-year');

// 1. with empty input.

test('counts matches per every year', () => {
  expect(countMatchesPerYearUsingHOF([])).toStrictEqual({});
});

// 2. with full data as input.

const matches = require('../src/data/matchesInJson.json');
const output1 = require('../src/public/output/1-matchesPerYear.json');

test('counts matches per every year with whole data', () => {
  expect(countMatchesPerYearUsingHOF(matches)).toStrictEqual(output1);
});

// 3. when there is a slihgt defect in the year, that is year is empty.
// in this problem year plays a major role.

const testFile2 = [
  {
    id: '1',
    season: '', // season (year is empty)
    city: 'Hyderabad',
    date: '2017-04-05',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    toss_winner: 'Royal Challengers Bangalore',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: 'Sunrisers Hyderabad',
    win_by_runs: '35',
    win_by_wickets: '0',
    player_of_match: 'Yuvraj Singh',
    venue: 'Rajiv Gandhi International Stadium, Uppal',
    umpire1: 'AY Dandekar',
    umpire2: 'NJ Llong',
    umpire3: '',
  },
  {
    id: '2',
    season: '2017',
    city: 'Hyderabad',
    date: '2017-04-05',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    toss_winner: 'Royal Challengers Bangalore',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: 'Sunrisers Hyderabad',
    win_by_runs: '35',
    win_by_wickets: '0',
    player_of_match: 'Yuvraj Singh',
    venue: 'Rajiv Gandhi International Stadium, Uppal',
    umpire1: 'AY Dandekar',
    umpire2: 'NJ Llong',
    umpire3: '',
  },
  {
    id: '3',
    season: '2017',
    city: 'Hyderabad',
    date: '2017-04-05',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    toss_winner: 'Royal Challengers Bangalore',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: 'Sunrisers Hyderabad',
    win_by_runs: '35',
    win_by_wickets: '0',
    player_of_match: 'Yuvraj Singh',
    venue: 'Rajiv Gandhi International Stadium, Uppal',
    umpire1: 'AY Dandekar',
    umpire2: 'NJ Llong',
    umpire3: '',
  },
];

test('counts matches per every year with testFile2', () => {
  expect(countMatchesPerYearUsingHOF(testFile2)).toStrictEqual({
    2017: 2,
  });
});

/**
 * 
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
 */
