export class updateClient{
    public id: number;
    public dni: string;
    public name_and_surname: string;

    constructor(
        id: number,
        dni: string,
        name_and_surname: string

    ){
        this.id = id;
        this.dni = dni;
        this.name_and_surname = name_and_surname;
    }
}