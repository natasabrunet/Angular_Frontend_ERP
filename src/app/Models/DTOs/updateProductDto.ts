export class updateProductDto {
  public id: number;
  public name: string;
  public price: number;
  public image: string;

  constructor(
    id: number,
    name: string,
    stock: number,
    price: number,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
