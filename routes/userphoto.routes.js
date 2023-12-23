const Router = require('express');
const router = new Router();
const userPhotoController = require('../controller/userphoto.controller');

router.post('/PostUserPhoto', userPhotoController.addUserPhoto);
router.post('/UploadUserImage', userPhotoController.uploadSingleImage);
router.get('/GetUserPhoto/:id', userPhotoController.getUserPhoto);
router.get('/GetAllUserPhoto', userPhotoController.getAllUserPhoto);
router.get('/GetUserPhotoByUserID/:id', userPhotoController.getUserPhotoByUserID);
router.put('/PutUserPhoto/:id', userPhotoController.updateUserPhoto);
router.delete('/DeleteUserPhoto/:id', userPhotoController.deleteUserPhoto);

module.exports = router;
