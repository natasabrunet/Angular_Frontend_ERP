export class UserSignUp{

  public businessName: string;
  public cif: string;
  public email: string;
  public password: string;
  public password_conf: string;

  constructor(businessName:string, cif:string, email:string, password:string, password_conf: string){
    this.businessName = businessName;
    this.cif = cif;
    this.email = email;
    this.password = password;
    this.password_conf = password_conf;
  }

}
