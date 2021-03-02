export interface I_loginAPIres {
  token: string;
  bearer: string;
  username: string;
  authorities: [
    {
      authority: string;
    }
  ];
}
