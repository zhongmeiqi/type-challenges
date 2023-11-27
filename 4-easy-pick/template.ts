// K：ts 联合类型 union  遍历方法 in
// keyof：获取到T所有的key，并返回一个数组

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 对比学习法 js ts
function MyPick(todo, keys) {
  let obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}

interface Todo {
  a: string;
  b: string;
}
type r = keyof Todo;
["a", "b"];
const rv: r = "a";

/* 1、返回一个对象
2、遍历 forEach------ mapped
3、todo[key] 赋值给 obj[key] -----Indexed 
4、看看 key在不在todo里面 ------1.keyof Lookup(查找) 2.extends 类型约束
https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
*/

