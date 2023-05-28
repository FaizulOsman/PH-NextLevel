// /* ======================== 3-5 (Generic Function) ======================== */
// /* //////////////////// Generic Function //////////////////// */

// /* /// Step 1 \\\*/
// const createArray = (param: string): string[] => {
//   return [param];
// };
// /* /// Step 2 \\\*/
// const createArray1 = <T>(param: T): T[] => {
//   return [param];
// };
// const result = createArray1<string>("Bangladesh");

/* /// Step 3 \\\*/
// const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//   return [param1, param2];
// };
// const result2 = createArray2<string, number>("Bangladesh", 1971);

/* //////////////////// Spread Operator //////////////////// */
// const crush = "Jorina"
// const myInfo = {
//     name: "Abul",
//     age: 52,
//     salary: 10000000
// }
// const relation = {...myInfo, crush}

/* /// Testing \\\ */
// const crush = "Jorina";
// const myInfo = {
//   name: "Abul",
//   age: 52,
//   salary: 10000000,
// };
// const relation = (myInfo: object) => {
//   const result = { ...myInfo, crush };
//   return result;
// };
// const result = relation(myInfo);
// result.

/* /// Best Practice \\\ */
// const crush = "Jorina";
// const myInfo = {
//   name: "Abul",
//   age: 52,
//   salary: 10000000,
// };
// const relation = <T>(myInfo: T) => {
//   const result = { ...myInfo, crush };
//   return result;
// };
// const result = relation(myInfo);
// result.
