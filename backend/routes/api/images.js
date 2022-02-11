const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');
const { Image } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')
const router = express.Router();

router.use(requireAuth);

// get all images
router.get('/', asyncHandler (async (req, res) => {
    const images = await Image.findAll({});
    // console.log(images)
    await res.json(images);
}));

// add image - add restoreUser midware
router.post('/add', asyncHandler (async (req, res) => {
    const { userId, imageUrl, description } = req.body; //albumId
    const newImage = await Image.create({ imageUrl, description, userId }); //albumId
    return res.json(newImage);
}));

// get image
router.get('/:imageId', asyncHandler (async(req, res, next) => {
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
router.put('/:id', asyncHandler (async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const image = await Image.findByPk(id);
    const { description, imageUrl } = req.body;
    await image.update({ description, imageUrl });
    await image.save();
    return res.json(image);
}))

// delete image
router.delete('/:imageId', asyncHandler (async(req, res) => {
    const imageId = parseInt(req.params.imageId, 10);
    const image = await Image.findByPk(imageId);
    await image.destroy();
    return res.json({ message: 'Image deleted' });
}));


module.exports = router;
