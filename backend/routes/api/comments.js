const express = require('express');
const { check, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Comment, User } = require('../../db/models');
const router = express.Router();

router.use(requireAuth);

const commentValidators = [
    check('content')
      .exists({ checkFalsy: true})
      .withMessage('Please provide content for your comment.'),
    handleValidationErrors,
];


// get comments
router.get('/:pixId/comments', asyncHandler (async (req, res) => {
    const imageId = parseInt(req.params.pixId, 10);
    const comments = await Comment.findAll({
        where: { imageId },
        include: User
    });
    await res.json(comments);
}));

// add comment
router.post('/:pixId/comments', commentValidators, asyncHandler (async (req, res) => {
    const { userId, imageId, comment } = req.body;
    const { id } = await Comment.create({ userId, imageId, comment });
    const pixComment = await Comment.findByPk(id);
    res.json(pixComment);
}));

// delete comment
router.delete('/:pixId/comments/:commentId', asyncHandler (async (req, res) => {
    const commentId = parseInt(req.params.commentId, 10);
    const comment = await Comment.findByPk(commentId);
    await comment.destroy();
    return res.json({ message: `Comment ${commentId} deleted` });
}));



module.exports = router;
