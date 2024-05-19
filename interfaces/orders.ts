export interface IOrders {
  shippingData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    radioValue: string;
    eMoneyNumber?: string;
    eMoneyPin?: string;
  };
  products: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    picture: string;
    totalPrice: number;
    category: string;
  }[];
}
