export interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

export interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export const isAdmin = (person: Person): person is Admin => {
  return person.type === 'admin';
}

export const isUser = (person: Person): person is User => {
  return person.type === 'user';
}