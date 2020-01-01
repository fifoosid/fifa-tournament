const Match = require("./matchModel");
const Team = require("../team/teamModel");

exports.addMatch = (request, response) => {
    const match = new Match();
    match.homeTeam = request.body.homeTeam;
    match.awayTeam = request.body.awayTeam;
    match.homeTeamScore = request.body.homeTeamScore;
    match.awayTeamScore = request.body.awayTeamScore;

    // Save the match do the db
    match.save(err => {
        if (err) {
            response.json(err);
        }

        response.json({
            code: 200,
            data: match,
            homeTeam,
            awayTeam
        })
    });

    // Update both teams statistics
    const homeTeam = getTeam(request.body.homeTeam),
        awayTeam = getTeam(request.body.awayTeam);
};

function getTeam(id) {
    return Team.findById(id, (err, team) => {
        if (err) {
            response.json(err);
        }

       return JSON.stringify(team);
    });
}