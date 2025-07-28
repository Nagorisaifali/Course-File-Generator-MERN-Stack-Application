
// backend/utils/cloudinary.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'coursefile',
    allowed_formats: ['jpg', 'png' , "jpeg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
