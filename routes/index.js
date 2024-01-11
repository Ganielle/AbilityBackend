const routes = app => {
    app.use("/auth", require("./Auth"))
    app.use("/users", require("./Users"))
    app.use("/scores", require("./Scores"))
    console.log ("Routes are all available")
}

module.exports = routes