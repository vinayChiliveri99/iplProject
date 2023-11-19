const matches = require('../src/data/matchesInJson.json');
const deliveries = require('../src/data/deliveriesInJson.json');

const findTop10EcoBowlersIn2015UsingHOF = require('../src/server/4-top-10-eco-bowlers-2015');

// 1. with empty data.

test('count top 10 economical bowlers in the year 2015 with empty data', () => {
  expect(findTop10EcoBowlersIn2015UsingHOF([], [])).toStrictEqual([]);
});

// 2. with full data
const output2 = require('../src/public/output/4-top10EconomicalBowlersIn2015.json');

test('count top 10 economical bowlers in the year 2015 with empty data', () => {
  expect(
    findTop10EcoBowlersIn2015UsingHOF(matches, deliveries)
  ).toStrictEqual(output2);
});

// 3. where the data doesn't have ten bowlers.
let matchesInput3 = [
  {
    id: '1',
    season: '2015',
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
    wide_runs: '0',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '0',
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
    ball: '2',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '0',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '0',
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
    ball: '3',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '0',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '4',
    extra_runs: '0',
    total_runs: '4',
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
    ball: '4',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '0',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '0',
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
    ball: '5',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '2',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '2',
    total_runs: '2',
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
    ball: '6',
    batsman: 'S Dhawan',
    non_striker: 'DA Warner',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '0',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '0',
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
    ball: '7',
    batsman: 'S Dhawan',
    non_striker: 'DA Warner',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '0',
    bye_runs: '0',
    legbye_runs: '1',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '1',
    total_runs: '1',
    player_dismissed: '',
    dismissal_kind: '',
    fielder: '',
  },
];

let output3 = [{ bowler: ['TS Mills'], economy: '6.00' }];

// when there's only one bowler, who bowled, then our code, returns about only him, whithout throwing any error

test('count top 10 economical bowlers in the year 2015 with insufficient data', () => {
  expect(
    findTop10EcoBowlersIn2015UsingHOF(matchesInput3, deliveriesInput3)
  ).toStrictEqual(output3);
});
