// communityAPI의 게시글을 위한 mongoose model

import mongoose from "mongoose";

const dateFormatting = (date, delimiter = '') => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

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
        default: dateFormatting(new Date())
    },
    hashtags: [{type: String}],
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

const Post = mongoose.model("Post", postSchema);
export default Post;