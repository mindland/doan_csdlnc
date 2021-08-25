import sqlConfig from "../sqlConfig";
import { getToken } from "../util";
const sql = require("mssql");

function createProduct(req, res) {
    const { name, price, quantity, sold, origin, category, shop_name } = req.body;
    sql.connect(sqlConfig, (err) => {
        if (err) console.log(err);
        var request = new sql.Request();
        const queryStatement = `EXEC CreateProductProc '', N'${name}', ${price}, ${quantity}, ${sold}, '${origin}', '${category}', '${shop_name}', NULL, NULL`
        request.query(queryStatement, (err, data) => {
            if (err) console.log(err);
            let isProductCreated = false;
            if (data.rowsAffected[0] === 1)
                isProductCreated = !isProductCreated
            res.send({ productCreateStatus: isProductCreated })
        });
    });
}

module.exports = {
    createProduct,
};
