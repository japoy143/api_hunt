const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const APIList = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    key: {
      type: Boolean,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    comments: {
      type: [],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("APIList", APIList);
