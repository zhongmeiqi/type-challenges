type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];

// js
function Concat(arrA, arrB) {
  // spread
  return [...arrA, ...arrB];
}

// infer spread
// first -> [1,2,3] 1
// tail -> [1,2,3] 3
type getFirst<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type get_last<T extends unknown[]> = T extends [...infer first, infer last]
  ? last
  : never;

type Demo<T extends "first" | "tail", U extends unknown[]> = T extends "first"
  ? U[0]
  : [any, ...U][U["length"]];

