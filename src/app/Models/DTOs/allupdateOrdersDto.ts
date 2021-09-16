export interface UpdateOrdersDto {
  success: string;
  message: string;
  order: Order[];
}

export interface Order {
  orders: Order[];
  id: string;
  employee_id: string;
  client_id: string;
  date_created: string;
  status: string;
  payment_method: string;
  shipping_address: IngAddress;
  billing_address: IngAddress;
  total: number;
  order_details: OrderDetail[];
}

export interface IngAddress {
  id: string;
  street: string;
  number: string;
  city: string;
  country: string;
  zipcode: string;
}

export interface OrderDetail {
  id: string;
  product: Product;
  quantity: number;
  subtotal: number;
}

export interface Product {
  id: number;
  name: string;
  created: number;
  modified: number;
  stock: number;
  image: string;
  family: string;
  price: number;
  vat: number;
  wholesale_price: number;
  wholesale_quantity: number;
  categories: any[];
}
