const expess = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { homeRouter } = require("./routes/homeRouter");

const app = expess();

app.use(expess.json());
app.use(expess.urlencoded({ extended: true }));
app.use(expess.static("public"));
app.use(morgan("tiny"));
app.use(cors());

app.use(homeRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
    next();
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
    next();
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
    res.json({ message: error.message, status: error.status });
    next();
});

module.exports = app;
