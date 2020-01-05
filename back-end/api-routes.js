const router = require("express").Router();

const teamController = require("./team/teamController");
const matchController = require("./match/matchController");
const tournamentController = require("./tournament/tournamendController");

router.get('/', (request, response) => {
    response.json({
        status: "API is working",
        message: "Welcome to fifa tournament",
    })
});

router.route("/team")
    .get(teamController.getAllTeams)
    .post(teamController.addNewTeam);

router.route("/team-name")
    .post(teamController.getTeamName);

router.route("/match")
    .get(matchController.getAllMatches)
    .post(matchController.addMatch);

router.route("/tournament-started")
    .get(tournamentController.getTournamentStarted)
    .post(tournamentController.setTournamentStarted);

module.exports = router;