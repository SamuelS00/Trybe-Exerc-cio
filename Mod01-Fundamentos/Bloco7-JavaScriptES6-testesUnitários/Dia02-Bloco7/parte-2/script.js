const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  const addlesson = (lesson, key, value) => {
    lesson[key] = value;
  };
  
  addlesson(lesson2, 'turno', 'manhã');

  const listKeys = (obj) => Object.keys(obj)

  const sizeObj = (obj) =>  Object.keys(obj).length;

  const listValues = (obj) =>  Object.values(obj);

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

  const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
      total += obj[array[i]].numeroEstudantes;
    }
    return total;
  };
  
  console.log(getNumberOfStudents(allLessons));

  const getValueByNumber = (obj,number) => Object.values(obj)[number];

  const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));
