interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string
};

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `${ myParam + this.myNumber}`; 
  }
};

const myclass = new MyClass(2);

console.log(myclass.myFunc(20));