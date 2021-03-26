export class UserSignUpDto {

  id: string;
  address: string;
  dni: string;
  image: string;
  nameAndSurname: string;
  user: {
    id: number, // o tipo string??
    username: string,
    password: string,
    user_type: string
  }

  constructor(newClient) {
    this.address = `${newClient.address.inputAddress} ${newClient.address.inputCity} ${newClient.address.inputProvince} ${newClient.address.inputZIP}`;
    this.dni = newClient.inputDNI;
    this.image = '';
    this.nameAndSurname = `${newClient.inputName} ${newClient.inputSurname}`;
    //this.user.username = newClient.inputEmail;
    //this.user.password = newClient.inputPassword;
    //this.user.user_type = 'CLIENT'
  }
}

/*{
  "id": "18fc92f3-1173-47f0-b69b-33c2c49a890e",
  "address": "address example",
  "dni": "L1234567Z",
  "image": "url image",
  "nameAndSurname": "Random Name",
  "user": {
      "id": 2,
      "username": "userclient0@example.com",
      "password": "$2a$10$UdbqjjhmfPVyf.l./6.fX.tfwzpqu6mSY3ZmEldh/.TRwoDCkMyeG",
      "user_type": "CLIENT"
  }
}*/