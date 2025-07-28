
// backend/middleware/upload.js
const multer = require('multer');
const { storage } = require('../utils/cloudinary');

const upload = multer({ 
    storage: storage,
    limits: {
    fileSize: 5 * 1024 * 1024,
    files : 10 , 
    },
});

module.exports = upload;
