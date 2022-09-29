//import express
const express = require('express');
//get the router
const router = express.Router();
//get the routes
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/user', require('./user'));

console.log("Routes loaded");

module.exports = router;
