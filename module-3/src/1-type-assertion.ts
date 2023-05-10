// /* ======================== 3-1 (Type Assertion) ======================== */
// /* ///// Type Assertion \\\\\ */
// let text: any;
// text = "Next level web development";
// (text as string).length;
// <string>text.length;
// /* <string> will work same like as string. It will not work in tsx so we will use always with as assertion */

// /* ///// Type Assertion \\\\\ */
// function kgToGram(param: string | number): string | number | undefined {
//   if (typeof param === "string") {
//     const value = parseFloat(param) * 1000;
//     return value;
//   }
//   if (typeof param === "number") {
//     const value = param * 1000;
//     return value;
//   }
// }
// const resultToBeString = kgToGram("1000") as string;
// const resultToBeNumber = <number>kgToGram(1000);

// /* ///// Type Assertion \\\\\ */
// type CustomErrorType = {
//   message: string;
// };

// try {
// } catch (err) {
//   console.log((err as CustomErrorType).message); // as assertion (always will use it)
//   console.log((<CustomErrorType>err).message); // (will not use it)
// }
