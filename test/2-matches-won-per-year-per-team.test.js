const findNoOfMatchesWonPerTeamPerYearWithHOF = require('../src/server/2-matches-won-per-year-per-team');

test('count no.of matches won per team per team with empty', () => {
  expect(findNoOfMatchesWonPerTeamPerYearWithHOF([])).toStrictEqual(
    {}
  );
});

const matches = require('../src/data/matchesInJson.json');
const output1 = require('../src/public/output/2-matchesWonPerYearPerTeam.json');

test('count no.of matches won per team per year with full data', () => {
  expect(
    findNoOfMatchesWonPerTeamPerYearWithHOF(matches)
  ).toStrictEqual(output1);
});
