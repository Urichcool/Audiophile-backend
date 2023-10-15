const service = require("../service/speakers");

const getAllSpeakers = async (req, res) => {
    const speakers = await service.findAllSpeakers();
    if (speakers.length !== 0) {
        return res.status(200).json(speakers);
    }
    res.status(404).json({message: "Not found"})
}

module.exports = {getAllSpeakers}