const n = 10;
const s: string = n.toString();
const s2: string = new String(n).valueOf();

const str = 'ts';
const num: number = parseInt(str);
const num1: number = Number(str);

const is1: boolean = !str;
const is2: boolean = !!str;

type animal = {
  type: 'animal',
  name: string,
  age: number,
  breed: string,
  family: string,
}

const isAnimal = (val: animal | pet): val is animal => 'family' in val;

const handle = (val: animal | pet) => {
  if (isAnimal(val)) {
    val
  } else {
    val
  }
}


type pet = {
  type: 'pet',
  name: string;
  home: string;
  owner: {
    firstName: string;
  }
}





