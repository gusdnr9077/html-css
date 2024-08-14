type MegaCoffee = {
  [key: string]: string;
};
type CoffeeType = CoffeeMenu | CoffeeIngredient;
type CoffeeIngredient = "kcal" | "shot" | "size";
type CoffeeMenu = "name" | "price";

type VentiCoffee = {
  [key in CoffeeType]: string;
};
const menu: VentiCoffee = {
  name: "아아",
  price: "1500",
  kcal: "250",
  shot: "2",
  size: "small",
};

// 자동차 객체 변수가 필요한데요,
// 꼭 모델, 생산연도, 엔진종류, 가격, 색상이 필요해요

type CarAttribute = "model" | "year" | "engine" | "price" | "color";
type Car = {
  [key in CarAttribute]: string;
};

const morning: Car = {
  model: "morning",
  year: "2024",
  color: "gold",
  price: "1200",
  engine: "hybird",
};
