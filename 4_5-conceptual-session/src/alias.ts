/* ===== type will work single value/object/array/... ===== */
type HereIncomeType = number | string;

const hereIncome1: HereIncomeType = 15;
const hereIncome2: HereIncomeType = "15";

/* ===== Interface will work only for objects ===== */
interface IHeroType {
  name: string;
  age: number;
}
const here1: IHeroType = {
  name: "Abul",
  age: 55,
};

const here2: IHeroType = {
  name: "Abul",
  age: 55,
};

const here3: IHeroType = {
  name: "Abul",
  age: 55,
};
