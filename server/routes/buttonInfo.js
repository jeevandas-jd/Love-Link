const {ButtonController, getButtonInfo,clearLog} = require('../controllers/buttonController');

const express = require('express');
const router = express.Router();


// Route to handle button information submission
router.post('/submit', ButtonController);
// Route to fetch all button information
router.get('/all', getButtonInfo);
// Route to clear all button information
router.delete('/clear', clearLog);

module.exports = router;