const deliveries = require('../src/data/deliveriesInJson.json');
const findBestEconomicalBowlerInSuperOversUsingHOF = require('../src/server/9-bowler-best-eco-super-overs');

// 1. with empty data.
test('best economical bowler with empty data', () => {
  expect(
    findBestEconomicalBowlerInSuperOversUsingHOF([])
  ).toStrictEqual({});
});

// 2. with full data.
const output1 = require('../src/public/output/9-bestEcoBowlerInSuperOvers.json');
test('best econmical bowler with full data', () => {
  expect(
    findBestEconomicalBowlerInSuperOversUsingHOF(deliveries)
  ).toStrictEqual(output1);
});

// 3. when there's no data for super overs.
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

let output3 = {};

// when there is no super over bowled

test('when the data does not contain super over ', () => {
  expect(
    findBestEconomicalBowlerInSuperOversUsingHOF(
      matchesInput3,
      deliveriesInput3
    )
  ).toStrictEqual(output3);
});
