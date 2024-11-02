const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // token: {
    //     type: String
    // }
})

const UserModel = mongoose.model('User',userschema)
module.exports = UserModel;

