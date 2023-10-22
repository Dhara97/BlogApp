const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A Blog Post must have a title"],
    },
    description: {
      type: String,
      required: [true, "A Blog Post must have a description"],
    },
    content: {
        type: String,
        requied: [true, "Content Not available"],
    },
    tags: [String],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    readCount: {
        type: Number,
        default: 0,
    },
    state: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    coverPhoto: {
      type: String,
    },
    creationDate:{
        type:Date,
        default: Date.now,
    },
    likes: {
       type: Number,
       default: 0,
    },
  },
  { 
    timestamps: true 
  }
);

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;