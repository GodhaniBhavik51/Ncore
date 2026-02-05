const About = require('../models/about.model');

exports.getAbout = async (req, res) => {
  try {
    const theme = String(req.query.theme || "ncore");

    const about = await About.findOne({ theme }).lean();

    if (!about) {
      return res.status(404).json({
        message: "About content not found"
      });
    }

    res.json(about);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};