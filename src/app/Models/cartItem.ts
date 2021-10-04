import { Product } from './Product';

export class cartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  total: number;

  constructor(
    id: number,
    name: string,
    quantity: number,
    price: number,
    stock: number,
    total: number
  ) {
    this.id = id;
    this.productId = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.stock = stock;
    this.total = total;
  }
}
