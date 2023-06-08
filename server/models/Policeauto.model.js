
const mongoose = require('mongoose');

const PoliceautoSchema = mongoose.Schema(
{
  NumPol: {
    type: String,
    required: true,
    unique: true,
  },
  
  ModelAuto: {
    type: String,
    required: true,
  },
  DateEffet: {
    type: String,
    required: false,
  },
  DateEcheance: {
    type: String,
    required: false,
  },
  
  AutoPart: {
    type: [String]
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  }

});

const Policeauto = mongoose.model('Policeauto', PoliceautoSchema);

module.exports = Policeauto;

