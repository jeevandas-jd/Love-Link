const express = require("express");
const router = express.Router();

const {uploadLetter} = require("../controllers/uploadController");

const {getLetter,listAll} = require("../controllers/getController");

const {removeLetter, removeAllLetters} = require("../controllers/removeController");



router.post("/upload",uploadLetter);
router.get("/get-letter/:id", getLetter);
router.post("/get-letter/:id", getLetter); // For validation with answers
router.get("/get-letter", listAll);
router.delete("/remove-letter/:id", removeLetter);
router.delete("/remove-all-letters", removeAllLetters);

module.exports = router;