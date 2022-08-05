export default class Subject {
  constructor(private name: string) { };

  private validateName(name: string): string | Error {
    if (!(name.length > 3)) {
        throw new Error('the subject name must be longer than 3 characters')
    };
    
    return name;
  };

  get getName(): string  | void {
    if(this.validateName(this.name)) {
      return this.name
    }
  };
};

const mate = new Subject('Matemática');
const port = new Subject('Português');
const geo = new Subject('Geografia');