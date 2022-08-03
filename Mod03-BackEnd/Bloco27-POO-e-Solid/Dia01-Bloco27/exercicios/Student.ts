type Grades = {

}

class Student {
  enrollment: string;
  name: string;
  test_grade_1: number;
  test_grade_2: number;
  test_grade_3: number;
  test_grade_4: number;
  test_homework_1: number;
  test_homework_2: number;

  constructor(
    enrollment: string, 
    name: string,
    test_grade_1: number,
    test_grade_2: number,
    test_grade_3: number,
    test_grade_4: number,
    test_homework_1: number,
    test_homework_2: number,
  ) {
    this.enrollment = enrollment;
    this.name = name;
    this.test_grade_1 = test_grade_1
    this.test_grade_2 = test_grade_2
    this.test_grade_3 = test_grade_3
    this.test_grade_4 = test_grade_4
    this.test_homework_1 = test_homework_1;
    this.test_homework_2 = test_homework_2;
  };

  sumGrades(): number {
    return (
     this.test_grade_1 
     + this.test_grade_2 
     + this.test_grade_3 
     + this.test_grade_4 
     + this.test_homework_1 
     + this.test_homework_2
    )
  };

  gradeAverage(){
    return this.sumGrades() / 6
  };
};

const student1 = new Student('Matematica', 'Edgar', 3, 3, 3, 3, 3, 3);

console.log(student1.sumGrades());