// /* ======================== 4-8 (Polymorphism) ======================== */
// /* /////// Polymorphism /////// */
// class Person {
//   takeNap(): void {
//     console.log(`I am sleeping 10 hours per day`);
//   }
// }
// class Developer extends Person {
//   takeNap(): void {
//     console.log(`I am sleeping 5 hours per day`);
//   }
// }

// function getNap(param: Person) {
//   param.takeNap();
// }

// const person1 = new Person();
// const person2 = new Developer();

// getNap(person1);
// person2.takeNap();

// /* /////// Polymorphism (area of shape) /////// */
// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }
// // area => pi * r * r
// class Circle extends Shape {
//   radius: number;
//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }
//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }
// // area => h * w
// class Rectangle extends Shape {
//   height: number;
//   width: number;
//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }
//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// function getAreaOfShape(param: Shape) {
//   console.log(param.getArea());
// }

// getAreaOfShape(new Rectangle(3, 4));
// getAreaOfShape(new Circle(1));
