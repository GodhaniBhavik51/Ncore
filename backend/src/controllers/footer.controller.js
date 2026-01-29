const Footer = require("../models/footer.model");


exports.getFooter = async (req, res) => {
  try {
    const theme = String(req.query.theme || "ncore");
    const footer = await Footer.findOne({ theme }).lean();
    if (!footer) return res.status(404).json({ message: "Footer not found" });
    res.json(footer);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
