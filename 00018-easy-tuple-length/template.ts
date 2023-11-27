type Length<T extends readonly any[]> = T["length"];

function getLength(val) {
  //   if (typeof val === "number" || typeof val === "string")
  //     throw new Error("类型错误");
  if (!Array.isArray(val)) return;
  return val.length;
}

// 知识点
// 什么是tuple类型 定值定长 https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// tuple类型和数组有什么区别

type StringNumberPair = [string, number];
type t5 = StringNumberPair["length"]; //因为tuple长度是一个定死的值，所以是一个具体的值 2
const str1: StringNumberPair = ["123", 123];

type stringArr = string[];
type t6 = stringArr["length"]; //number 数组长度

