const Letter = require('../model/letterModel');

const uploadLetter = async (req, res) => {
    const { contentName,heading, content, validationRequired, questions } = req.body;

    try {
        const newLetter = new Letter({
            contentName,
            heading,
            content,
            validationRequired,
            questions // Only add if required
        });

        const savedLetter = await newLetter.save();
        console.log(`Letter saved: ${heading}`);
        if (validationRequired) {
            console.log(`Questions for the letter '${heading}':`, questions);
        }

        res.status(201).json({ message: "Letter uploaded successfully", letter: savedLetter });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {
    uploadLetter
};
