export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export const users: User[] = [
  { id: 1, name: "Ana García", email: "ana@email.com", age: 28 },
  { id: 2, name: "Carlos López", email: "carlos@email.com", age: 35 },
  { id: 3, name: "María Martínez", email: "maria@email.com", age: 22 }
];