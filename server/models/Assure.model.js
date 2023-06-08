const mongoose = require("mongoose");

const AssureSchema = mongoose.Schema(
    {
        Nom: {
            type: String,
            required: true          
        },

        Prenom: {
            type: String,
            required: true
        },
        Age: {
            type: String,
            required: true
        },
        NumPermis: {
            type: String,
            required: true
        },
        NumIdn: {
            type: String,
            required: true
        },

        Tel: {
            type: [String]
        }
    },

    {
        timestamps: true
    }
);

const Assure = mongoose.model('Assure', AssureSchema);

module.exports = Assure;