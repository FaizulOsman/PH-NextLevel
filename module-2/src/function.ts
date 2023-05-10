/* ======================== 2-5 (Function) ======================== */
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// add(2, 4);

// const addArrow = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// addArrow(2, 4);

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((elem: number) => elem * elem);

// const person: {
//   name: string;
//   balance: number;
//   addBalance(money: number): void;
// } = {
//   name: "Abul",
//   balance: 5,
//   addBalance(money: number) {
//     console.log(`My Total Balance is ${this.balance + money}`);
//   },
// };

/* ======================== 2-6 (Default Parameter, Spread, Rest, Destructing) ======================== */
/* ///// Default Parameters \\\\\ */
// function add(num1: number, num2: number = 10): number {
//   return num1 + num2;
// }
// add(2); // Always use default value for last parameter

/* ///// Spread \\\\\ */
// const myFriends = ["Chandler", "Joey", "Ross"];
// const newFriends = ["Monica", "Rachel", "Pheobe"];

// myFriends.push(...newFriends);
// console.log(myFriends);

/* ///// Rest Parameter \\\\\ */
// const greetFriends = (...friends: string[]): void => {
//   friends.forEach((friend) => console.log(`Hi ${friend}`));
// };
// greetFriends("Abul", "Babul", "cabul");

/* ///// Array and Object Destructure \\\\\ */
// const myFriends = ["Chandler", "Joey", "Ross"];

// const myBestFriend = {
//   fullName: "Abul Mia",
//   age: 24,
// };
// const [bestFriend] = myFriends; // Chandler
// const { fullName: myFullName } = myBestFriend; // Abul Mia

// console.log(myFullName);
