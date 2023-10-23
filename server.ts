import { connectMongo } from "./db/conection";
require("dotenv").config();
const app = require("./app");

const PORT: string | 3001 = process.env.PORT || 3001;

const start = async (): Promise<void> => {
  try {
    await connectMongo();
    console.log("Database connection successful");
    app.listen(PORT, (err: unknown) => {
      if (err) console.error("Error at aserver launch", err);
      console.log(`Server works at port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
