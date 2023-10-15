const MongoClient = require("mongodb").MongoClient;
const { connectMongo } = require("./db/conection");
require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3001;

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
