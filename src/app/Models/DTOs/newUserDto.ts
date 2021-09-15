import { Address } from '../clients';

export class UserSignUpDto {
  public dni: string;
  public image: string;
  public name_and_surname: string;
  public password: string;
  public username: string;
  address: Address;

  constructor(
    dni: string,
    image: string,
    name_and_surname: string,
    password: string,
    username: string,
    address: Address
  ) {
    this.dni = dni;
    this.image = image;
    this.name_and_surname = name_and_surname;
    this.password = password;
    this.username = username;
    this.address = address;
  }
}
