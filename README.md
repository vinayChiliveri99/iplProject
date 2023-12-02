# IPL PROJECT

This project is designed to analyze Indian Premier League (IPL) data using JavaScript. By running the index.js file, you can automatically convert CSV data into JSON and execute various queries to obtain insightful information about IPL matches.

## Setup

1. Clone the repo
   ```bash
    git clone https://github.com/your-username/ipl-project.git
    cd ipl-project
   ```

2. Install dependencies:
   ```bash
   npm install

## Usage
Run the following command to execute the queries and generate output files:

```bash
  node index.js
```

The output will be stored in the **src/public/output** directory, with each query having its corresponding JSON file.

## Queries and Output

1. Number of matches played per year for all the years in IPL:
      * Output: 1-matchesPerYear.json

2. Number of matches won per team per year in IPL:
      * Output: 2-matchesWonPerYearPerTeam.json

3. Extra runs conceded per team in the year 2016:
      * Output: 3-extraRunsPerTeam2016.json

4. Top 10 economical bowlers in the year 2015:
      * Output: 4-top10EconomicalBowlersIn2015.json

5. Number of times each team won the toss and also won the match:
      * Output: 5-teamWonTossAndMatch.json

6. Player who won the highest number of Player of the Match awards for each season:
      * Output: 6-highestPlayerMatchForEverySeason.json

7. Strike rate of a batsman for each season:
      * Output: 7-strikeRateOfaBatsmanForEachSeason.json

8. Highest number of times one player has been dismissed by another player:
      * Output: 8-highestOnePlayerDismissedAnother.json

9. Bowler with the best economy in super overs:
      * Output: 9-bestEcoBowlerInSuperOvers.json
