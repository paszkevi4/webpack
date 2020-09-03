/*-----1. Повернення списку предметів-----*/
export const getSubjects = (student) => {
  let subjects = [];
  subjects = Object.keys(student.subjects);
  return subjects.join(' ');
};

/*-----2. Середня оцінка-----*/
export const getAverageMark = (student) => {
  const { subjects } = student;
  const temp = [];
  for (let sub in subjects) {
    temp.push(getAverage(...subjects[sub]));
  }
  return getAverage(...temp).toFixed(2);
};

export const getAverage = (...numbers) => {
  let sum = 0;
  numbers.map((el) => {
    sum += el;
  });
  return sum / numbers.length;
};

/*-----3. Повернення загальної інформації про студента-----*/
export const getStudentInfo = (student) => {
  const temp = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };
  return temp;
};

/*-----4. Iмена студентів у алфавітному порядку-----*/
export const getStudentsNames = (students) => {
  return students.map((el) => el.name).sort();
};

/*-----5. Повернути iмя найкращого студента-----*/
export const getBestStudent = (students) => {
  const newArr = JSON.parse(JSON.stringify(students));
  newArr.map((stud) => {
    stud.average = getAverageMark(stud);
  });
  let max = newArr.reduce((prev, curr) => {
    if (prev.average > curr.average) {
      return prev;
    }
    return curr;
  });
  return max.name;
};

/*-----6. Порахувати букви-----*/
export const calculateWordLetters = (word) => {
  const temp = {};
  [...word].forEach((el) => {
    temp[el] ? (temp[el] += 1) : (temp[el] = 1);
  });
  return temp;
};