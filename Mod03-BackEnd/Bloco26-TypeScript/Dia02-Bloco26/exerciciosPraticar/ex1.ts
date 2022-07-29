type bird = {
  species: string;
  color: string[];
  length: number;
};

type Sum = (x: number, y: number) => number;

type Address = {
  street: string;
  zipCode: number;
  city: string;
  houseNumber: number;
}

const dove = { 
  species: 'columba livia',
  colors: ['write', 'brown', 'spotted', 'grayish'],
  length: 15
}

function printBird(dove: bird) {
  console.log(
    `the ${dove.species} species has the colors ${dove.color} and the size of ${dove.length}cm`
  );
};