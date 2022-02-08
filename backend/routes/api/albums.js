const express = require('express');
const asyncHandler = require('express-async-handler');
const { Album } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler (async (req, res) => {
    const albums = await Album.findAll();
    console.log(albums);
    await res.json(albums);
}));




module.exports = router;
