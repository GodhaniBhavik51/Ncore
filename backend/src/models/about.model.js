const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema(
  {
    icon: String,   
    label: String
  },
  { _id: false }
);

const leaderSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    photo: String,  
    bio: String
  },
  { _id: false }
);

const aboutSchema = new mongoose.Schema(
  {
    theme: {
      type: String,
      enum: ["ncore", "renil"],
      required: true,
      unique: true
    },

    intro: {
      title: String,
      tagline: String
    },

    story: {
      heading: String,
      description: String,
      points: [pointSchema],
      image: String
    },

    leadership: {
      heading: String,
      subTitle: String,
      members: [leaderSchema]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
