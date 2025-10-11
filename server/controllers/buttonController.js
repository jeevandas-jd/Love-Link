
const buttonInfoSchema = require('../model/buttonInfo');
const cliLogSchema = require('../model/cliLogs');
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
    // Delete all docs where highlighted === false
    await buttonInfoSchema.deleteMany({ highlighted: false });

    // If you want to delete ALL docs instead:
    // await buttonInfoSchema.deleteMany({});

    res.status(200).json({ message: "All button information cleared successfully" });
  } catch (error) {
    console.error("Error clearing button info:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const highlightButton = async (req, res) => {
    const { id } = req.params;
    try {
        const button = await buttonInfoSchema.findById(id);
        if (!button) {
            return res.status(404).json({ message: "Button not found" });
        }
        button.hihlited = true;
        await button.save();
        res.status(200).json({ message: "Button highlighted successfully", button });
    } catch (error) {
        console.error("Error highlighting button:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const logCliInfo = async (req, res) => {
    const { IP, agent, command, input, otherData } = req.body;

    const cliLog = new cliLogSchema({
        IP,
        agent,
        command,
        input,
        otherData
    });

    try {
        await cliLog.save();
        res.status(201).json({ message: "CLI log saved successfully" });
    } catch (error) {
        console.error("Error saving CLI log:", error);
        res.status(500).json({ message: "Internal server error" });
    }
} 

const getCliLogs = async (req, res) => {
    try {
        const logs = await cliLogSchema.find();
        res.status(200).json(logs);
    } catch (error) {
        console.error("Error fetching CLI logs:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const searchCliLogByIP = async (req, res) => {
    const { ip } = req.body;
    try {
        const logs = await cliLogSchema.find({ IP: ip });
        res.status(200).json(logs);
    } catch (error) {
        console.error("Error searching CLI logs by IP:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = {
    ButtonController,
    getButtonInfo,
    clearLog,
    logCliInfo,
    getCliLogs,
    searchCliLogByIP
}