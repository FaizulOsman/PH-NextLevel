// /* ======================== 4-6 (Getter Setter) ======================== */
// /* /////// Getter Setter /////// */
// class BankAccount {
//   name: string;
//   private _balance: number; // You can't change it
//   constructor(name: string, balance: number) {
//     this.name = name;
//     this._balance = balance;
//   }
//   /* /////// Getter /////// */
//   get balance(): number {
//     return this._balance;
//   }

//   /* /////// Setter /////// */
//   set deposit(amount: number) {
//     this._balance += amount;
//   }
// }

// const myAccount = new BankAccount("Abul", 15);
// /* /////// Getter /////// */
// console.log(myAccount.balance);
// /* /////// Setter /////// */
// myAccount.deposit = 11;
// console.log(myAccount.balance);
