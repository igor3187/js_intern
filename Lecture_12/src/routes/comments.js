const express = require('express');
const router = express.Router();
const database = require("../database.json");

router.get("/", (req, res) => {
    // Get all comments
    const comments = database.comments;
    res.json(comments)
});

router.get("/:id", (req, res) => {
    // Get comment by id
    if (req.params && req.params.id) {
        const comment = database.comments.find(comment => comment.id === +req.params.id);
        if (comment) {
            res.json(comment);
        } else {
            res.status(400).json({message: "Comment not found"});
        }
    }
});

router.post("/", (req, res) => {
    //Create new comment
    if (!req.body) {
        req.status(400).json({message: "Empty body"});
    } else {
        const lastComment = [...database.comments].sort((a, b) => a.id - b.id).pop();
        const comment = {
            postId: req.body.userId,
            id: lastComment.id + 1,
            name: req.body.name,
            email: req.body.email,
            body: req.body.body
        };
        database.comments.push(comment);
        res.json(comment)
    }
});

router.patch("/:id", (req, res) => {
    //Update comment field by id
    if (req.params && req.params.id) {
        let updateComment;
        database.comments.map(comment => {
            if (comment.id === +req.params.id) {
                comment = Object.assign(comment, req.body);
                updateComment = comment;
            }
            return comment;
        });
        if (updateComment) {
            res.json(updateComment);
        } else {
            res.status(400).json({message: 'Comment not found'});
        }
    }
});

router.delete("/:id", (req, res) => {
    //Delete comment by id
    if (req.params && req.params.id) {
        if (database.comments.some(comment => comment.id === +req.params.id)) {
            database.posts = database.users.filter(comment => comment.id === +req.params.id);
            res.json({message: 'Comment delete successfully'});
        } else {
            res.status(400).json({message: 'Comment not found'})
        }
    }
});

module.exports = router;