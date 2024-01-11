const { default: mongoose } = require("mongoose")
const Scores = require("../modules/Scores")

exports.getscores = (req, res) => {
    const { id } = req.query

    Scores.find({owner: new mongoose.Types.ObjectId(id)})
    .then(data => {
        if (data.length <= 0){
            return res.json({message: "noitem"})
        }

        const finaldata = {}

        data.forEach(dataas => {
            const { topic, subtopic, level, score } = dataas

            finaldata[`${topic}${subtopic}`] = {
                level: level,
                score: score,
                topic: topic,
                subtopic: subtopic
            }
        })

        return res.json({message: "success", data: finaldata})
    })
    .catch(error => res.status(400).json({ message: "bad-request", data: error.message }))
}

exports.setscore = (req, res) => {
    const { id, topic, subtopic, level, score } = req.body

    Scores.findOne({owner: new mongoose.Types.ObjectId(id), topic: topic, subtopic: subtopic, level: level})
    .then(data => {
        if (!data){
            Scores.create({owner: new mongoose.Types.ObjectId(id), topic: topic, subtopic: subtopic, level: level, score: score})
            .then(() => {
                res.json({message: "success"})
            })
            .catch(error => res.status(400).json({ message: "bad-request", data: error.message }))
        }
        else{
            Scores.findOneAndUpdate({owner: new mongoose.Types.ObjectId(id), topic: topic, subtopic: subtopic, level: level}, {score: score})
            .then(() => {
                res.json({message: "success"})
            })
            .catch(error => res.status(400).json({ message: "bad-request", data: error.message }))
        }
    })
    .catch(error => res.status(400).json({ message: "bad-request", data: error.message }))
}