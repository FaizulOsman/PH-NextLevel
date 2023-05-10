// /* ======================== 3-10 (Mapped Types) ======================== */
// /* //////////////////// Look up types //////////////////// */
// type AreaNumber = {
//   height: number;
//   width: number;
// };
// type A = AreaNumber["height"];
// type B = keyof AreaNumber; // "width" | "height"

// /* //////////////////// Read Only Types //////////////////// */
// type AreaReadOnly = {
//   height: number;
//   readonly width: number;
// };
// const rectangularArea: AreaReadOnly = {
//   height: 12,
//   width: 10,
// };
// rectangularArea.height = 11;
// // rectangularArea.width = 13;     // It will show error

// /* //////////////////// Mapping in Types //////////////////// */
// /* /// Static \\\ */
// type Area1 = {
//   [key in "width" | "height"]: number;
// };

/* /// Dynamic \\\ */
// type Area2 = {
//   width: string;
//   height: boolean;
// };
// type Area2Map = {
//   //   [key in keyof Area2]: number;    // number | number
//   [key in keyof Area2]: Area2[key]; // string | boolean
// };

// /* /// Generic with map \\\ */
// type Area3 = {
//   width: string;
//   height: boolean;
// };
// type Area3Map = {
//   [key in keyof Area3]: number;
// };
// type Area3Generic<T> = {
//   //   [key in keyof Area2]: Area2[key];
//   [key in keyof T]: T[key];
// };
// const area3Map: Area3Generic<Area3Map> = {
//   width: 10,
//   height: 12,
// };
