const expess = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { goodsRoute } = require("./routes/goodsRoute");
const {headphonesRoute} = require("./routes/headphonesRoute")

const app = expess();

app.use(expess.json());
app.use(expess.urlencoded({ extended: true }));
app.use(expess.static("public"));
app.use(morgan("tiny"));
app.use(cors());

app.use("/goods", goodsRoute);
app.use("/headphones", headphonesRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message, status: error.status });
});

module.exports = app;
