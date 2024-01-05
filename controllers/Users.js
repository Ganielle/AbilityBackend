const Users = require("../modules/Users")

exports.register = async (req, res) => {
    const { username, fullname, email, password } = req.body

    if (username == ""){
        return res.json({ message: "failed", data: "Please input username" })
    }

    if (fullname == ""){
        return res.json({ message: "failed", data: "Please input fullname" })
    }

    if (email == ""){
        return res.json({ message: "failed", data: "Please input guardian/parent's email" })
    }

    if (password == ""){
        return res.json({ message: "failed", data: "Please input password" })
    }
    
    Users.findOne({$or: [{ username: username, }, {fullname: fullname}, {email: email}]})
    .then(data => {
        if (data){
            return res.status(400).json({ message: "bad-request", data: "Existing user! Please login your account!" })
        }
        
        Users.create(req.body)
        .then(() => {
            return res.json({message: "success"})
        })
        .catch(error => res.status(400).json({ message: "bad-request", data: error.message }))
    })
    .catch(error => res.status(400).json({ message: "bad-request", data: error.message }))
}