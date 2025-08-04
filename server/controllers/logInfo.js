const logInfoSchema = require('../model/logInfoModel');


const LogInfo=(req, res) => {
    const { ipAddress, location } = req.body;

    if (!ipAddress) {
        ipAddress="not provided";
    }

    const logInfo = new logInfoSchema({
        ipAddress,
        location: location || null
    });

    logInfo.save()
        .then(() => {
            res.status(201).json({ message: "Log information saved successfully" });
        })
        .catch(error => {
            console.error("Error saving log info:", error);
            res.status(500).json({ message: "Internal server error" });
        });
}

const getLogInfo = (req, res) => {
    logInfoSchema.find()
        .then(logs => {
            res.status(200).json(logs);
        })
        .catch(error => {
            console.error("Error fetching log info:", error);
            res.status(500).json({ message: "Internal server error" });
        });
}

module.exports = {
    LogInfo,
    getLogInfo
}