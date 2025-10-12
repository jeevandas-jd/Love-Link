
const mongoose = require('mongoose');

const cliLogSchema = new mongoose.Schema({
    IP: { type: String },
    agent: { type: String },
    timestamp: { type: Date, default: Date.now },
    command: { type: String },
    input: { type: String },
    otherData: { type: Object }
});

const CliLog = mongoose.model('CliLog', cliLogSchema);

module.exports = CliLog;