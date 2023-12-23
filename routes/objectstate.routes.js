const Router = require('express');
const router = new Router();
const stateController = require('../controller/objectstate.controller');

router.post('/PostState', stateController.createState);
router.get('/GetState/:id', stateController.getState);
router.get('/GetAllState', stateController.getAllState);
router.put('/PutState/:id', stateController.updateState);
router.delete('/DeleteState/:id', stateController.deleteState);

module.exports = router;
