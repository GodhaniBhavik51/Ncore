const HeroBanner = require("../models/home.model"); 

exports.getHeroBanner = async (req, res) => {
  const banner = await HeroBanner.findOne({ isActive: true }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    data: banner
  });
};