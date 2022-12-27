import { isAdmin, Person } from "./contactsInterfaces";
import { persons } from "./contactsData";

const logPerson = (person: Person) => {
  let information: string;
  if (isAdmin(person)) {
    information = 'ADMIN role: ' + person.role;
  } else {
    information = 'USER group: ' + person.group;
  }
  console.log(`${information} | ${person.name}, ${person.age}`);
};

persons.forEach(logPerson);