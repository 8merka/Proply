const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.post('/PostUser', userController.createUser);
router.get('/GetUser/:id', userController.getOneUser);
router.get('/GetAllUser', userController.getAllUser)
router.put('/PutUser/:id', userController.updateUser);
router.delete('/DeleteUser/:id', userController.deleteUser);
router.post('/login', userController.loginUser);
router.post('/GetUserByEmail', userController.getUserByEmail);

module.exports = router;
