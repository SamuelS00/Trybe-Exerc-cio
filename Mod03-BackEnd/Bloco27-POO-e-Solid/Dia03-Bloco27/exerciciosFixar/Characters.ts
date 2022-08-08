abstract class Characters {
  abstract talk(): void;
  abstract specialMove(): void;
};

class MeleeCharactes extends Characters {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk(): void {
    console.log(`the ${this._name} is walking`);
  };

  specialMove(): void {
    console.log(`the ${this._specialMove} is using his special power`);
  };
};

class LongRangeCharacter extends Characters {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }
    
  talk(): void {
    console.log(`the ${this._name} character is walking`)   
  };

  specialMove(): void {
    console.log(`the ${this._specialMove} character is using his special power`);
  };
};

function printCharacters(character: Characters) {
  character.talk();
  character.specialMove()
};

const character1 = new MeleeCharactes('Rafael Veiga', 'Long Shoot');
const character2 = new LongRangeCharacter('Rony Rústico', 'Bike');

printCharacters(character2);
printCharacters(character1);
