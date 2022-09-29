const express = require('express');

const userCtrlr = require('../controllers/users_controller');

const router= express.Router();

router.get('/sign-in', userCtrlr.signIn);
router.get('/sign-up', userCtrlr.signUp);

module.exports = router;