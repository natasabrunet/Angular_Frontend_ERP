export class OrderList {
  id: number;
  name: string;
  created: number;
  // date_created: string;
  stock: number;
  price: number;
  status: string;

  constructor(
    id: number,
    name: string,
    created: number,
    stock: number,
    price: number,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.created = created;
    this.stock = stock;
    this.price = price;
    this.status = status;
  }
}

// `${this.id} ${this.name} ${this.created}${this.stock} ${this.price}${this.status}`;
