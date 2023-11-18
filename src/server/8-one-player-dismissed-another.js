// Find the highest number of times one player has been dismissed by another player
//
//
//

function highestNumberOfDismissalsbyAnotherPlayerUsingHOF(
  deliveries
) {
  let player = '';
  let times = 0;
  let dismissed = '';

  let filteredData = deliveries.filter(
    (delivery) =>
      delivery.dismissal_kind != 'run out' &&
      delivery.dismissal_kind != 'retired hurt' &&
      delivery.player_dismissed != ''
  );

  let result = filteredData.reduce((acc, delivery) => {
    let bowler = delivery.bowler;
    let playerDismissed = delivery.player_dismissed;

    if (acc[bowler] === undefined) {
      acc[bowler] = { [playerDismissed]: 0 };
    }
    if (acc[bowler][playerDismissed] === undefined) {
      acc[bowler][playerDismissed] = 0;
    }
    acc[bowler][playerDismissed]++;

    if (acc[bowler][playerDismissed] > times) {
      player = bowler;
      times = acc[bowler][playerDismissed];
      dismissed = playerDismissed;
    }

    return acc;
  }, {});

  return { player, times, dismissed };
}
module.exports = highestNumberOfDismissalsbyAnotherPlayerUsingHOF;
