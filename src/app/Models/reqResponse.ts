export interface ReqResponseEmployees {
  success:   string;
  message:   string;
  employees: Employee[];
}

interface Employee {
  id:                    string;
  salary:                number;
  dni:                   string;
  phone:                 number;
  in_date:               string;
  user:                  User;
  total_sales:           number;
  total_orders_attended: number;
}

interface User {
  username: string;
  id:       number;
}
