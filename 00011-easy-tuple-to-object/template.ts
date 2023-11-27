type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

//in keyof array ([P in keyof T])-> 得到索引['0','1','2','3','4']
type tr = TupleToObject<typeof tuple>;

function TupleToObject(array) {
  // 1. array 里面的key是不是string类型 或者 number 或者 symbol
  // 2. 如果都不是 报错error
  const obj = {};
  for (const key of array) {
    obj[key] = key;
  }

  return obj;
}
/* 
1. 返回一个对象
2. 遍历 array ----- in T[number]

*/

