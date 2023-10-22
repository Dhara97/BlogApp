const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    commenterName: {
        type: String,
        required: [true, "A commenter's name is required for a Comment."],
      },
      commentText: {
        type: String,
        required: [true, "A comment text is required for a Comment."],
      },
      creationDate: {
        type: Date,
        default: Date.now,
      },
      blogPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost',
      }
});


const Comments = mongoose.model("Comments", CommentsSchema);
module.exports = Comments;