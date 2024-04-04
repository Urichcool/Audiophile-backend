import express, {
  Express,
  Request,
  Response,
  NextFunction,
} from "express";
import { HttpException } from "./exceptions/HttpException";
const morgan = require("morgan");
const cors = require("cors");
const { goodsRoute } = require("./routes/goodsRoute");
const { headphonesRoute } = require("./routes/headphonesRoute");
const { speakersRoute } = require("./routes/speakersRoute");
const { earphonesRoute } = require("./routes/earphonesRoute");
const { stockRoute } = require("./routes/stockRoute");


const corsOptions = {
  origin: "http://localhost:3000",
};




const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(cors(corsOptions));

app.use("/goods", goodsRoute);
app.use("/headphones", headphonesRoute);
app.use("/speakers", speakersRoute);
app.use("/earphones", earphonesRoute);
app.use("/stock", stockRoute);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    res.status(500).json({ message: err.message });
  }
  next();
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    res.status(err.status || 500);
    res.json({ message: err.message, status: err.status });
  }
  next();
});

module.exports = app;
