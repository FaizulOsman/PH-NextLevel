/* ======================== 2-8 (Union, Intersection, and Enum Type) ======================== */
/* ///// Union Type \\\\\ */
// type NoobDeveloper = {
//   name: string;
// };
// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: 2;
// };
// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//   name: "Abul Mia",
//   experience: 2,
//   // age: 25            // illegal
// };

/* ///// Intersection Type \\\\\ */
// type NoobDeveloper = {
//   name: string;
// };
// type JuniorDeveloper = NoobDeveloper & {
//   expertise: string;
//   experience: 2;
// };
// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//   name: "Abul Mia",
//   experience: 2,
// };

/* ///// Enum Type (Don't try this) \\\\\ */
// type NoobDeveloper = {
//   name: string;
// };

// type JuniorDeveloper = NoobDeveloper & {
//   expertise: string;
//   experience: 2;
// };

// enum Level {
//   junior = "junior",
//   mid = "mid",
//   senior = "senior",
// }

// type NextLevelDeveloper = JuniorDeveloper & {
//   leadershipExperience: number;
//   level: Level;
// };

// const developer: NextLevelDeveloper = {
//   name: "Kuddus Mia",
//   experience: 2,
//   expertise: "JavaScript",
//   leadershipExperience: 5,
//   level: Level.mid,
// };

/* ///// Without using Enum Type (Do this) \\\\\ */
// type NoobDeveloper = {
//   name: string;
// };
// type JuniorDeveloper = NoobDeveloper & {
//   expertise: string;
//   experience: 2;
// };

// type NextLevelDeveloper = JuniorDeveloper & {
//   leadershipExperience: number;
//   level: "junior" | "mid" | "senior";
// };

// const developer: NextLevelDeveloper = {
//   name: "Kuddus Mia",
//   experience: 2,
//   expertise: "JavaScript",
//   leadershipExperience: 5,
//   level: "mid",
// };
