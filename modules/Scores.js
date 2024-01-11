const mongoose = require("mongoose")

const scoresModels = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        score: {
            type: Number
        },
        topic: {
            type: String
        },
        subtopic: {
            type: String
        },
        level: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

const Scores = mongoose.model("Scores", scoresModels);

module.exports = Scores;