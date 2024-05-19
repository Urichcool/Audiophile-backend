import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ordersSchema: mongoose.Schema = new Schema(
  {
    shippingData: {
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
    products: [
      {
        id: String,
        name: String,
        quantity: Number,
        price: Number,
        picture: String,
        totalPrice: Number,
        category: String,
      },
    ],
  },
  { versionKey: false, timestamp: true }
);

export const Orders = model("Orders", ordersSchema, "orders");
