const Header = require("../models/header.model");

exports.getHeader = async (req, res) => {
  try {
    const theme = String(req.query.theme || "ncore");

    const header = await Header.findOne({ theme }).lean();

    if (!header) {
      return res.status(404).json({ message: "Header not found" });
    }

    res.json(header);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};