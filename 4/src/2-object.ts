/* ======================== 4-2 (How to create Class, Object, Parameter Properties) ======================== */
/* //////////////////// Create Method (makeSound()) //////////////////// */
// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`The ${this.name} says ${this.sound}`);
//   }
// }
// const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
// dog.makeSound();

/* //////////////////// Parameter Properties //////////////////// */
// class Animal {
//   constructor(
//     public name: string,
//     public species: string,
//     public sound: string
//   ) {}

//   makeSound() {
//     console.log(`The ${this.name} says ${this.sound}`);
//   }
// }
// const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
// dog.makeSound();
