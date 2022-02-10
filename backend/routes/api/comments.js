const express = require('express');
const { check, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Comment, User } = require('../../db/models');
const router = express.Router();

router.use(requireAuth);

// const commentValidators = [
//     check('content')
//       .exists({ checkFalsy: true})
//       .withMessage('Please provide content for your comment.'),
//     handleValidationErrors,
// ];

// get comments
router.get('/:imageId/comments', asyncHandler (async (req, res) => {
    const imageId = parseInt(req.params.imageId, 10);
    const comments = await Comment.findAll({
        where: { imageId },
        include: User
    });
    res.json(comments);
}));

// add comment - add comment validators
router.post('/:imageId/comments', asyncHandler (async(req, res) => {
    const { userId, imageId, comment } = req.body;
    const { id } = await Comment.create({ userId, imageId, comment });
    const imageComment = await Comment.findByPk(id);
    res.json(imageComment);
}));

// edit comment - add comment validators
router.put('/:commentId', asyncHandler (async(req, res) => {
    const id = parseInt(req.params.commentId, 10);
    const { comment } = req.body;
    const singleComment = await Comment.findByPk(id, { include: User });

    await singleComment.update({ comment });
    res.json(singleComment);
}));

// delete comment
router.delete('/:commentId', asyncHandler (async(req, res) => {
    const id = parseInt(req.params.commentId, 10);
    const comment = await Comment.findByPk(id);
    await comment.destroy();
    return res.json({ message: `Comment ${id} deleted` });
}));



module.exports = router;