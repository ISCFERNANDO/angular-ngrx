export interface Employee {
  id: number;
  name: string;
  age: number;
  salary: number;
  imageUrl?: string;
  file?: File;
}

export interface Employees {
  employees: Employee[];
  lastId: number;
  error?: string;
}
