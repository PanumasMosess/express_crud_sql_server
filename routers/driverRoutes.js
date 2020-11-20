"use strict";


const express = require('express');
const driverController = require('../controllers/driverController');
const router = express.Router();

const {getDrivers, getDriver, addDriver, updateDriver, deleteDriver} = driverController;

//get all drivers
router.get('/drivers', getDrivers)
//get By ID
router.get('/driver/:id', getDriver)
//create Driver
router.post('/driver', addDriver)
//update Driver
router.put('/driver/:id', updateDriver)
//delete Driver
router.delete('/driver/:id', deleteDriver)


module.exports = {
    routes: router
}