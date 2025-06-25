const Letter = require("../model/letterModel")

const removeLetter = async (req, res) => {

    const letterId = req.params.id;

    try {
        const letter = await Letter.findByIdAndDelete(letterId);

        if (!letter) {
            return res.status(404).json({ message: "Letter not found" });
        }

        return res.status(200).json({ message: "Letter removed successfully" });
    } catch (error) {
        console.error("Error removing letter:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const removeAllLetters = async (req, res) => {
    try {
        const result = await Letter.deleteMany({});

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No letters found to remove" });
        }

        return res.status(200).json({ message: `${result.deletedCount} letters removed successfully` });
    } catch (error) {
        console.error("Error removing letters:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    removeLetter,
    removeAllLetters
};