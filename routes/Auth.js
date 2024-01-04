const router = require("express").Router()
const { login } = require("../controllers/Auth")

router
    .get("/login", login)

module.exports = router