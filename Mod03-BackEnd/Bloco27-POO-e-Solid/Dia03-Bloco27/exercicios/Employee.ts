import Person from './Person';

interface Enrollable {
    enrollment: string,
    generateEnrollment(): string; 
};

class Student extends Person implements Enrollable {
    enrollment: string;
    
    constructor(
        name: string, 
        birthDate: Date,
        public examsGrades: number[], 
        public worksGrades: number[]) 
    {
        super(name, birthDate);
        this.enrollment = this.generateEnrollment();
    };

    validateEnrollment(enrollment: string) {
       if(enrollment.length < 16) throw new Error('Enrollment lenth is less than 16');
    };

    validationGrades(grades: number[]): Error | number[] {
        if(grades.length >= 4) {
            throw new Error('it is not allowed to register more than 4 notes');
        };

        return grades;
    };

    get sumGrades(): number {
        if(this.examsGrades) {
        return this.examsGrades.reduce((prev, acc) => prev + acc, 0);
        }

        return 0;
    };

    get sumAverageGrade(): number {
        if(this.examsGrades) {
        return (this.sumGrades / this.examsGrades.length);
        }

        return 0;
    };

    set setExamsGrades(grades: number[]) {
        if(this.validationGrades(grades)) {
        this.examsGrades = grades;
        }
    };

    generateEnrollment(): string {
        let enroll = '';
        do {
          enroll += Math.random().toString(36).substring(2); 
        } while(enroll.length <= 20) {
          return `MAT-${enroll}`;
        }
    };

    get getEnrollment() {
        return this.validateEnrollment(this.enrollment);
    };
};

class Employee extends Person implements Enrollable {
    enrollment: string;

    constructor(
        name: string, 
        birthDate: Date,
        public salary: number, 
        public admissionDate: Date) 
    {
        super(name, birthDate);
        this.enrollment = this.generateEnrollment();
        if (this.validateAdimissionDate(this.admissionDate)) {
          this.admissionDate = admissionDate;
        }
    }

    validateAdimissionDate(admissionDate: Date): Boolean {
        if (admissionDate.getFullYear()> 2022) return false;

        return true;
    };

    generateEnrollment(): string {
        let enroll = '';
        do {
          enroll += Math.random().toString(36).substring(2); 
        } while(enroll.length <= 20) {
          return `MAT-${enroll}`;
        }
    };

    validateEnrollment(enrollment: string) {
        if(enrollment.length < 16) throw new Error('Enrollment lenth is less than 16');
    };
};

class Teacher extends Person implements Enrollable {
    enrollment: string;

    constructor(
        name: string, 
        birthDate: Date,
        public salary: number, 
        public subject: string) 
    {
        super(name, birthDate);
        if(this.validateSalary(this.salary)) {
            this.salary = salary;
        }
        this.enrollment = this.generateEnrollment();
    };

    generateEnrollment(): string {
        let enroll = '';
        do {
          enroll += Math.random().toString(36).substring(2); 
        } while(enroll.length <= 20) {
          return `MAT-${enroll}`;
        }
    };

    validateSalary(salary: number): Boolean {
        if(salary > 0) {
            return true
        }

        return true;
    }
}