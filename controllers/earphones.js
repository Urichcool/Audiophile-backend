const service = require('../service/earphones')

const getAllEarphones = async (req, res) => {
    const earphones = await service.findAllEarphones();
    if (earphones.length !== 0) {
        return res.status(200).json(earphones);
    }
     res.status(404).json({ message: "Not found" });
}

module.exports = {
    getAllEarphones
}