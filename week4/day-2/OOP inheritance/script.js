
class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}


class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }

    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }
}

class Teacher extends Person{
    constructor(name, startYear, salary){
        super(name, startYear);
        this.salary = salary;
        this.courses = {};
    }

    giveGrade(student, courseName, grade){
       student.receiveGrade(courseName, grade);
    }

    addCourse(course){
        if(this.courses[course]){
            return this.courses[course] += 1;
        }
        this.courses[course] = 1;
    }
}


// const s1 = new Student("Ronda", 2017)
// console.log(s1.name) //prints "Ronda"

// s1.addCourse("Algebra II")
// console.log(s1.courses) //prints ["Algebra II"]







// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]

// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"﻿









// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)
// const p1 = new Person("Anon", 1999)

// console.log(s1 instanceof Person); // true
// console.log(t1 instanceof Teacher); // true
// console.log(t1 instanceof Person ); // true
// console.log(s1 instanceof Teacher); // false
// console.log(t1 instanceof Student); // false
// console.log(p1 instanceof Person ); // true
// console.log(p1 instanceof Student );// false
// console.log(p1 instanceof Teacher); // false

//s1 instanceof p1  //error








// const t1 = new Teacher("Cassandra", 2002, 40000);
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// t1.addCourse("Pathology");
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}


const t1 = new Teacher
t1.name = "Aya";
console.log(t1.name);
