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

export const updatePost = (req, res, next) => {
    // owner 권한 확인 필요
};

export const deletePost = (req, res, next) => {
    // owner 권한 확인 필요
};

export const getPostsOfUser = (req, res, next) => {
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