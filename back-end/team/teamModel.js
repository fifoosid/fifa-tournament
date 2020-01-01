const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    playerName: {
        type: String,
        required: true,
    },
    playedGames: {
        type: Number,
        default: 0,
        required: true,
    },
    wonGames: {
        type: Number,
        default: 0,
        required: true,
    },
    drawGames: {
        type: Number,
        default: 0,
        required: true,
    },
    lostGames: {
        type: Number,
        default: 0,
        required: true,
    },
    scoredGoals: {
        type: Number,
        default: 0,
        required: true,
    },
    receivedGoals: {
        type: Number,
        default: 0,
        required: true,
    },
    goalDifference: {
        type: Number,
        default: 0,
        required: true,
    },
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
