"use strict";

const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");
const md5 = require('md5');

const getDrivers = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("drivers");
    const list = await pool.request().query(sqlQueries.driverslist);
    return list.recordset;
  } catch (error) {
    return error.message;
  }
};

const getDriverById = async (driverId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("drivers");
    const oneDriver = await pool
      .request()
      .input("driverId", sql.Int, driverId)
      .query(sqlQueries.driverbyId);
    return oneDriver.recordset;
  } catch (error) {
    return error.message;
  }
};

const createDriver_ = async (driverData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("drivers");
    const insertDriver = await pool
    .request()
    .input('driver_code', sql.NVarChar(50), driverData.driver_code)
    .input('driver_pass_md5', sql.NVarChar(1000), md5(driverData.driver_pass_md5))
    .input('driver_name_th', sql.NVarChar(100), driverData.driver_name_th)
    .input('driver_name_en', sql.NVarChar(100), driverData.driver_name_en)
    .input('driver_company', sql.NVarChar(100), driverData.driver_company)
    .input('driver_section', sql.NVarChar(100), driverData.driver_section)
    .input('driver_truck_head_no', sql.NVarChar(50), driverData.driver_truck_head_no)
    .input('driver_truck_tail_no', sql.NVarChar(50), driverData.driver_truck_tail_no)
    .input('driver_truck_type', sql.NVarChar(50), driverData.driver_truck_type)
    .input('driver_sign', sql.Image, null)
    .input('driver_status', sql.NVarChar(20), driverData.driver_status)
    .input('driver_issue_by', sql.NVarChar(50), driverData.driver_issue_by)
    .query(sqlQueries.createDriver);
    return insertDriver.recordset;
   } catch (error) {
    return error.message;
  }
}


const updateDriver_ = async (driver_id, driverData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("drivers");
    const update = await pool.request()
    .input('driver_id', sql.Int, driver_id)  
    .input('driver_code', sql.NVarChar(50), driverData.driver_code)
    .input('driver_pass_md5', sql.NVarChar(1000), md5(driverData.driver_pass_md5))
    .input('driver_name_th', sql.NVarChar(100), driverData.driver_name_th)
    .input('driver_name_en', sql.NVarChar(100), driverData.driver_name_en)
    .input('driver_company', sql.NVarChar(100), driverData.driver_company)
    .input('driver_section', sql.NVarChar(100), driverData.driver_section)
    .input('driver_truck_head_no', sql.NVarChar(50), driverData.driver_truck_head_no)
    .input('driver_truck_tail_no', sql.NVarChar(50), driverData.driver_truck_tail_no)
    .input('driver_truck_type', sql.NVarChar(50), driverData.driver_truck_type)
    .input('driver_sign', sql.Image, null)
    .input('driver_status', sql.NVarChar(20), driverData.driver_status)
    .input('driver_issue_by', sql.NVarChar(50), driverData.driver_issue_by)
    .query(sqlQueries.updateDriver);
    return update.recordset;
  } catch (error) {
    return error.message;
  }
}



module.exports = {
  getDrivers,
  getDriverById,
  createDriver_,
  updateDriver_
};
