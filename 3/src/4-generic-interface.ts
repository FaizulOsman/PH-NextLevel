// /* ======================== 3-4 (Generic Interface) ======================== */
// /* //////////////////// Generic Tuple with interface //////////////////// */
// type GenericTuple<X, Y> = [X, Y];

// interface RelationWithSalaryType {
//   name: string;
//   salary: number;
// }
// const relationWithSalary: GenericTuple<string, RelationWithSalaryType> = [
//   "Sokina",
//   { name: "Abul", salary: 1000000 },
// ];

// /* //////////////////// Generic Tuple with interface //////////////////// */
// interface CruseInterface<T> {
//   name: string;
//   husband: T;
// }
// const crush1: CruseInterface<boolean> = {
//   name: "Jorina",
//   husband: true,
// };
// const crush2: CruseInterface<object> = {
//   name: "Jorina",
//   husband: {
//     name: "Abul",
//     age: 52,
//   },
// };
// const crush3: CruseInterface<{ name: string; age: number }> = {
//   name: "Jorina",
//   husband: {
//     name: "Abul",
//     age: 52,
//   },
// };

// /* //////////////////// Generic interface //////////////////// */
// interface CruseInterface<T, U = null> {
//   name: string;
//   husband: T;
//   wife?: U;
// }
// const crush3: CruseInterface<object, string> = {
//   name: "Jorina",
//   husband: {
//     name: "Abul",
//     age: 52,
//   },
//   wife: "Sokina",
// };
