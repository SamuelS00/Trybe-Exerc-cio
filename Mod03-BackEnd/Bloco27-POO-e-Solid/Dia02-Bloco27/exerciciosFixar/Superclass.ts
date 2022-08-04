class Superclass {  
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  };

  public sayHello() {
    console.log('Olá, mundo!!!')
  };
};


class Subclass extends Superclass {
  constructor() {
    super() 

    this.isSuper = false;
  }
}

function myFunc(superclass: Superclass) {
  return superclass.isSuper ? 'Super' : 'Sub!';
}

console.log(myFunc(new Superclass()));
console.log(myFunc(new Subclass()));



