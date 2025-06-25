const Letter = require('../models/letterModel');
const Validation = require('../models/validationModel');

const validateLetterAccess = async (req, res) => {
    const { letterId, answers } = req.body;

    if(!ans)

    try {
        const letter = await Letter.findById(letterId).populate('validation');

        if (!letter) {
            return res.status(404).json({ message: "Letter not found" });
        }

        if (!letter.validationRequired || !letter.validation) {
            return res.status(200).json({ content: letter.content });
        }

        const isValid = letter.validation.questions.every((q, i) => {
            return q.answer.toLowerCase() === answers[i]?.toLowerCase();
        });

        if (!isValid) {
            return res.status(403).json({ message: "Validation failed" });
        }

        return res.status(200).json({ content: letter.content });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {
    validateLetterAccess
};
