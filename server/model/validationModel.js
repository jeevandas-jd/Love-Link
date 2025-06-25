const mongoose = require('mongoose');

const validationSchema = new mongoose.Schema({
  letter: { type: mongoose.Schema.Types.ObjectId, ref: 'letter', unique: true },
  questions: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true } // You can hash this for better security
    }
  ]
});

module.exports = mongoose.model('Validation', validationSchema);
