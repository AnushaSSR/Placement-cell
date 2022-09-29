const express = require('express');

const employeeCtrlr = require('../controllers/employee_controller');

const router= express.Router();

router.get('/sign-in', employeeCtrlr.signIn);
router.get('/sign-up', employeeCtrlr.signUp);

module.exports = router;