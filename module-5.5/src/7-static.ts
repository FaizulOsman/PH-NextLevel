// /* ======================== 4-7 (Static in Class) ======================== */
// /* /////// Dynamic Property /////// */
// class Counter {
//   counter: number;
//   constructor(counter: number) {
//     this.counter = counter;
//   }
//   increment(): number {
//     return (this.counter += 1);
//   }
// }
// const instance1 = new Counter(10);
// console.log(instance1.increment());

// /* /////// Static Property /////// */
// class Counter {
//   static counter: number = 10;

//   static increment(): number {
//     return (Counter.counter += 1);
//   }
// }
// console.log(Counter.increment());
