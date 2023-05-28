/* ////// Problem 1 \\\\\ */
// function problemOne(parameter1: string, parameter2: number = 3): void {
//   console.log(parameter1.repeat(parameter2));
// }
// problemOne("Hello", 5);

/* ////// Problem 2 \\\\\ */
// interface Person {
//   name: string;
//   age: number;
// }
// const persons: Person[] = [
//   { name: "Abul", age: 18 },
//   { name: "Babul", age: 30 },
//   { name: "Cabul", age: 15 },
//   { name: "Dabul", age: 4 },
//   { name: "Ebul", age: 40 },
// ];

// function myFunction(people: Person[]) {
//   return people.filter((p) => p.age >= 18);
// }
// console.log(myFunction(persons));

/* ////// Problem 3 \\\\\ */
/* Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.*/
// const arrayOfStr: string[] = ["Abul", "Babul", "Cabul", "Dabul", "Ebul"];
// function GenericFunction2<T>(...param: T[]): T[] {
//   return param.reverse();
// }
// console.log(GenericFunction2(...arrayOfStr));

/* ////// Problem 5 \\\\\ */
/* Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message. */
// function StringSecurityGuard(param: unknown) {
//   if (typeof param === "string") {
//     console.log(param);
//   } else {
//     console.log("Entry not allowed. Expected a string as a parameter.");
//   }
// }
// StringSecurityGuard("string");
// StringSecurityGuard(5);

/* ////// Problem 4 \\\\\ */
/* Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.
Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.
*/
// class Person {
//   constructor(private name: string, private age: number) {}

//   public getDetails(): string {
//     return `Person name is ${this.name} and age is ${this.age}`;
//   }
// }

// /* Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties. */
// class Student extends Person {
//   constructor(name: string, age: number, private grade: string) {
//     super(name, age);
//   }

//   getGrade(): string {
//     return `Grade is ${this.grade}`;
//   }
// }

// const person1 = new Person("Abul", 52);
// console.log(person1.getDetails());

// const student1 = new Student("Babul", 25, "A+");
// console.log(student1.getGrade());
