export class UserSignUpDto {

  address: string;
  cif: string;
  image: string;
  name_surname: string;
  username: string;
  password: string;
  user_type: string;


  constructor(newClient) {
    this.address = `${newClient.address.inputAddress} ${newClient.address.inputCity} ${newClient.address.inputProvince} ${newClient.address.inputZIP} ${newClient.address.inputCountry}`;
    this.cif = newClient.inputCIF;
    this.image = '';
    this.name_surname = `${newClient.inputName} ${newClient.inputSurname}`;
    this.username = newClient.inputEmail;
    this.password = newClient.inputPassword;
    this.user_type = 'CLIENT'
  }

}