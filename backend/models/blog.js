const mongoose = require("mongoose");

const Blog = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true},
    desc:{type:String,required:true}    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", Blog);
