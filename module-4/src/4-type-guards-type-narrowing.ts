// /* ======================== 4-4 (Type Guards / Type Narrowing) ======================== */
// /* /////// keyof guard /////// */
// type StrOrNum = string | number;
// function add(num1: StrOrNum, num2: StrOrNum): StrOrNum {
//   if (typeof num1 == "number" && typeof num2 == "number") {
//     return num1 + num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }
// add(1, 2);
// add("1", 2);

// /* /////// in guard /////// */
// type NormalUserType = {
//   name: string;
// };
// type AdminUserType = {
//   name: string;
//   role: "admin";
// };

// function getUser(user: NormalUserType | AdminUserType): string {
//   if ("role" in user) {
//     return `My role is ${user.role}`;
//   } else {
//     return `My role is user`;
//   }
// }

// const normalUser1: NormalUserType = { name: "Abul Mia" };
// const normalUser2: AdminUserType = { name: "Abul Mia", role: "admin" };
// console.log(getUser(normalUser1));
// console.log(getUser(normalUser2));

// /* /////// instanceof guard /////// */
// class Animal {
//   name: string;
//   species: string;
//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }
//   makeSound() {
//     console.log(`I am making sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log(`I am barking`);
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMeaw() {
//     console.log(`I am meawing`);
//   }
// }

// function isDog(animal: Animal): animal is Dog{
//     return animal instanceof Dog
// }
// function isCat(animal: Animal): animal is Cat{
//     return animal instanceof Cat
// }

// function getAnimal(animal: Animal) {
//   if (isDog(animal)) {
//     animal.makeBark();
//   } else if (isCat(animal)) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }

// const animal1 = new Dog("German Shepard", "Dog");
// const animal2 = new Cat("Tin tin", "Cat");

// getAnimal(animal1);
