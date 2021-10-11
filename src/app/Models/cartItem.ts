import { Product } from './Product';

export class cartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  wholesaleqty: number;
  wholesaleprice: number;
  stock: number;
  total: number;

  constructor(
    id: number,
    name: string,
    quantity: number,
    price: number,
    stock: number,
    wholesaleqty: number,
    wholesaleprice: number,
    total: number
  ) {
    this.id = id;
    this.productId = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.wholesaleqty = wholesaleqty;
    this.wholesaleprice = wholesaleprice;
    this.stock = stock;
    this.total = total;
  }
}
