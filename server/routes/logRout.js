const {LogInfo,getLogInfo}= require('../controllers/logInfo');

const express = require('express');
const router = express.Router();


router.post('/loginfo', LogInfo);
router.get('/loginfo', getLogInfo);

module.exports = router;    