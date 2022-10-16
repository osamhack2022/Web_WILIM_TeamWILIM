import mongoose from "mongoose";
import Post from "../models/post";
import Comment from "../models/comment";

export const getPostById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id).populate("comments");
        return res.status(200).send(post);
    } catch(error) {
        return res.status(404).json({message: error});
    }
};

export const updatePost = async (req, res, next) => {
    // owner 권한 확인 필요
    const { id } = req.params;
    const { content, hashtags } = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(id, {
            content: content,
            hashtags: hashtags
        }, { new: true });
        return res.status(200).send(updatedPost);
    } catch(error) {
        return res.status(404).json({mesage: error});
    }
};

export const deletePost = async (req, res, next) => {
    // owner 권한 확인 필요
    const { id } = req.params;
    const { username } = req.user;

    try {
        const post = await Post.findById(id);
        
        for (var comment of post.comments) {
            await Comment.findByIdAndDelete(comment);
        } // 먼저, delete하고자 하는 post에 달려 있는 comment들부터 지운다.
        await Post.findByIdAndDelete(id);  // 그 다음, post를 delete한다.
        return res.status(200).redirect(`/communityAPI/${username}/posts`);
    } catch(error) {
        return res.status(404).json({mesage: error});
    }
};

export const getPostsOfUser = async (req, res, next) => {
    const { username } = req.params;
};

export const addNewPost = (req, res, next) => {
    // owner 권한 확인 필요
};

export const searchPosts = (req, res, next) => {
    
};

export const getComment = (req, res, next) => {

};

export const updateComment = (req, res, next) => {
    // owner 권한 확인 필요
};

export const deleteComment = (req, res, next) => {
    // owner 권한 확인 필요
};

export const addNewComment = (req, res, next) => {
    // owner 권한 확인 필요
};