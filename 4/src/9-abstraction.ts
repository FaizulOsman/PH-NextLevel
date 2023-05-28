/* ======================== 4-9 (Abstraction) ======================== */
/* /////// Interface /////// */
// interface IVehicle {
//   name: string;
//   model: string;
// }
// const vehicle: IVehicle = {
//   name: "Car",
//   model: "2000",
// };

// /* /////// Abstract with Interface /////// */
// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
// }

// class Vehicle implements IVehicle {
//   constructor(public brand: string, public model: number) {}

//   startEngine(): void {
//     console.log("I am starting engine...");
//   }
//   stopEngine(): void {
//     console.log("I am stopping engine...");
//   }
//   test() {
//     console.log("This is for testing purpose.");
//   }
// }

// const vehicle1 = new Vehicle("Lamborghini", 720);

// /* /////// Abstract Class /////// */
// abstract class Vehicle {
//   constructor(public brand: string, public model: number) {}

//   abstract startEngine(): void;
//   abstract stopEngine(): void;
//   test() {
//     console.log("This is for testing purpose.");
//   }
// }

// class Car extends Vehicle {
//   startEngine(): void {
//     console.log("I am starting engine...");
//   }
//   stopEngine(): void {
//     console.log("I am stopping engine...");
//   }
// }

// const car1 = new Car("BMW", 1720);
// // car1.
