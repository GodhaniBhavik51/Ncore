const Layout = require("../models/layout.model");

exports.getLayout = async (req, res) => {
  try {
    const theme = String(req.query.theme || "ncore");

    const layout = await Layout.findOne({ theme }).lean();

    if (!layout) {
      return res.status(404).json({ message: "Layout not found" });
    }

    res.json(layout);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
