"use strict";


const express = require('express');
const driverController = require('../controllers/driverController');
const router = express.Router();

const {getDrivers, getDriver, addDriver, updateDriver} = driverController;

//get all drivers
router.get('/drivers', getDrivers)
//get By ID
router.get('/driver/:id', getDriver)
//create Driver
router.post('/driver', addDriver)
//update Driver
router.put('/driver/:id', updateDriver)


module.exports = {
    routes: router
}