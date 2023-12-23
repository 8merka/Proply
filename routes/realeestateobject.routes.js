const Router = require('express');
const router = new Router();
const realeEstateObjectController = require('../controller/realeestateobject.controller');

router.post('/PostRealeEstateObject', realeEstateObjectController.createRealeEstateObject);
router.get('/GetRealeEstateObject/:id', realeEstateObjectController.getRealeEstateObject);
router.get('/GetAllRealeEstateObject', realeEstateObjectController.getAllRealeEstateObject);
router.put('/PutRealeEstateObject/:id', realeEstateObjectController.updateRealeEstateObject);
router.delete('/DeleteRealeEstateObject/:id', realeEstateObjectController.deleteRealeEstateObject);
router.get('/GetRealeEstateObjectBySellerID/:seller_id', realeEstateObjectController.getRealeEstateObjectBySellerID);

module.exports = router;
