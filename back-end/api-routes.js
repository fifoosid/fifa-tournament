const router = require("express").Router();

const teamController = require("./team/teamController");
const matchController = require("./match/matchController");

router.get('/', (request, response) => {
    response.json({
        status: "API is working",
        message: "Welcome to fifa tournament",
    })
});

router.route("/team")
    .get(teamController.getAllTeams)
    .post(teamController.addNewTeam);

router.route("/match")
    .post(matchController.addMatch);

module.exports = router;