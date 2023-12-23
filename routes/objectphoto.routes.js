const Router = require('express');
const router = new Router();
const objectPhotoController = require('../controller/objectphoto.controller');

router.post('/PostObjectPhoto', objectPhotoController.addObjectPhoto);
router.post('/PostObjectPhotoArray', objectPhotoController.uploadIMGArray);
router.get('/GetObjectPhoto/:id', objectPhotoController.getObjectPhoto);
router.get('/GetAllObjectPhoto', objectPhotoController.getAllObjectPhoto);
router.put('/PutObjectPhoto/:id', objectPhotoController.updateObjectPhoto);
router.delete('/DeleteObjectPhoto/:id', objectPhotoController.deleteObjectPhoto);


router.post('/PostObjectPhoto2', objectPhotoController.uploadIMG);//chat

module.exports = router;
