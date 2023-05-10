/* ======================== 3-2 (Interface) ======================== */
// /* //////////////////// Type alias and interface works same  //////////////////// */
// type User = {
//   name: string;
//   age: number;
// };
// interface IUser {
//   name: string;
//   age: number;
// }

// /* extends in type alias */
// type extendUser = User & {
//   role: string;
// };
// const userWithTypeAlias: extendUser = {
//   name: "Abul Miya",
//   age: 52,
//   role: "admin",
// };

// /* extends in interface */
// interface extendIUser extends IUser {
//   role: string;
// }
// const userWithExtend: extendIUser = {
//   name: "Abul Miya",
//   age: 52,
//   role: "admin",
// };
// /* We can always use interface or type alias for objects, But only for primitive types will always use interface, coz primitive type is build in based on interface */

// /* //////////////////// type alias and interface for functions //////////////////// */
// type addNumbersType = (num1: number, num2: number) => number;

// interface IAddNumbers {
//   (num1: number, num2: number): number;
// }

// const addNumbers: addNumbersType = (num1, num2) => num1 + num2;
// /* But we will always use type alias for functions (coz it is simple) */

// /* //////////////////// type alias and interface for functions //////////////////// */
// type numbersArrayType = number[];
// interface INumbersArray {
//   [index: number]: number;
// }
// const numbersArray: INumbersArray = [1, 2, 3, 4, 5];
// /* But we will always use type alias for array (coz it is simple) */
