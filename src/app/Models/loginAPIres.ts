export interface I_loginAPIres {
  token: string;
  bearer: string;
  nombreUsuario: string;
  authorities: [
    {
      authority: string; // ROLE: Admin, CLient, Employee
    }
  ];
}
