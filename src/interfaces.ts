interface Animal {
  name: string,
  age: number
}

interface Genius {
  family: string,
  breed: string
}

interface AnimalWithGenius extends Animal, Genius {
  id: number,
}

const cat: AnimalWithGenius = {
  id: 24,
  name: 'Stacy',
  age: 6,
  family: 'felicia',
  breed: 'Syberian'
}

console.log(cat);