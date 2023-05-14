// normal function
function addNumbers(a: number, b: number): string {
  return `Sum is: ${a + b}`;
}
console.log(addNumbers(3, 2));

// arrow function
const addNumbersArrow = (a: number, b: number): string => {
  return `Sum is: ${a + b}`;
};
console.log(addNumbersArrow(3, 2));
