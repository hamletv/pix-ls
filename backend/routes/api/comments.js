const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment, User } = require('../../db/models');
const router = express.Router();

// get photo comments
router.get('/:pixId/comments', asyncHandler (async (req, res) => {
    const imageId = parseInt(req.params.pixId, 10);
    const comments = await Comment.findAll({
        where: { imageId },
        include: User
    });
    await res.json(comments);
}));

// add photo comments
router.post('/:pixId/comments', asyncHandler (async (req, res) => {
    const { userId, imageId, comment } = req.body;
    const { id } = await Comment.create({ userId, imageId, comment });
    const pixComment = await Comment.findByPk(id);
    res.json(pixComment);
}));



module.exports = router;
