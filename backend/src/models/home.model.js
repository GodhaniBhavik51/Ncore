const mongoose = require("mongoose"); 

const heroBannerSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
    },

    highlightText: {
      type: String,
    },

    description: {
      type: String,
    },

    primaryButton: {
      text: String,
      link: String,
    },

    secondaryButton: {
      text: String,
      link: String,
    },

    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeroBanner", heroBannerSchema);