// /* ======================== 4-10 (Encapsulation) ======================== */
// /* /////// Encapsulation /////// */
// class BankAccount {
//   name: string;
//   private _balance: number; // You can't get access of it

//   constructor(name: string, balance: number) {
//     this.name = name;
//     this._balance = balance;
//   }

//   private getTestBalance(): number {
//     return this._balance;
//   }

//   get Test(): number {
//     return this.getTestBalance();
//   }
// }

// class StudentAccount extends BankAccount {
//   test() {
//     // this.
//   }
// }
