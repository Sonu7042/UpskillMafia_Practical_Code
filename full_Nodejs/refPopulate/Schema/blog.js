const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: String,
  auther: String,
});

const blogModel = new mongoose.model("blog", blogSchema);

module.exports = blogModel;
