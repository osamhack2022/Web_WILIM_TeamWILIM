// communityAPI의 게시글을 위한 mongoose model

import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String,
    },
    title : {
        type: String,
        required : true
    },
    content: {
        type: String,
        required: true
    },
    image : [String],
    date: {
        type: String,
        default: Date.now
    },
    hashtags: [{type: String}],
    likes: {
        type: Number,
        default: 0
    },
    likedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

postSchema.static('dateFormatting', function(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}${month}${day}-${hours}${minutes}`;
});

const Post = mongoose.model("Post", postSchema);
export default Post;