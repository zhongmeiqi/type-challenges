type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never;

// 知识点
// 1. infer 要和extends同时使用，把infer理解成一个 X变量就可以了
// 参考资料 https://github.com/Microsoft/TYpeScript/pull/24897

