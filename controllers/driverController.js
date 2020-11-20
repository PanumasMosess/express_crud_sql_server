"use strict";

const driverData = require("../data/drivers");

const getDrivers = async (req, res, next) => {
  try {
    const drivers = await driverData.getDrivers();
    res.send(drivers);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getDriver = async (req, res, next) => {
  try {
    const driverId = req.params.id;
    const oneDriver = await driverData.getDriverById(driverId);
    res.send(oneDriver);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addDriver = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await driverData.createDriver_(data);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateDriver = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updated = await driverData.updateDriver_(id, data);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteDriver = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleted = await driverData.deleteDriverById_(id);
    res.send(deleted);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


module.exports = {
  getDrivers,
  getDriver,
  addDriver,
  updateDriver,
  deleteDriver
};
