// /* ======================== 3-3 (Generic Type) ======================== */
// const rollNumbers: number[] = [1, 2, 3, 4, 5];
// const names: Array<string> = ["Abul", "Babul", "Cabul"];
// const userDetails: Array<{ name: string; age: number }> = [
//   {
//     name: "Abul Mia",
//     age: 52,
//   },
//   {
//     name: "Babul Mia",
//     age: 42,
//   },
// ];

// /* //////////////////// Generic Type //////////////////// */
// type GenericArray<T> = Array<T>;

// const genericNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
// const genericNames: GenericArray<string> = ["Abul", "Babul", "Cabul"];

// type NameAndAgeType = { name: string; age: number };
// const genericUserDetails: GenericArray<NameAndAgeType> = [
//   {
//     name: "Abul Mia",
//     age: 52,
//   },
//   {
//     name: "Babul Mia",
//     age: 42,
//   },
// ];

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
