export class Offer{

        id: string;
        name: string;
        discount: number;
        start_date: string;
        end_date: string;
        paid_quantity: number;
        free_quantity: number;
    
    constructor(
        id: string,
        name: string,
        discount: number,
        start_date: string,
        end_date: string,
        paid_quantity: number,
        free_quantity: number
    ){
        this.id = id;
        this.name = name;
        this.discount = discount;
        this.start_date = start_date;
        this.end_date = end_date;
        this.paid_quantity = paid_quantity;
        this.free_quantity = free_quantity;
    }    
}