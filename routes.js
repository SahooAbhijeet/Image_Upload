const express = require('express');
const { postImage } = require('./controller');
const { upload } =require('./upload');

const Router = express.Router();

Router.post('/', upload.single("image"), postImage);

module.exports = {
    Router
}