// models/layout.model.js
const mongoose = require("mongoose");

const layoutSchema = new mongoose.Schema(
  {
    theme: {
      type: String,
      enum: ["ncore", "renil"],
      required: true,
      unique: true,
    },

    header: {
      logo: String,
      title: String,

      menu: [
        {
          label: String,
          path: String,
          exact: Boolean,
        },
      ],

      dropdowns: {
        brandSwitch: [
          { label: String, slug: String }
        ],
        categories: [
          { label: String, slug: String }
        ],
      },
    },

    footer: {
      brand: {
        logo: String,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Layout", layoutSchema);
