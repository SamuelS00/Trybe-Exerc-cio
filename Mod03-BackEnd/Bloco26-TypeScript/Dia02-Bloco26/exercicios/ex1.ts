enum Colors {
  BLACK='black',
  WHITE='whrite',
  RED='red',
  SILVER='silver',
};

enum Door {
  OPEN='open',
  CLOSE='close'
};

enum Turn {
  ON='On',
  OFF='Off'
};

export class Car {
  _brand: string;
  _color: Colors;
  _doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  };

  honk(b: number) {
    console.log(`The ${this._color} car honked ${this._doors} times `);
  };

  openTheDoor(d: Door) {
    console.log(`the car door is ${d}`); // d - can only be open or close.
  };

  closeTheDoor(d: Door) {
    console.log(`the car door is ${d}`);
  };
  
  turnOn(t: Turn) {
    console.log(`the car is ${t}`);
  };

  turnOff(t: Turn)  {
    console.log(`the car is ${t}`);
  };
};