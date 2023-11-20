// 8. Find the highest number of times one player has been dismissed by another player
let deliveries = require('../data/deliveriesInJson.json');
function highestNumberOfDismissalsbyAnotherPlayerUsingHOF(
  deliveries
) {
  // Array to store information about the highest dismissals

  let highestDismissals = [];

  // Filtering the deliveries data to exclude run outs and retired hurt dismissals
  let filteredData = deliveries.filter(
    (delivery) =>
      delivery.dismissal_kind !== 'run out' &&
      delivery.dismissal_kind !== 'retired hurt' &&
      delivery.player_dismissed !== ''
  );

  // Using reduce to process the filtered data and find the highest dismissals
  let result = filteredData.reduce((acc, delivery) => {
    let bowler = delivery.bowler;
    let playerDismissed = delivery.player_dismissed;

    // Initializing the object if it doesn't exist
    if (acc[bowler] === undefined) {
      acc[bowler] = { [playerDismissed]: 0 };
    }
    if (acc[bowler][playerDismissed] === undefined) {
      acc[bowler][playerDismissed] = 0;
    }

    // Incrementing the count for each dismissal
    acc[bowler][playerDismissed]++;

    let count = acc[bowler][playerDismissed];

    // Updating the dismissals array if the current count is higher
    // checking if array is empty, if so adding the current count value with all other data.
    // other condition, if it already has data, then check if current count is greater than the data that present,
    // if so, over ride it with current count.
    // if equal, go to else if and push the data to the array.
    // this is the important part of this code.

    if (
      highestDismissals.length === 0 ||
      count > highestDismissals[0].times
    ) {
      highestDismissals = [
        { bowler, dismissed: playerDismissed, times: count },
      ];
    } else if (count === highestDismissals[0].times) {
      highestDismissals.push({
        bowler,
        dismissed: playerDismissed,
        times: count,
      });
    }

    return acc;
  }, {});

  // Returning the array of highest dismissals
  return highestDismissals;
}

// console.log(
//   highestNumberOfDismissalsbyAnotherPlayerUsingHOF(deliveries)
// );

module.exports = highestNumberOfDismissalsbyAnotherPlayerUsingHOF;
