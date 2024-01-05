const router = require("express").Router()
const { register } = require("../controllers/Users")

router
    .post("/register", register)

module.exports = router