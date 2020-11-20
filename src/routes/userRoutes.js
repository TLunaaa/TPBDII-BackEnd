var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/:username/workspaces',userController.getWorkspaces);

router.patch('/:username/workspaces',userController.createWorkspace);

module.exports = router;
