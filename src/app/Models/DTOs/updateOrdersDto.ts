export class updateOrderstDto {
  static orderJson(obj: Object) {
    return new updateOrderstDto(
      obj['id'],
      obj['name'],
      obj['date:created'],
      obj['price'],
      obj['status']
    );
  }

  public id: number;
  public name: string;
  public date_created: string;
  public price: number;
  public status: string;

  constructor(
    id: number,
    name: string,
    date_created: string,
    price: number,
    status: string
  ) {}
}
