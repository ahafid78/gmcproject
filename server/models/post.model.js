const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true          
        },

        author: {
            type: String,
            required: true
        },

        Likers: {
            type: [String]
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model('post', postSchema)