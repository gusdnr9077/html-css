// 타입 추론
const coffee = "아메리카노";
const coffeeList: string[] = ["아메리카노", "라떼", "초코초코"];
// 1. 타입 어노테이션
const coffee1: string = "1";

// number 배열 변수만들기
const numlist: Number[] = Array(10).fill(10);
// boolean 배열 변수 만들기 그리고 js화 시키기
const boollist: boolean[] = [true, !!"123"];
const test = (arr: string[]) => {
  return arr.forEach((x) => {
    x.toUpperCase();
  });
};

// name, position, num
const test1: object = { name: "hyeonuk", position: "middle", num: "23" };
const test2: { name: string; position: string; num: number } = {
  name: "현욱",
  position: "middle",
  num: 7,
};
