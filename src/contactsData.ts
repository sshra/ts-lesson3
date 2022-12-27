import { Person } from "./contactsInterfaces";

export const persons: Person[] = [
  {
    type: 'admin',
    name: 'Иван Петров',
    age: 27,
    role: 'Administrator',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'музыкант',
  },
  {
    type: 'user',
    name: 'Захват Сараев',
    age: 21,
    group: 'Friends',
  },
  {
    type: 'user',
    name: 'Угон Камазов',
    age: 22,
    group: 'Family',
  },
  {
    type: 'user',
    name: 'Подрыв Алмазов',
    age: 23,
    group: 'Family',
  },
  {
    type: 'admin',
    name: 'Ben John',
    age: 45,
    role: 'Lead admin',
  }
];
