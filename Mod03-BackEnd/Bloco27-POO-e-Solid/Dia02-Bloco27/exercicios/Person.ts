export default class Person {
  public name: string;
  public birthDate: Date;

  constructor(name: string, birthDate: Date) { 
    this.name = name;
    this.birthDate = birthDate;
  };

  private validationName(name: string): Error | string {
    if (name.length < 3) {
      throw new Error('name must be a string and longer than 3 characters');
    }

    return this.name;
  };

  private validationBirthDate(date: Date): Error | Date {
    const year = date.getFullYear();
    const currentYear = 2022;

    if (year > currentYear) throw new Error('dates from 2022 are not allowed');
    if (currentYear - year > 120) throw new Error('the age limit is 120 years old');

    return this.birthDate;
  };

  get getName(): Error | string {
    return this.validationName(this.name);
  };

  get getBirthDate(): Error | Date {
    return this.validationBirthDate(this.birthDate);
  };
}

const pessoa = new Person('josé', new Date(2000, 12, 11));

console.log(pessoa.getName);
console.log(pessoa.getBirthDate);