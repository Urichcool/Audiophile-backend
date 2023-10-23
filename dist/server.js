"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const conection_1 = require("./db/conection");
require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3001;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, conection_1.connectMongo)();
        console.log("Database connection successful");
        app.listen(PORT, (err) => {
            if (err)
                console.error("Error at aserver launch", err);
            console.log(`Server works at port ${PORT}`);
        });
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
});
start();
