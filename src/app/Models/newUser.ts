export class UserSignUp{

  //public businessName: string;
  public username: string;
  //public email: string;
  public password: string;

  constructor(cif:string, password:string){
    this.username = cif;
    this.password = password;
  }

}
