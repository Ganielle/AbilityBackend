const router = require("express").Router()
const { getscores, setscore } = require("../controllers/Scores")

router
    .get("/getscores", getscores)
    .post("/setscore", setscore)

module.exports = router