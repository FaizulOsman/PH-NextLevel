// interface Person {
//   name: string;
//   email?: string;
//   contact: string;
// }

// /* Pick (It will TAKE specific datatype) */
// type Email = Pick<Person, "email">;

// /* Omit (It will REMOVE specific datatype) */
// type Contact = Omit<Person, "email" | "name">;

// /* Partial (It will make everything OPTIONAL) */
// type Optional = Partial<Person>;

// /* Require (It will make everything REQUIRED) */
// type RequireEverything = Required<Person>;

// /* Readonly (It will make value as READONLY) */
// const person: Readonly<Person> = {
//   name: "Abul",
//   email: "abc@gmail.com",
//   contact: "123456789",
// };
// // person.contact = "sdf" // You cannot change the value (Readonly)

// /* ================ Utility Signature ================ */
// type myObj = {
//   a: string;
//   b: string;
//   c: string;
// };

// /* Using index signature */
// type myObj = {
//   [key: string]: string;
// };

// /* Using Record Signature */
// type myObj = Record<string, string>;

// /* Using Record Signature specific */
// type myObj = Record<"a" | "b" | "c", string>;

// const obj: myObj = {
//   a: "1",
//   b: "2",
//   c: "3",
// };
