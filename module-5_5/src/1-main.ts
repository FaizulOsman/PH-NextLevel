import AllMethods from "./2-reexport";

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};
console.log(add(2, 3, 5));
console.log(AllMethods.Methods.add(5, 7));
console.log(AllMethods.Methods.multiply(5, 7));

console.log(AllMethods.sub(5, 2));
