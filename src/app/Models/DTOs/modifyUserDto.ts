export class modifyUserDto{

    public id       : number;
    public userName : string;
    public password : string;
    public user_type: string;

    constructor(id:number, userName:string, password:string, user_type:string){
      this.id        = id;
      this.userName  = userName;
      this.password  = password;
      this.user_type = user_type;
    }
    
}
   