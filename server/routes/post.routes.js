const express = require('express');
const router = express.Router(); 
const { setPosts, getPosts, editPosts, deletePost, likePost, dislikePost } = require("../controllers/post.controller");


router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPosts);
router.patch("/Like-post/:id", likePost);
router.patch("/disLike-post/:id", dislikePost);
router.delete("/:id", deletePost);

module.exports = router;