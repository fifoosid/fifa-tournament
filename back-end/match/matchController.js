const Match = require("./matchModel");
const Team = require("../team/teamModel");

exports.addMatch = async (request, response) => {
    const match = new Match();
    match.homeTeam = request.body.homeTeam;
    match.awayTeam = request.body.awayTeam;
    match.homeTeamScore = parseInt(request.body.homeTeamScore);
    match.awayTeamScore = parseInt(request.body.awayTeamScore);

    // Save the match do the db
    match.save(err => {
        if (err) {
            response.json(err);
        }

        response.json({
            code: 200,
            data: match,
        })
    });

    // Update both teams statistics
    await Team.findById(request.body.homeTeam, (err, homeTeam) => {
        if (err) {
            response.json(err);
        }

        const homeTeamGoals = parseInt(request.body.homeTeamScore),
        awayTeamGoals = parseInt(request.body.awayTeamScore);
        
        homeTeam.playedGames++;
        homeTeam.scoredGoals += homeTeamGoals;
        homeTeam.receivedGoals += awayTeamGoals;
        homeTeam.goalDifference += homeTeamGoals - awayTeamGoals;
        if (homeTeamGoals > awayTeamGoals) {
            homeTeam.points += 3;
            homeTeam.wonGames++;
        } else if (homeTeamGoals < awayTeamGoals) {
            homeTeam.lostGames++;
        } else {
            homeTeam.points++;
            homeTeam.drawGames++;
        }

        homeTeam.save(err => {
            if (err) {
                response.json(err);
            }
        });
    });

    await Team.findById(request.body.awayTeam, (err, awayTeam) => {
        if (err) {
            response.json(err);
        }

        const homeTeamGoals = parseInt(request.body.homeTeamScore),
        awayTeamGoals = parseInt(request.body.awayTeamScore);

        awayTeam.playedGames++;
        awayTeam.scoredGoals += awayTeamGoals;
        awayTeam.receivedGoals += homeTeamGoals;
        awayTeam.goalDifference += -homeTeamGoals + awayTeamGoals;
        if (homeTeamGoals < awayTeamGoals) {
            awayTeam.points += 3;
            awayTeam.wonGames++;
        } else if (homeTeamGoals > awayTeamGoals) {
            awayTeam.lostGames++;
        } else {
            awayTeam.points++;
            awayTeam.drawGames++;
        }

        awayTeam.save(err => {
            if (err) {
                response.json(err);
            }
        });
    });
};

exports.getAllMatches = (request, response) => {
    Match.find((err, matches) => {
        if (err) {
            response.json({
                code: 400,
                status: "error",
                message: err,
            })
        }

        response.json({
            code: 200,
            status: "success",
            data: matches
        });
    });
};