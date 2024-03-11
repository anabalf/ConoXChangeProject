const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        target: {
            type: mongoose.Types.ObjectId,
            ref: 'User', //confirmar en clase!!
            required: true
        },
        value: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        comment: {
            type: String
        }
    },
    
    { timestamps: true }
);

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;