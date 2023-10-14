const expess = require("express");
const morgan = require("morgan");
const MongoClient = require("mongodb").MongoClient;
const { connectMongo } = require("./db/conection");
const app = expess();
const cors = require("cors");
require("dotenv").config();

const {homeRouter} = require('./homeRouter')
const PORT = process.env.PORT || 3001;

app.use(expess.json());
app.use(expess.urlencoded({ extended: true }));
app.use(expess.static('public'));
app.use(morgan('tiny'));
app.use(homeRouter)
app.use(cors());

app.get("/home", (req, res) => {
  res.sendStatus(200);
});

const start = async () => {
  try {
    await connectMongo();
    console.log("Database connection successful");
    app.listen(PORT, (err) => {
      if (err) console.error("Error at aserver launch", err);
      console.log(`Server works at port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();