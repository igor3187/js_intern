const express = require("express");
const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/posts');

const app = express();

app.use(express.json());

// TODO: posts
// TODO: comments
// TODO: albums
// TODO: albums
// TODO: todos

app.use('/users', users);
app.use('/posts', posts);
app.use('/comments', comments);

module.exports = app;
