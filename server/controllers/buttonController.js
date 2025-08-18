
const buttonInfoSchema = require('../model/buttonInfo');

const ButtonController = async (req, res) => {
    const { checkpointId, action, decision, userAgent, ip, url, extraData } = req.body;

    if (!checkpointId || !action) {
        return res.status(400).json({ message: "Checkpoint ID and action are required" });
    }

    const buttonInfo = new buttonInfoSchema({
        checkpointId,
        action,
        decision,
        userAgent,
        ip,
        url,
        extraData
    });

    try {
        await buttonInfo.save();
        res.status(201).json({ message: "Button information saved successfully" });
    } catch (error) {
        console.error("Error saving button info:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getButtonInfo = async (req, res) => {
    try {
        const buttons = await buttonInfoSchema.find();
        res.status(200).json(buttons);
    } catch (error) {
        console.error("Error fetching button info:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const clearLog = async (req, res) => {
    try {
        await buttonInfoSchema.deleteMany({});
        res.status(200).json({ message: "All button information cleared successfully" });
    } catch (error) {
        console.error("Error clearing button info:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = {
    ButtonController,
    getButtonInfo,
    clearLog
}