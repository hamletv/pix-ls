const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models')
const { Image } = require('../../db/models');
const router = express.Router();


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

router.get('/:id', asyncHandler (async (req, res) => {
    const imageId = parseInt(req.params.id, 10);
    const image = await Image.findByPk(id);
    res.json(image);
}));


module.exports = router;
