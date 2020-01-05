const mongoose = require("mongoose");

const tournamentSchema = mongoose.Schema({
    started: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const Team = mongoose.model("tournament", tournamentSchema);

module.exports = Team;
