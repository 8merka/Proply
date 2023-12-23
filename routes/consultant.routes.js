const Router = require('express');
const router = new Router();
const consultantController = require('../controller/consultant.controller');

router.post('/PostConsultant', consultantController.createConsultant);
router.get('/GetConsultant/:id', consultantController.getConsultant);
router.get('/GetAllConsultant', consultantController.getAllConsultant);
router.put('/PutConsultant/:id', consultantController.updateConsultant);
router.delete('/DeleteConsultant/:id', consultantController.deleteConsultant);

module.exports = router;
