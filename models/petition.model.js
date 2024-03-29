const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petitionSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name of the petition is required"],
            maxLength: [50, "Name should have less than 50 characters"]
        },
        category: {
            type: String,
            required: [true, "Category is required"],
            enum: ['Crafts', 'Cooking', 'Gardening and Horticulture', 'Everyday Life Skills', 'Music', 'Sports', 'Technology', 'Languages and Culture','Others']
        },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        requester: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },

    { timestamps: true }
)

const Petition = mongoose.model('Petition', petitionSchema);
module.exports = Petition