const mongoose = require('mongoose');

const productItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    features: {
      type: [String],
      default: []
    },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    theme: {
      type: String,
      enum: ["ncore", "renil"],
      required: true
    },

    title: String,
    subtitle: String,

    products: [productItemSchema]
  },
  { timestamps: true }
);
module.exports = mongoose.model('Product', productSchema);
