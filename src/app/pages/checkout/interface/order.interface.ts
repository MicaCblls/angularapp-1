export interface Order {
  id: string;
  name: string;
  date: string;
  shippingAddress: string;
  city: string;
  isDelivery: boolean;
}
export interface Details {
  productId: string;
  quantity: number;
  productName: string;
}

export interface DetailsOrder {
  details: Details[];
  orderId: string;
}
