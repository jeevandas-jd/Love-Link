const express = require("express");

const router = express.Router();


const {sentEmail,getEmail} = require("../controllers/emailController");



router.post("/send-email", sentEmail);
router.get("/get-email/:user", getEmail);

module.exports = router;  