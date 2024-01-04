const Users = require("../modules/Users")

exports.login = (req, res) => {
    const { username, password } = req.query
    
    Users.findOne({username: username, password: password})
    .then(data => {
        if (!data){
            return res.status(400).json({ message: "bad-request", data: "User not found! Please input your true credentials" })
        }

        res.json({message: "success"})
    })
    .catch(error => res.status(400).json({ message: "bad-request", data: error.message }))
}