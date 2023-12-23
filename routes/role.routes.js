const Router = require('express');
const router = new Router();
const roleController = require('../controller/role.controller');

router.post('/PostRole', roleController.createRole);
router.get('/GetRole/:id', roleController.getRole);
router.get('/GetAllRole', roleController.getAllRole);
router.put('/PutRole/:id', roleController.updateRole);
router.delete('/DeleteRole/:id', roleController.deleteRole);

module.exports = router;
