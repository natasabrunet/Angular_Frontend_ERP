export class newProductDto{

  public name:  string;
  public stock: number;
  public price: number;
  public image: string;

  constructor(name:string, stock:number, price:number, image:string){
    this.name  = name;
    this.stock = stock;
    this.price = price;
    this.image = image;
  }
  
}
  