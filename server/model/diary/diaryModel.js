

const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    contentName: {
        type: String,
        required: false
    },
    Date: {
        type: Date,
        default: Date.now
    },
    questions: [
        {
            question: { type: String, required: true },
            answer: { type: String, required: true } // You can hash this for better security
        }
    ]})
    