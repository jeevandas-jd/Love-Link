const {ButtonController, getButtonInfo,clearLog,logCliInfo,getCliLogs,searchCliLogByIP} = require('../controllers/buttonController');

const express = require('express');
const router = express.Router();


// Route to handle button information submission
router.post('/submit', ButtonController);
// Route to fetch all button information
router.get('/all', getButtonInfo);
// Route to clear all button information
router.delete('/clear', clearLog);
// Route to highlight a specific button entry
router.post('/cli-log', logCliInfo);
router.get('/cli-log', getCliLogs);
router.post('/cli-log/id', searchCliLogByIP);

module.exports = router;