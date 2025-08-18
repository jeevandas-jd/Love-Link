const mongoose = require('mongoose');


const buttonInfoSchema = new mongoose.Schema({
  checkpointId: { type: String, required: true }, // e.g., 'checkpoint1'
  action: { type: String, required: true },       // e.g., 'proceed', 'leave'
  decision: { type: String },                     // e.g., 'continue_reading', 'stop_reading'
  timestamp: { type: Date, default: Date.now },
  userAgent: { type: String },
  ip: { type: String },
  url: { type: String },
  extraData: { type: Object }  

})

const ButtonInfo= mongoose.model('ButtonInfo', buttonInfoSchema);
module.exports = ButtonInfo;