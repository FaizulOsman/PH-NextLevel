// /* ======================== 3-9 (Conditional Types) ======================== */
// /* //////////////////// A type is dependent on another type //////////////////// */
// type a = string;
// type b = a extends string ? string : null;

// /* //////////////////// Nested conditional type //////////////////// */
// type a1 = string;
// type a2 = number;
// type a3 = boolean;

// type a4 = a1 extends string
//   ? string
//   : a2 extends number
//   ? number
//   : a3 extends boolean
//   ? boolean
//   : never;

// /* //////////////////// Check with condition //////////////////// */
// type Sheikh = {
//   wife1: string;
//   wife2: string;
// };
// type CheckProperty1<T> = T extends "wife1" ? true : false;
// type CheckWife1 = CheckProperty1<Sheikh>; // false

// /* /// Static \\\ */
// type CheckProperty2<T> = T extends { wife1: string } ? true : false;
// type CheckWife2 = CheckProperty2<Sheikh>; // true

// /* /// Dynamic \\\ */
// type CheckProperty3<T, K> = K extends keyof Sheikh ? true : false;
// type CheckWife3 = CheckProperty3<Sheikh, "wife3">; // true

// /* //////////////////// Remove From Union //////////////////// */
// type Friends = "Monica" | "Rachel" | "Pheobi";

// // type RemoveFriend<T> = T extends "Rachel" ? never : T;
// // type CurrentFriends = RemoveFriend<Friends>; // "Monica" | "Pheobi"

// type RemoveFriend<T, K> = T extends K ? never : T;
// type CurrentFriends = RemoveFriend<Friends, "Pheobi">; // "Monica" | "Rachel"
