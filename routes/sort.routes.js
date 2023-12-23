const Router = require('express');
const router = new Router();
const sortController = require('../controller/sort.controller');

router.get('/GetObjectsWithState2', sortController.getObjectsWithState2);
router.get('/GetObjectsWithState3', sortController.getObjectsWithState3);
router.get('/GetObjectsWithType2', sortController.getObjectsWithType2);
router.get('/GetObjectsWithType3', sortController.getObjectsWithType3);
router.get('/GetObjectsWithType4', sortController.getObjectsWithType4);
router.get('/GetObjectsWithState2AndType2', sortController.getObjectsWithState2AndType2);
router.get('/GetObjectsWithState2AndType3', sortController.getObjectsWithState2AndType3);
router.get('/GetObjectsWithState2AndType4', sortController.getObjectsWithState2AndType4);
router.get('/GetObjectsWithState3AndType2', sortController.getObjectsWithState3AndType2);
router.get('/GetObjectsWithState3AndType3', sortController.getObjectsWithState3AndType3);
router.get('/GetObjectsWithState3AndType4', sortController.getObjectsWithState3AndType4);

module.exports = router;
