// models/user.js

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:CpRKE7hHUSt6qjPH@cluster0.hwfacsv.mongodb.net/tourify");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
