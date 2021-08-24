import sqlConfig from "../sqlConfig";
import { getToken } from "../util";
const sql = require("mssql");

function getSoldProductStatistics(req, res) {
    const {shop_name, limit} = req.body;
    sql.connect(sqlConfig, (err) => {
    if (err) console.log(err);
    var request = new sql.Request();
    const queryStatement =  `EXEC Shop_Product_Sold '', '${shop_name}', ${limit}, ''`
    request.query(queryStatement, (err, data) => {
      if (err) console.log(err);
      console.log(data)
      if (!data) {
        res.status(400).json({ errors: [ { msg: 'Fail to get statistics' }] });
      }
      else {
        res.send(data.recordset);
      }
    });
  });
}

function createShopUnit(req, res) {
  const {shop_name, address, description, bank_account, business_license_code, email_owner, phone_owner} = req.body;
  sql.connect(sqlConfig, (err) => {
  if (err) console.log(err);
  var request = new sql.Request();
  const queryStatement =  `EXEC CreateShop '${shop_name}', '${address}', '${description}', '${bank_account}', '${business_license_code}', '${email_owner}', '${phone_owner}', ''`
  request.query(queryStatement, (err, data) => {
    if (err) console.log(err);
    let isShopCreated = false;
    if (data.rowsAffected[0] === 1)
      isShopCreated = !isShopCreated
    res.send({shopCreateStatus: isShopCreated})
  });
  });
}

  module.exports = {
    getSoldProductStatistics, createShopUnit,
  };
  