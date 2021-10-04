export class MyCart {
  cartItems: any[];
  cartTotal: number;

  constructor(carItems: any[], cartTotal: number) {
    this.cartItems = carItems;
    this.cartTotal = cartTotal;
  }
}
