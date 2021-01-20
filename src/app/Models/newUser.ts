export class UserSignUp{

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

}
