const HeroBanner = require("../models/home.model"); 

exports.getHeroBanner = async (req, res) => {
  try {
    const brand = String(req.query.theme || "ncore");

    const banner = await HeroBanner.findOne({
      brand,
    });

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Hero banner not found",
      });
    }

    res.json({
      success: true,
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};