const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name of the skill is required"],
            maxLength: [50, "Name should have less than 50 characters"]
        },
        category: {
            type: String,
            required: [true, "Category is required"],
            enum: ['Crafts', 'Cooking', 'Gardening and Horticulture', 'Everyday Life Skills', 'Music', 'Sports', 'Technology', 'Languages and Culture','Others']
        },
        description: {
            type: String,
            required: [true, "Category is required"]
        },
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },

    { timestamps: true }
);

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;