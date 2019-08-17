const express = require('express');
const router = express.Router();
const database = require("../database.json");

router.get("/", (req, res) => {
    // Get all posts
    const posts = database.posts;
    res.json(posts)
});

router.get("/:id", (req, res) => {
    // Get post by id
    if (req.params && req.params.id) {
        const post = database.posts.find(post => post.id === +req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(400).json({message: 'Post not found'});
        }
    }
});

router.post("/", (req, res) => {
    // Create new post
    if (!req.body) {
        res.status(400).json({message: 'Empty body'});
    } else {
        const lastPost = [...database.posts].sort((a, b) => a.id - b.id).pop();
        const post = {
            id: lastPost.id + 1,
            userId: req.body.userId,
            title: req.body.title,
            body: req.body.body
        };
        database.posts.push(post);
        res.json(post);
    }
});

router.patch("/:id", (req, res) => {
    // Update post field by id
    if (req.params && req.params.id) {
        let updatedPost;
        database.posts.map(post => {
            if (post.id === +req.params.id) {
                post = Object.assign(post, req.body);
                updatedPost = post;
            }
            return post;
        });
        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(400).json({message: 'Post not found'});
        }
    }
});

router.delete("/:id", (req, res) => {
    // Delete post by id
    if (req.params && req.params.id) {
        if (database.posts.some(post => post.id === +req.params.id)) {
            database.posts = database.users.filter(post => post.id !== +req.params.id);
            res.json({message: 'User deleted successfully'});
        } else {
            res.status(400).json({message: 'User not found'});
        }
    }
});

module.exports = router;