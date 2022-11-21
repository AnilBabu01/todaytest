const { json } = require("body-parser");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const connectdb = require("./config/db");
const port = 8080;

const app = express();

connectdb();
app.use(json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api", (req, res) => {
  res.send("apis is working");
});
const user = require("./routes/auth");
const order = require("./routes/order");
app.use("/api/auth", user);
app.use("/api/", order);
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
