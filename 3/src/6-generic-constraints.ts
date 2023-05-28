// /* ======================== 3-6 (Generic Constraints) ======================== */
// /* //////////////////// Generic Constraints //////////////////// */
// /* /// Best Practice \\\ */
// const crush = "Jorina";
// type MyInfoType = {
//   name: string;
//   age: number;
//   salary: number;
// };
// const myInfo: MyInfoType = {
//   name: "Abul",
//   age: 52,
//   salary: 10000000,
// };
// interface IMandatory {
//   name: string;
//   age: number;
// }
// const relation = <T extends IMandatory>(myInfo: T) => {
//   const result = { ...myInfo, crush };
//   return result;
// };
// const result = relation<MyInfoType>(myInfo);
// // result.       // ctrl + space here
