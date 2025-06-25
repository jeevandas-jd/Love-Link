const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
    contentName: {
        type: String,
        required: false
    },
    validationRequired: {
        type: Boolean,
        default: false
    },
    
    questions: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true } // You can hash this for better security
    }
  ],
  allowedUsers: {
        type: [String],
        default: [],
        required: false
  },
    heading: {
        type: String,
        required: true
    },
    content: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Letter = mongoose.model('Letter', letterSchema);

module.exports = Letter;
