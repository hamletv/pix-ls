const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler (async (req, res) => {
    const images = await Image.findAll({ limit: 3 });
    console.log(images);
    await res.json(images);
}));




module.exports = router;
