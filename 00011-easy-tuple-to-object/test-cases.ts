import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type r = typeof tuple;
/* 
1. 字面量类型 as const变成常量，let的话是string[]
*/
let str = "123";
type s = typeof str;
str = "12341234";

const strConst = "234";
type sc = typeof strConst;
// strConst = '2343' // 报错无法分配到 "strConst" ，因为它是常数。

const tupleNumber = [1, 2, 3, 4] as const;
const sym1 = Symbol(1);
const sym2 = Symbol(2);
const tupleSymbol = [sym1, sym2] as const;
const tupleMix = [1, "2", 3, "4", sym1] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<
      TupleToObject<typeof tupleSymbol>,
      { [sym1]: typeof sym1; [sym2]: typeof sym2 }
    >
  >,
  Expect<
    Equal<
      TupleToObject<typeof tupleMix>,
      { 1: 1; "2": "2"; 3: 3; "4": "4"; [sym1]: typeof sym1 }
    >
  >
];

// @ts-expect-error 期望下面这个类型会报错 是一种断言https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html
type error = TupleToObject<[[1, 2], {}]>;

/* expect(()=>{
type error = TupleToObject<[[1, 2], {}]>

}).toHtrow(()=>{...str.}) */

// const let  js世界
// type interface type世界

/* 
1. typeof： js世界和 type世界的转换器
*/

