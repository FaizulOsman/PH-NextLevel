// /* ======================== 3-7 (Generic Constraints Using Key Of Part1) ======================== */
// /* //////////////////// Generic Constraints Using Key Of //////////////////// */
// type PersonType = {
//   name: string;
//   age: number;
//   address: string;
// };
// type newType = "name" | "age" | "address"; // Manually
// type newTypeUsingKeyOf = keyof PersonType; // Best Practice
// // const a: newType = ""; // ctrl + space here
// // const b: newTypeUsingKeyOf = ""; // ctrl + space here

// /* //////////////////// Find value using key //////////////////// */
// // const a = {name: "Abul", age: 52}
// // a["age"]

// function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
//   obj[key];
// } // here Y = "name" | "age"
// const property = getProperty({ name: "Abul", age: 52 }, "age");
