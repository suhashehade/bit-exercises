class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }

  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(name, startYear);
    this.salary = salary;
    this.courses = {};
  }

  giveGrade(student, courseName, grade) {
    student.receiveGrade(courseName, grade);
  }

  addCourse(course) {
    if (this.courses[course]) {
      return (this.courses[course] += 1);
    }
    this.courses[course] = 1;
  }
}

class Principal extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.teachers = [];
    this.students = [];
  }

  hireTeacher(teacher) {
    this.teachers.push(teacher);
    console.log(this.name + " just hired " + teacher.name);
  }

  recruitStudent(student) {
    this.students.push(student);
  }

  expelStudent(student) {
    let studentName = student.name;
    let studentStartYear = student.startYear;
    let studentToBeRemoved = this.students.find((s) => s.name == studentName);
    let indexOfStudent = this.students.indexOf(studentToBeRemoved);
    this.students.splice(indexOfStudent, 1);
  }

  transferStudent(student, principal) {
    this.expelStudent(student);
    principal.recruitStudent(student);
  }
}

const p1 = new Principal("Martin", 1991);
const p2 = new Principal("Martha", 1990);

const t1 = new Teacher("Cassandra", 2002, 40000);
const t2 = new Teacher("Kevin", 2006, 30000);

const s1 = new Student("Ronda", 2017);
const s2 = new Student("Byron", 2016);




p1.hireTeacher(t1); 
console.log(p1.teachers); 

p1.hireTeacher(t2); 
console.log(p1.teachers); 


p1.recruitStudent(s1);
p1.recruitStudent(s2);
console.log(p1.students); 


p1.expelStudent(s1);
console.log(p1.students); 


p1.transferStudent(s2, p2);
console.log(p1.students); 
console.log(p2.students); 
