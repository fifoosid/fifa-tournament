const Tournament = require("./tournamentModel");

exports.getTournamentStarted = (request, response) => {
    Tournament.findOne((err, tournamentStarted) => {
        if (err) {
            response.json({
                code: 400,
                status: "error",
                message: err,
            });
        }

        if (!tournamentStarted) {
            const tournament = new Tournament();
            tournament.started = false;

            tournament.save(err => {
                if (err) {
                    response.json(err);
                }

                response.json({
                    code: 200,
                    status: "success",
                    data: tournament,
                });
            });
        }

        response.json({
            code: 200,
            status: "success",
            data: tournamentStarted,
        })
    });
}

exports.setTournamentStarted = (request, response) => {
    Tournament.findOneAndDelete("*", (err) => {
        if (err) {
            response.json({
                code: 400,
                status: "error",
                message: err,
            });
        }
    });

    const tournament = new Tournament();
    tournament.started = request.body.started;

    tournament.save(err => {
        if (err) {
            response.json(err);
        }

        response.json({
            code: 200,
            status: "success",
            data: tournament,
        });
    });
};