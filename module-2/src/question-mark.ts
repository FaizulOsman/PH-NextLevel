/* ======================== 2-10 (Ternary Operator , Nullish Coeslancing Operator) ======================== */
/* ///// Ternary Operator \\\\\ */
// const age: number = 15;
// const isAdult = age > 18 ? "Yes" : "No";
// console.log(isAdult);

/* ///// nullish coalescing operator (It will set default value based on Null and Undefined) \\\\\ */
// const isAuthenticatedUser = null;
// const userName = isAuthenticatedUser ?? "Guest";
// console.log(userName);

/* ///// nullish coalescing operator \\\\\ */
// const people: {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     road: string;
//     home?: string;
//   };
// } = {
//   name: "Babul Mia",
//   age: 52,
//   address: {
//     city: "No City",
//     road: "No Road",
//   },
// };
// const home = people?.address?.home ?? "No Home Found";
// console.log(home);
function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
