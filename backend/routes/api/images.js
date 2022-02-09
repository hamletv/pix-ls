const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models')
const { Image } = require('../../db/models');
const router = express.Router();

router.use(requireAuth);

// get all images
router.get('/', asyncHandler (async (req, res) => {
    const images = await Image.findAll({});
    await res.json(images);
}));

// add image
router.post('/add', asyncHandler (async (req, res) => {
    const { imageUrl, description } = req.body;
    const newImage = await Image.create({ imageUrl, description });
    return res.json(newImage);
}));

// get image
router.get('/:imageId', asyncHandler (async (req, res, next) => {
    const imageId = parseInt(req.params.imageId, 10);
    const image = await Image.findByPk(imageId);

    if(!image) {
        const err = Error('Image does not exist');
        err.status = 400;
        err.title = 'Image Not Found';
        err.errors = ['The image you\'re looking for does not exist.'];
        return next(err);
    }
    res.json(image);
}));

// edit image
router.put('/:imageId', asyncHandler (async(req, res) => {
    const imageId = parseInt(req.params.imageId, 10);
    const { imageUrl, description } = req.body;
    const image = await Image.findByPk(imageId);
    await image.update({ imageUrl, description });
    res.json({ image });
}))

// delete image
router.delete('/:imageId', asyncHandler (async(req, res) => {
    const imageId = parseInt(req.params.imageId, 10);
    const image = await Image.findByPk(imageId);
    await image.destroy();
    return res.json({ message: 'Image deleted' });
}));


module.exports = router;
