//FIXME: Clase temporal hasta que desde back end se actualice schema
export class UserSignUp{

  public username: string;
  public password: string;

  constructor(cif:string, password:string){
    this.username = cif;
    this.password = password;
  }

}

//TODO: usar esta clase cuando desde back-end se actualice schema
/*export class UserSignUp{

  public businessName: string;
  public cif: string;
  public email: string;
  public password: string;

  constructor(businessName:string, cif:string, email:string, password:string){
    this.businessName = businessName;
    this.cif = cif;
    this.email = email;
    this.password = password;
  }

}*/
