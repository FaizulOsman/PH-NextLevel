// /* ======================== 4-3 (Inheritance) ======================== */
// /* /////// Declare a Parent class /////// */
// class Parent {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours}`;
//   }
// }

// /* /////// Access the Parent class /////// */
// class Student extends Parent {
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }
// }
// const student = new Student("Abul", 52, "Kosu khet");
// // student.

// /* /////// Access the Parent class /////// */
// class Teacher extends Parent {
//   designation: string;
//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }

//   takeClasses(numberOfClass: number): string {
//     return `This ${this.name} will take ${numberOfClass} class`;
//   }
// }
// const teacher = new Teacher("Abul", 52, "Kosu khet", "Professor");
// // teacher.
