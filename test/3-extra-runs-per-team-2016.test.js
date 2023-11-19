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

// 3. the case where, the extra runs is empty.
// matches.json
let matchesInput3 = [
  {
    id: '1',
    season: '2016',
    city: 'Hyderabad',
    date: '2016-04-05',
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

// deliveries.json
let deliveriesInput3 = [
  {
    match_id: '1',
    inning: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Royal Challengers Bangalore',
    over: '1',
    ball: '1',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '0', // Modify this value to test different scenarios
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '', // extra runs is empty.
    total_runs: '0',
    player_dismissed: '',
    dismissal_kind: '',
    fielder: '',
  },
];

const output3 = {
  'Royal Challengers Bangalore': 0,
};
test('count extra runs conceaded per team in 2016, where extra runs is empty', () => {
  expect(
    extraRunsCalculatorUsingHOF(matchesInput3, deliveriesInput3)
  ).toStrictEqual(output3);
});

// 4. Have data for other match id's in deliveries data, but that match is not present in matches data.

let matchesInput4 = [
  {
    id: '1',
    season: '2016',
    city: 'Hyderabad',
    date: '2016-04-05',
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

// deliveries.json
let deliveriesInput4 = [
  {
    match_id: '1',
    inning: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Royal Challengers Bangalore',
    over: '1',
    ball: '1',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '1',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '1',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '2',
    total_runs: '0',
    player_dismissed: '',
    dismissal_kind: '',
    fielder: '',
  },
  {
    match_id: '1',
    inning: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Royal Challengers Bangalore',
    over: '1',
    ball: '1',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '1',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '1',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '2',
    total_runs: '0',
    player_dismissed: '',
    dismissal_kind: '',
    fielder: '',
  },
  {
    match_id: '2',
    inning: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Mumbai Indians',
    over: '1',
    ball: '1',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '1',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '1',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '2',
    total_runs: '0',
    player_dismissed: '',
    dismissal_kind: '',
    fielder: '',
  },
];

const output4 = {
  'Royal Challengers Bangalore': 4,
};
test('Have extra data in deliveries, but data about this extra match is absent in matches data', () => {
  expect(
    extraRunsCalculatorUsingHOF(matchesInput4, deliveriesInput4)
  ).toStrictEqual(output4);
});

// 5. Match Id is absent in matches data.

let matchesInput5 = [
  {
    id: '',
    season: '2016',
    city: 'Hyderabad',
    date: '2016-04-05',
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

// deliveries.json
let deliveriesInput5 = [
  {
    match_id: '1',
    inning: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Chennai Super Kings',
    over: '1',
    ball: '1',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '1',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '1',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '2',
    total_runs: '0',
    player_dismissed: '',
    dismissal_kind: '',
    fielder: '',
  },
];

const output5 = {};
test('The match id details are absent in matches data', () => {
  expect(
    extraRunsCalculatorUsingHOF(matchesInput5, deliveriesInput5)
  ).toStrictEqual(output5);
});
