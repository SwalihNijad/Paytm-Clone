const mongoose = require("mongoose")
mongoose.connect();

const userSchema = mongoose.Schema({
    Username :  {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    Password : {
        lowercase: true,
        minLength: 3,
        maxLength: 3
    },
    firstName : {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    secondName : {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }

})

const User = mongoose.model("User",userSchema);

module.exports = {
    User
}