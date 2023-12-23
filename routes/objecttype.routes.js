const Router = require('express');
const router = new Router();
const typeController = require('../controller/objecttype.controller');

router.post('/PostType', typeController.createType);
router.get('/GetType/:id', typeController.getType);
router.get('/GetAllType', typeController.getAllType);
router.put('/PutType/:id', typeController.updateType);
router.delete('/DeleteType/:id', typeController.deleteType);

module.exports = router;
