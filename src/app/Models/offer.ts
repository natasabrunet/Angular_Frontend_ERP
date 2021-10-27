export class Offer{

        id: string;
        name: string;
        discount: number;
        starts_on: string;
        ends_on: string;
        paid_quantity: number;
        free_quantity: number;
    
    constructor(
        id: string,
        name: string,
        discount: number,
        starts_on: string,
        ends_on: string,
        paid_quantity: number,
        free_quantity: number
    ){
        this.id = id;
        this.name = name;
        this.discount = discount;
        this.starts_on = starts_on;
        this.ends_on = ends_on;
        this.paid_quantity = paid_quantity;
        this.free_quantity = free_quantity;
    }    
}