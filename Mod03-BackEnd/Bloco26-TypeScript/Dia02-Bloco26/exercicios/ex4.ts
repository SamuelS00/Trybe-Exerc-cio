import { Pizza } from './ex3';

interface regularPizza extends Pizza {
  flavor: 'Pepperoni' |  'Margherita' | 'Chicken';
  slices: 4 | 6 | 8;
};

interface vegetarianPizza extends Pizza {
  flavor: 'Margherita' |  'Heart of palm' | 'Mushroom';
  slices: 4 | 6 | 8;
};

interface sugaryPizza extends Pizza {
  flavor: 'Nutella' | 'Guava with Cheese' | 'Marshmallow';
  slices: 4
};

///////////////////////////////////////////

const regularPizza1: regularPizza = {
  flavor: 'Pepperoni',
  slices: 4
};

const regularPizza2: regularPizza = {
  flavor: 'Chicken',
  slices: 4
};

const regularPizza3: regularPizza = {
  flavor: 'Margherita',
  slices: 6
};
  
//////////////////////////////////////////////

const vegetarianPizza1: vegetarianPizza = {
  flavor: 'Heart of palm',
  slices: 8
};

const vegetarianPizza2: vegetarianPizza = {
  flavor: 'Margherita',
  slices: 6
};

///////////////////////////////////////////////

const sugaryPizza1: sugaryPizza = {
  flavor: 'Nutella',
  slices: 4
};

///////////////////////////////////////////////

