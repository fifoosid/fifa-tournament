const Team = require("./teamModel");

exports.addNewTeam = (request, response) => {
    const team = new Team();
    team.teamName = request.body.teamName || request.body.playerName;
    team.playerName = request.body.playerName || request.body.teamName;
    team.playedGames = 0;
    team.playedGames = 0;
    team.wonGames = 0;
    team.drawGames = 0;
    team.lostGames = 0;
    team.scoredGoals = 0;
    team.receivedGoals = 0;
    team.goalDifference = 0;

    team.save(err => {
        if (err) {
            response.json(err);
        }

        response.json({
            code: 200,
            status: "success",
            data: team,
        });
    })
};

exports.getAllTeams = (request, response) => {
    Team.find((err, teams) => {
        if (err) {
            response.json({
                code: 400,
                status: "error",
                message: err,
            });
        }

        response.json({
            code: 200,
            status: "success",
            data: teams,
        });
    });
};

exports.getTeamName = async (request, response) => {
    let result = await Team.findOne({_id: request.body.id});

    response.json({
        code: 200,
        status: "success",
        data: result.teamName,
    })
}