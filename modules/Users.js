const mongoose = require("mongoose")

const userModels = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 5
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 5
        },
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model("Users", userModels);

module.exports = Users;