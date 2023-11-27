// T ===[]ts里面可以，但是js不可以[]===[]，可以这样理解 "[]" ==="[]"
// 解法1：type First<T extends any[]> = T extends [] ? never : T[0];

// 解法2：type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 解法3：type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type First<T extends any[]> = T extends [infer first, ...infer rest]
  ? first
  : never;

type Tail<T extends any[]> = T extends [infer first, ...infer rest]
  ? rest
  : never;

function firstOfArray(array) {
  // array 是不是一个空数组，如果是的话 那么返回 never

  /*  if (array.length === 0) return "never";
  return array[0]; */

  const [first, ...rest] = array;
  return first ? first : "never";
}
type t4 = Tail<[]>;

// T[number]
type ages = [1, 2, 3];
// union
type t2 = ages[number];
// 看看 某个值是不是在union里面
// 1 extends 1, 1 extends 2, 1 extends 3 只要有一个命中就返回true
type t3 = ages[0] extends ages[number] ? true : false;

/*
知识点
1. extends 类型条件判断
2. 获取tuple 的 length属性 --- indexed
3. extends union 判断的规则 
4. infer(推断) 的使用 ----声明一个变量，一般和extends结合使用，看看能不能结构出一个first，如果能结构出来就返回first,不能就返回never
*/

