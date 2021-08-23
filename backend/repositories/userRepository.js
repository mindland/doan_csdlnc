import sqlConfig from "../sqlConfig";
import { getToken } from "../util";
const sql = require("mssql");

function userSignin(req, res) {
  sql.connect(sqlConfig, (err) => {
    if (err) console.log(err);
    let request = new sql.Request();
    let email = req.body.email;
    let password = req.body.password;
    let queryString = `select * from [User] where Email = '${email}' and Password = '${password}'`;
    console.log(queryString);
    request.query(queryString, (err, data) => {
      if (err) console.log(err);
      if (data.recordset.length > 0) {
        let signinUser = data.recordset[0];
        res.send({
          User_ID: signinUser.User_ID,
          FirstName: signinUser.FirstName,
          LastName: signinUser.LastName,
          Email: signinUser.Email,
          City: signinUser.City,
          Phone: signinUser.Phone,
          token: getToken(signinUser),
        });
      } else {
        res.status(401).send({ message: "Invalid Email or Password." });
      }
    });
  });
}

module.exports = {
  userSignin,
};
