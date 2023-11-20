const deliveries = require('../src/data/deliveriesInJson.json');
const highestNumberOfDismissalsbyAnotherPlayerUsingHOF = require('../src/server/8-one-player-dismissed-another');

// 1. with empty data

test('highest number of dismissals by another player with empty data', () => {
  expect(
    highestNumberOfDismissalsbyAnotherPlayerUsingHOF([])
  ).toStrictEqual([]);
});

// 2. with full data

let output1 = require('../src/public/output/8-highestOnePlayerDismissedAnother.json');

test('highest number of dismissals by another player with full data', () => {
  expect(
    highestNumberOfDismissalsbyAnotherPlayerUsingHOF(deliveries)
  ).toStrictEqual([
    {
      bowler: 'Z Khan',
      dismissed: 'MS Dhoni',
      times: 7,
    },
  ]);
});

// 3. when there is no dismissal data

let input3 = [
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
];

test('if there is no dismissal for bowlers in the data it returns empty data', () => {
  expect(
    highestNumberOfDismissalsbyAnotherPlayerUsingHOF(input3)
  ).toEqual([]);
});

// 4. when 2 players have same number of dismissals.

let input4 = [
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
    player_dismissed: 'DA Warner',
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
    player_dismissed: 'S Dhawan',
    dismissal_kind: '',
    fielder: '',
  },
];

let output4 = [
  { bowler: 'TS Mills', dismissed: 'DA Warner', times: 1 },
  { bowler: 'TS Mills', dismissed: 'S Dhawan', times: 1 },
];

test('When two players have same number of dismissals to a batsman', () => {
  expect(
    highestNumberOfDismissalsbyAnotherPlayerUsingHOF(input4)
  ).toEqual(output4);
});
