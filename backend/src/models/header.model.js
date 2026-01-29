const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema(
  {
    theme: { type: String, enum: ["ncore", "renil"], required: true, unique: true },
    logo: String,
    title: String,
    menu: [
      {
        label: String,
        path: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Header", headerSchema);