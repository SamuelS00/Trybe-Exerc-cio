class Dog {
  _name: string;
  _breed: string;
  _age: number;
  
  constructor(name: string, breed: string, age: number) {
    this._name = name;
    this._breed = breed;
    this._age = age;
  };

  playingWith(toy: string): string {
    return `the dog ${this._name} is playing with the ${toy}`
  };
};

class House {
  _color: string;
  _street: string;
  _owners: string;
  _size: number;

  constructor(color: string, street: string, owners: string, size: number) {
    this._color = color;
    this._street = street;
    this._owners = owners;
    this._size = size;
  };
}
