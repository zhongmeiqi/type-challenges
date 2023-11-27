type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

function readonly(obj) {
  const result = {};

  for (const key in obj) {
    result["readonly" + key] = obj[key];
  }
  return result;
}

/* 
1. 返回一个对象
2. 遍历obj (js 对象 ts接口) -----in=>mapped key=>lookup
3. 加上readonly关键字 新知识点
4. 通过key来获取obj（接口）里面的值 ----indexed
*/

/* type User = {
  readonly name: string;
};

const xiaohong: User = {
  name: "xiaohong",
};

xiaohong.name = "123"; */

