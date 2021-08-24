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

  module.exports = {
    getSoldProductStatistics
  };
  