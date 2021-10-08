import { Product } from 'src/app/Models/Product';

export class Order {
  public employee_Id;
  public client_Id;
  public date_created: any;
  public status: string;
  public payment_method: string;
  public shipping_address: {
    id: any;
    street: string;
    number: string;
    city: string;
    country: string;
    zipcode: string;
  };
  public billing_address: {
    id: any;
    street: string;
    number: string;
    city: string;
    country: string;
    zipcode: string;
  };
  public total: number;
  public order_details: any[];

  //   {
  //     product: {
  //       id: number;
  //       name: string;
  //       stock: number;
  //       image: string;
  //       price: number;
  //       vat: number;
  //       wholesale_price: number;
  //       wholesale_quantity: number;
  //     };
  //     quantity: number;
  //     subtotal: number;
  //   }
  // ];

  constructor(
    date_created: any,
    status: string,
    payment_method: string,
    shipping_address: any,
    billing_address: any,
    total: number,
    order_details: any[]
  ) {
    this.date_created = date_created;
    this.status = status;
    this.payment_method = payment_method;
    this.shipping_address = shipping_address;
    this.billing_address = billing_address;
    this.total = total;
    this.order_details = order_details;
  }
}
