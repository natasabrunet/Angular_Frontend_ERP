export class Product {
  public id: number;
  public name: string;
  public stock: number;
  public price: number;
  public image: string;
  public vat: number;
  public wholesale_price: number;
  public wholesale_quantity: number;
  public quantity?: number;
  public total?: number;

  constructor(
    id: number,
    name: string,
    stock: number,
    price: number,
    image: '../../assets/images/products.jpg',
    vat: number,
    wholesale_price: number,
    wholesale_quantity: number,
    quantity: number,
    total?: number
  ) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.price = price;
    this.image = image;
    this.vat = vat;
    this.wholesale_price = wholesale_price;
    this.wholesale_quantity = wholesale_quantity;
    this.quantity = quantity;
    this.total = total;
  }
}
