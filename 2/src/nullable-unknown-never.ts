/* ======================== 2-8 (Null, Unknown and Never Types) ======================== */
/* ///// null Type \\\\\ */
// const searchName = (value: string) => {
//   if (value === null) {
//     console.log("There is nothing to search");
//   } else {
//     console.log("Searching");
//   }
// };
// /* if i uncomment "strictNullChecks": false from tsconfig.json it will not show error */
// searchName(null);

/* ///// unknown Type \\\\\ */
// const getMyCaraSpeed = (speed: unknown) => {
//   if (typeof speed === "number") {
//     const convertedSpeed = (speed * 1000) / 5280;
//     console.log(`Car speed is ${convertedSpeed} mile/hr`);
//   }
//   if (typeof speed === "string") {
//     const speedValue = parseFloat(speed.split(" ")[0]);
//     const convertedSpeed = (speedValue * 1000) / 5280;
//     console.log(`Car speed is ${convertedSpeed} mile/hr`);
//   } else {
//     console.log("Your input is wrong");
//   }
// };

// getMyCaraSpeed(15);
// getMyCaraSpeed("15 km/hr");
// getMyCaraSpeed(null);

/* ///// never Type (Never type will never return anything) \\\\\ */
// function throwError(message: string): never {
//   throw new Error(message);
// }
// throwError("Never type will never return anything");
