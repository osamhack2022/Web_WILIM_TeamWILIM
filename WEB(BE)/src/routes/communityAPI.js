/*
커뮤니티 게시글 정보에 대한 create, read, update, delete를 수행한다.
크게 게시글 /post 와 댓글 /comment 로 나뉘며, 각각의 route는 crud를 수행한다.
*/

import express from "express";
import mongoose from "mongoose";
import {
    getPostById,
    updatePost,
    deletePost,
    getPostsOfUser,
    addNewPost,
    searchPosts,
    getComment,
    updateComment,
    deleteComment,
    addNewComment
} from "../controller/communityAPI";

const router = express.Router();

// mongoose의 _id 값을 파라미터로 보내 crud를 진행한다.
router.route("/post/:id")       
    .get(getPostById)
    .put(updatePost)        // owner 권한 확인 필요
    .delete(deletePost);    // owner 권한 확인 필요

// username을 파라미터로 받아, 특정 User가 게시한 post만 받아 오거나, 새로운 post를 게시한다.
router.route("/:username/posts")    
    .get(getPostsOfUser)    
    .post(addNewPost);      // owner 권한 확인 필요

// 검색어를 입력받아 해당 검색어에 부합하는 post를 찾는다(regexp 이용)
router.route("/posts")
    .get(searchPosts);

// id를 파라미터로 받아, 댓글의 정보를 crud한다.
router.route("/comments/:id")
    .get(getComment)
    .put(updateComment)         // owner 권한 확인 필요
    .delete(deleteComment);     // owner 권한 확인 필요

// 게시글을 불러온 상태에서, 새로운 댓글을 추가하는 기능을 수행한다.
router.route("/post/:id/comments")  
    .post(addNewComment);       // owner 권한 확인 필요
    

export default router;