// communityAPI의 게시글에 달린 댓글들을 위한 model

import mongoose from "mongoose";

const dateFormatting = (date, delimiter = '') => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

const commentSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: dateFormatting(new Date())
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;