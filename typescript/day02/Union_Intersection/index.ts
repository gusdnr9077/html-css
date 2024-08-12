//  union(| or)

const price:string | number = "2500"
const name2:string | undefined = undefined;
const hasmilk:boolean | string = "있음";

// intersection(& [and])

const price1 : {name:string} & {price:number} ={
    name:"아이폰",
    price:100,
}
type Size =  "Tall" | "Grande" | "Venti"
type TypeShot = {
    cofeeType:string,
    shot:number,
}
type price = {price:number}
type coffee2 = Size & TypeShot & price

type ade = Size & price

