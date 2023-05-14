// Spread Operator
const heroArr1: string[] = ["Abul", "Babul", "Cabul"];
const heroArr2: string[] = ["Dabul", "Ebul", "Febul"];

heroArr1.push(...heroArr2);
console.log(heroArr1);

// Rest Operator
const heroScore = (...score: number[]) => {
  let sum: number = 0;
  score.map((n) => {
    sum += n;
  });
  return sum;
};
console.log(heroScore(1, 2, 3, 4, 5));
