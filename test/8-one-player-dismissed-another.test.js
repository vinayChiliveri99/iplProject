const deliveries = require('../src/data/deliveriesInJson.json');
const highestNumberOfDismissalsbyAnotherPlayerUsingHOF = require('../src/server/8-one-player-dismissed-another');

// with empty data

test('highest number of dismissals by another player with empty data', () => {
  expect(
    highestNumberOfDismissalsbyAnotherPlayerUsingHOF([])
  ).toStrictEqual({ dismissed: '', player: '', times: 0 });
});

// with full data

let output1 = require('../src/public/output/8-highestOnePlayerDismissedAnother.json');

test('highest number of dismissals by another player with full data', () => {
  expect(
    highestNumberOfDismissalsbyAnotherPlayerUsingHOF(deliveries)
  ).toStrictEqual({
    dismissed: 'MS Dhoni',
    player: 'Z Khan',
    times: 7,
  });
});
