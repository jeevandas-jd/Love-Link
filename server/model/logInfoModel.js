const mongoose = require('mongoose');

const logInfoSchema = new mongoose.Schema({
    logDate: {
        type: Date,
        default: Date.now
    },
    logTime:{
        type: String,
        default: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    ipAddress: {
        type: String,
        required: true
    },
    location: {
        type: {
            latitude: { type: Number },
            longitude: { type: Number },
            city: { type: String },
            country: { type: String }
        },
        default: null
    }
});

// Optionally, create and export the model
const LogInfo = mongoose.model('LogInfo', logInfoSchema);
module.exports = LogInfo;
