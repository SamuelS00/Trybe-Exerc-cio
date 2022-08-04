import Person from "./Person";

class Student extends Person {
   private enrollment: string;
   private examsGrades: number[] = [];
   private worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  };

  generateEnrollment(): string {
    return `AH-27-MAT${Math.random() * (1000 - 1) + 1}`
  }

  validationGrades(grades: number[]): Error | number[] {
    if(grades.length >= 4) {
        throw new Error('it is not allowed to register more than 4 notes');
    };

    return grades;
  }

  get sumGrades(): number {
    if(this.examsGrades) {
      return this.examsGrades.reduce((prev, acc) => prev + acc, 0);
    }

    return 0;
  }

  get sumAverageGrade(): number {
    if(this.examsGrades) {
      return (this.sumGrades / this.examsGrades.length);
    }

    return 0;
  }

  set setExamsGrades(grades: number[]) {
    if(this.validationGrades(grades)) {
      this.examsGrades = grades;
    }
  }

  get getEnrollment(): string {
    return this.enrollment;
  };
};

const studentLeonardo = new Student('Leonarno', new Date('2000/10/10'));

studentLeonardo.setExamsGrades = [3, 3, 3, 3];
console.log('sum grades: ', studentLeonardo.sumGrades);
console.log('sum Avarage grades: ', studentLeonardo.sumAverageGrade);