const mongoose = require("mongoose");

 export const connectMongo = async ():Promise<void> => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

