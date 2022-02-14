const express = require('express');
const { validateComment, validateEditComment } = require('../../utils/validation');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Comment, User } = require('../../db/models');
const router = express.Router();

router.use(requireAuth);


// get comments
router.get('/images/:imageId', asyncHandler (async (req, res) => {
    const imageId = parseInt(req.params.imageId, 10);
    const comments = await Comment.findAll({
        where: { imageId },
        include: User
    });
    return res.json(comments);
}));

// add comment - add comment validators
router.post('/images/:imageId', asyncHandler (async(req, res) => {
    const { userId, imageId, comment } = req.body;
    const { id } = await Comment.create({ userId, imageId, comment });
    const singleCommentObj = await Comment.findByPk(id, { include: User });
    return res.json(singleCommentObj);
}));

// edit comment - add comment validators
router.put('/images/:commentId', asyncHandler (async(req, res) => {
    const { comment, userId, imageId, id } = req.body;
    console.log('the update backend route', req.body)
    await Comment.update({ comment, userId, imageId }, { where: { id }});
    const singleCommentObj = await Comment.findByPk(id, { include: User });
    return res.json(singleCommentObj);
}));

// delete comment
router.delete('/images/:commentId', asyncHandler (async(req, res) => {
    const id = parseInt(req.params.commentId, 10);
    const comment = await Comment.findByPk(id);
    await comment.destroy();
    return res.json({ message: `Comment ${id} deleted` });
}));



module.exports = router;
