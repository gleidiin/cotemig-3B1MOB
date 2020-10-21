const postRouter = require('../controllers/posts/posts.router')

module.exports = (server) => {
    server.use('/posts', postRouter);
}