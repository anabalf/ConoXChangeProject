const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        receiver: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        skill: {
            type: mongoose.Types.ObjectId,
            ref: 'Skill',
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },

    { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;