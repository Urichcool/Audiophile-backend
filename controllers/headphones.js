const service = require("../service/headphones");

const getAllHeadphones = async (req, res) => {
    const headphones = await service.findAllHeadphones();
  if (headphones.length !== 0) {
    return res.status(200).json(headphones);
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = {getAllHeadphones}