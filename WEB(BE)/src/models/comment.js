// communityAPI의 게시글에 달린 댓글들을 위한 model

import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});

commentSchema.static('dateFormatting', (date, delimiter = '') => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}${month}${day}-${hours}${minutes}`;
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;