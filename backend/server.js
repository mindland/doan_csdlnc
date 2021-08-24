import express from "express";
// import path from "path";
import bodyParser from "body-parser";
import config from "./config";
import userRoute from "./routes/userRoute";
import shopRoute from "./routes/shopRoute";
// import productRoute from "./routes/productRoute";
// import orderRoute from "./routes/orderRoute";
// import uploadRoute from "./routes/uploadRoute";

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/shop", shopRoute);
// app.use("/api/uploads", uploadRoute);
// app.use("/api/products", productRoute);
// app.use("/api/orders", orderRoute);
// app.get("/api/config/paypal", (req, res) => {
//   res.send(config.PAYPAL_CLIENT_ID);
// });
// app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
// app.use(express.static(path.join(__dirname, "/../frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
// });

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:" + config.PORT);
});
