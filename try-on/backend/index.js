const express = require("express");
const app = express();
const db = require("./config");
const homeRoutes = require("./Routes/homeRoutes");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const bodyParser = require("body-parser");
const authenticate = require("./Middleware/Authenticate");
const payment = require("./Routes/paymentRoutes");
const cors = require("cors");
const PORT = 4000;

app.use(bodyParser.json({ extended: true }));
// app.use(express.json({ extended: true }));
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", homeRoutes);
app.use("/admin", adminRoutes);
app.use("/user", authenticate, userRoutes);
app.use("/product", productRoutes);
app.use("/payment", payment);

app.listen(PORT, () => {
  console.log("listening on: ", PORT);
});
