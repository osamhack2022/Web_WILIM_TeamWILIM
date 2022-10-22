import mongoose from "mongoose";
import User from "../models/user";
import Post from "../models/post";
import Comment from "../models/comment";

export const renderPostRootPage = (req, res, next) => {
    const user = req.user;
    return res.render("communityAPI/postRoot", { user });
}

export const renderPostEditPage = async (req, res, next) => {
    const user = req.user;
    const { id } = req.params;
    const post = await Post.findById(id);

    return res.render("communityAPI/postEdit", { user, post });
}

module.exports.getAllPosts = async(req,res,next)=>{//테스트용
    const posts = await Post.find({}).populate("owner").populate("comments");
    res.status(200).json(posts);
}

module.exports.getAllComments = async(req,res,next)=>{//테스트용
    const comments = await Comment.find({});
    res.status(200).json(comments);
}

export const getPostById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id).populate("comments").populate("owner");
        // return res.status(200).send(post);
        return res.render("communityAPI/post", { post });
    } catch(error) {
        return res.status(404).json({message: error});
    }
};

export const updatePost = async (req, res, next) => {
    // owner 권한 확인 필요

    const { id } = req.params;
    const { title, content, hashtags } = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(id, {
            title: title,
            content: content,
            hashtags: hashtags
        }, { new: true });
        return res.status(200).send(updatedPost);
    } catch(error) {
        return res.status(404).json({message: error});
    }
};

export const deletePost = async (req, res, next) => {
    // owner 권한 확인 필요

    const { id } = req.params;
    const { _id, username } = req.user;

    try {
        const post = await Post.findById(id);
        await Comment.deleteMany({post:id})// 먼저, delete하고자 하는 post에 달려 있는 comment들부터 지운다.
        await User.findByIdAndUpdate(_id, { $pull: { posts: id }}, { new: true });
        await Post.findByIdAndDelete(id);  // 그 다음, post를 delete한다.
        return res.status(200).json(post);
    } catch(error) {
        return res.status(404).json({message: error});
    }
};

export const getPostsOfUser = async (req, res, next) => {
    // 얘는 굳이 로그인한 유저의 Posts만 불러올 필요는 없을 듯 ..?
    // 따라서, session의 정보가 아닌, parameter의 username으로 posts를 불러오자.
    const { username } = req.params;

    try {
        const user = await User.findOne({ username: username }).populate("posts");
        const posts = user.posts;
        
        return res.status(200).send(posts);
    } catch(error) {
        return res.status(404).json({message: error});
    }
};

export const addNewPost = async (req, res, next) => {
    // owner 권한 확인 필요

    const { title, content, hashtags } = req.body;
    const { _id, username } = req.user;

    try {
        const newPost = new Post({
            owner: _id,
            username: username,
            title,
            content,
            hashtags
        });
        await newPost.save();
        await User.findByIdAndUpdate(_id, { $push: { posts: newPost._id }});
        return res.status(201).send(newPost);
    } catch(error) {
        return res.status(404).json({message: error});
    }
};

export const searchPosts = async (req, res, next) => {
    const { keyword } = req.query;

    try {
        let posts = [];
        if(keyword) {
            posts = await Post.find({
                title: {
                    $regex: new RegExp(keyword, "i")
                }
            }).populate("comments").populate("owner");

            return res.status(200).send(posts);
        }
    } catch(error) {
        return res.status(404).json({ message: error });
    }
};

export const getComment = async (req, res, next) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findById(id);
        return res.status(200).send(comment);
    } catch(error) {
        return res.status(404).json({message: error});
    }
};

export const updateComment = async (req, res, next) => {
    // owner 권한 확인 필요

    const { content } = req.body;
    const { id } = req.params;

    try {
        const updatedComment = await Comment.findByIdAndUpdate(id, { content: content }, { new: true });
        return res.status(200).send(updatedComment);
    } catch(error) {
        return res.status(404).json({message: error});
    }
};

export const deleteComment = async (req, res, next) => {
    const { _id } = req.user;
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id);
        const post = await Post.findById(comment.post);

        const updatedPost = await Post.findByIdAndUpdate(post._id, 
            { $pull: { comments: id }}, 
            { new: true }
        );
        await User.findByIdAndUpdate(_id,{$pull:{comments:id}})
        await Comment.findByIdAndDelete(id);
        return res.status(200).send(updatedPost);
    } catch(error) {
        return res.status(404).json({mesage: error});
    }
};

export const addNewComment = async (req, res, next) => {
    // owner 권한 확인 필요

    const { id } = req.params;      // post의 id이다.
    const { _id, username } = req.user;
    const { content } = req.body;

    try {
        const newComment = new Comment({
            owner: _id,
            username: username,
            content: content,
            post: id
        });
        await newComment.save();
        await Post.findByIdAndUpdate(id, { $push: { comments: newComment._id }});
        await User.findByIdAndUpdate(_id,{ $push:{ comments:newComment._id }});
        return res.status(201).send(newComment);
    } catch(error) {
        return res.status(404).json({mesage: error});
    }
};
