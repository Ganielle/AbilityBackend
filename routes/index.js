const routes = app => {
    app.use("/auth", require("./Auth"))
    console.log ("Routes are all available")
}

module.exports = routes