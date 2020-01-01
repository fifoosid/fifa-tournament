const mongoose = require("mongoose");

const matchSchema = mongoose.Schema({
    homeTeam: {
        type: String,
        required: true
    },
    awayTeam: {
        type: String,
        required: true
    },
    homeTeamScore: {
        type: Number,
        required: true
    },
    awayTeamScore: {
        type: String,
        required: true
    },
});

const Match = mongoose.model("match", matchSchema);

module.exports = Match;
