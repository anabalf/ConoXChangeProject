const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password needs at least 6 characters"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        maxLength: [10, "Username needs should have less than 10 characters"],
        minLength: [3, "Username needs at least 3 characters"],
    },
},
{ timestamps: true }
);

userSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        bcrypt
        .hash(this.password, 10)
        .then((hash) => {
            this.password = hash;
            next();
        })
        .catch(next);
    } else {
        next();
    }
});

userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;