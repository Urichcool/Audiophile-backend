import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ordersSchema: mongoose.Schema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    address: String,
    zip: String,
    city: String,
    country: String,
    radioValue: String,
    eMoneyNumber: String,
    eMoneyPin: String,
  },
  { versionKey: false, timestamp: true }
);

export const Orders = model("Orders", ordersSchema, "orders");
