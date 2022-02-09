const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models')
const { Image } = require('../../db/models');
const router = express.Router();


router.use(requireAuth);

router.get('/', asyncHandler (async (req, res) => {
    const images = await Image.findAll({});
    await res.json(images);
}));

router.post('/', asyncHandler (async (req, res) => {
    const { userId, imageUrl, description } = req.body;
    const newImage = await Image.create({
        userId, imageUrl, description
    });
    return res.json(newImage);
}));

router.get('/:pixId', asyncHandler (async (req, res) => {
    const imageId = parseInt(req.params.pixId, 10);
    const image = await Image.findByPk(imageId);
    res.json(image);
}));

router.delete('/:pixId', asyncHandler (async (req, res) => {
    const imageId = parseInt(req.params.pixId, 10);
    const image = await Image.findByPk(imageId);
    await image.destroy();
    return res.json({ message: 'Image deleted' });
}))


module.exports = router;
