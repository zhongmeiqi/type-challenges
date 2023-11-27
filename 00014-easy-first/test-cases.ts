import type { Equal, Expect } from "@type-challenges/utils";

// 知识点
// 如果是一个[]空数组的话，那么获取到[0]是undefined
type t1 = First<[]>;

//  这里的[3,2,1]是类型，包括()=>123也是类型，这个类型相当于是一种写死的类型
const arr: [3, 2, 1] = [3, 2, 1];
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];

