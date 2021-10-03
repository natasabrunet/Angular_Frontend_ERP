import { Product } from './Product';

export class cartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  total: number;

  constructor(
    id: number,
    product: Product,
    quantity = 1,
    price: number,
    total: number
  ) {
    this.id = id;
    this.productId = product.id;
    this.name = product.name;
    this.price = product.price;
    this.quantity = quantity;
    this.total = quantity * price;
  }
}
