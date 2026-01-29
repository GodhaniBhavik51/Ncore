const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema(
  {
    theme: { type: String, enum: ["ncore", "renil"], required: true, unique: true },

    brand: {
      logo: { type: String, required: true },
      title: String,
      subtitle: String,
    },

    navigation: [
      { label: String, path: String }
    ],

    social: [
      { icon: String, url: String } 
    ],

    contact: [
      { icon: String, value: String }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Footer", footerSchema);