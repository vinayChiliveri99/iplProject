const matches = require('../src/data/matchesInJson.json');
const findHighestPlayerOfMatchAwardsInaSeasonWithHOF = require('../src/server/6-highest-player-ofMatch-every-season');

// 1. with full data.
const output1 = require('../src/public/output/6-highestPlayerMatchForEverySeason.json');

test('Highest Player of match awards for every season with full data', () => {
  expect(
    findHighestPlayerOfMatchAwardsInaSeasonWithHOF(matches)
  ).toStrictEqual(output1);
});

// 2. with emmpty data.

const output2 = {};

test('Highest Player of match awards for every season with empty data', () => {
  expect(
    findHighestPlayerOfMatchAwardsInaSeasonWithHOF([])
  ).toStrictEqual(output2);
});

// 3. when few seasons miss out in the data.
const input3 = [
  {
    id: '1',
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
const output3 = {
  2017: {
    'Yuvraj Singh': 1,
  },
};

test('Highest Player of match awards for every season when few seasons not there from (2008 - 2020)', () => {
  expect(
    findHighestPlayerOfMatchAwardsInaSeasonWithHOF(input3)
  ).toStrictEqual(output3);
});

// 4. when 2 players have same no. of awards in a season.

let input4 = [
  {
    id: '1',
    season: '2018',
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
    id: '86',
    season: '2018',
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
    player_of_match: 'Sachin Tendulkar',
    venue: 'Rajiv Gandhi International Stadium, Uppal',
    umpire1: 'AY Dandekar',
    umpire2: 'NJ Llong',
    umpire3: '',
  },
];

let output4 = {
  2018: {
    'Sachin Tendulkar': 1,
    'Yuvraj Singh': 1,
  },
};

test('Highest Player of match awards for every season when a season comprises two players with same num of awards', () => {
  expect(
    findHighestPlayerOfMatchAwardsInaSeasonWithHOF(input4)
  ).toStrictEqual(output4);
});
