const mongoose  = require('mongoose');



// movies Schima for the document
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: String,
    age: Number

},{
    versionKey:false
})

const UserModel = mongoose.model('user', userSchema)


module.exports = { UserModel}