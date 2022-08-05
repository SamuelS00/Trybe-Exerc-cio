import Person from "./Person";
import Employee from './Employee';
import Subject from './Subject'

class Teacher extends Person implements Employee {
  private _registration = String();
  private salary: number;
  private admissionDate: Date;
  private subject: Subject;

  constructor(
    name:string,
    birthDate: Date,
    salary: number,
    admissionDate: Date,
    subject: Subject
  ) {
    super(name, birthDate);
    this.registration = this.generateRegistration(16);
    this.salary = salary;
    this.admissionDate = admissionDate;
    this.subject = subject;
  }

  generateRegistration(n: number): string {
    let regis = '';
    do {
      regis += Math.random().toString(36).substring(2); 
    } while(regis.length >= 16) {
      console.log(regis);
      return `${regis}`;
    }
  }

  validateRegistration(): Error | string {
    if(this._registration.length < 16) {
        throw new Error('the registration cannot be shorter than 16 characters')
    }

    return `${this._registration}`
  }

  get getSubject(): Subject {
    return this.subject;
  };
};