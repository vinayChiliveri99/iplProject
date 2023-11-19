const matches = require('../src/data/matchesInJson.json');

const countWinOfTossAndMatchWithHOF = require('../src/server/5-team-won-toss-match');

// 1. with empty input

test('count wins which won both toss and match with empty data', () => {
  expect(countWinOfTossAndMatchWithHOF([])).toStrictEqual({});
});

// 2. with the full data.

const output2 = require('../src/public/output/5-teamWonTossAndMatch.json');
test('count wins which won both toss and match with empty data', () => {
  expect(countWinOfTossAndMatchWithHOF(matches)).toStrictEqual(
    output2
  );
});

// 3. case when there is no data, matching the winner toss and winning team.
const matchesInput3 = [
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
  {
    id: '2',
    season: '2017',
    city: 'Pune',
    date: '2017-04-06',
    team1: 'Mumbai Indians',
    team2: 'Rising Pune Supergiant',
    toss_winner: 'Rising Pune Supergiant',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: 'Mumbai Indians',
    win_by_runs: '0',
    win_by_wickets: '7',
    player_of_match: 'SPD Smith',
    venue: 'Maharashtra Cricket Association Stadium',
    umpire1: 'A Nand Kishore',
    umpire2: 'S Ravi',
    umpire3: '',
  },
];

const output3 = {};

test('When there is no team, with both winning toss and match ', () => {
  expect(countWinOfTossAndMatchWithHOF(matchesInput3)).toStrictEqual(
    output3
  );
});

// 4. when the winning team data is missing.

const matchesInput4 = [
  {
    id: '1',
    season: '2017',
    city: 'Hyderabad',
    date: '2017-04-05',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    toss_winner: '', // toss winner missing
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
    city: 'Pune',
    date: '2017-04-06',
    team1: 'Mumbai Indians',
    team2: 'Rising Pune Supergiant',
    toss_winner: '', // toss winner missing
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: 'Mumbai Indians',
    win_by_runs: '0',
    win_by_wickets: '7',
    player_of_match: 'SPD Smith',
    venue: 'Maharashtra Cricket Association Stadium',
    umpire1: 'A Nand Kishore',
    umpire2: 'S Ravi',
    umpire3: '',
  },
];

const output4 = {};

test('When the toss winning team, data is missing ', () => {
  expect(countWinOfTossAndMatchWithHOF(matchesInput4)).toStrictEqual(
    output4
  );
});

// 5. when the winner is missing

const matchesInput5 = [
  {
    id: '1',
    season: '2017',
    city: 'Hyderabad',
    date: '2017-04-05',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    toss_winner: 'Sunrisers Hyderabad',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: '', // winner missing
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
    city: 'Pune',
    date: '2017-04-06',
    team1: 'Mumbai Indians',
    team2: 'Rising Pune Supergiant',
    toss_winner: 'Mumbai Indians',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: '', // winner missing
    win_by_runs: '0',
    win_by_wickets: '7',
    player_of_match: 'SPD Smith',
    venue: 'Maharashtra Cricket Association Stadium',
    umpire1: 'A Nand Kishore',
    umpire2: 'S Ravi',
    umpire3: '',
  },
];

const output5 = {};

test('When the winner of the match, data is missing ', () => {
  expect(countWinOfTossAndMatchWithHOF(matchesInput5)).toStrictEqual(
    output5
  );
});
