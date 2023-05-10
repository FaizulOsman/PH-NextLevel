// /* ======================== 4-5 (Access Modifiers) ======================== */
// /* /////// Access Modifiers /////// */
// class BankAccount {
//   id: number;
//   name: string;
//   private _balance: number; // You can't change it
//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }
//   getBalance() {
//     console.log(`My current balance is ${this._balance}`);
//   }
//   addDeposit(amount: number) {
//     this._balance += amount;
//   }
// }

// /* /////// Access Modifiers /////// */
// class StudentAccount extends BankAccount {
//   test() {
//     // this.
//   }
// }

// const myAccount = new BankAccount(123, "Abul", 15);
// console.log(myAccount);
