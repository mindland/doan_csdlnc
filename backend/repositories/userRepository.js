import sqlConfig from "../sqlConfig";
const sql = require("mssql");

function getUsers(req, res) {
  sql.connect(sqlConfig, (err) => {
    if (err) console.log(err);
    var request = new sql.Request();
    console.log(req);
    request.query("select * from [User]", (err, data) => {
      if (err) console.log(err);
      res.send(data.recordset);
    });
  });
}

module.exports = {
  getUsers,
};
