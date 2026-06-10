export interface User {
  id: number;
  nombre: string;
  email: string;
  edad: number;
}

export const users: User[] = [
  { id: 1, nombre: "Ana García", email: "ana@email.com", edad: 28 },
  { id: 2, nombre: "Carlos López", email: "carlos@email.com", edad: 35 },
  { id: 3, nombre: "María Martínez", email: "maria@email.com", edad: 22 }
];