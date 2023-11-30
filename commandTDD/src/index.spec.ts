import { test, expect } from "vitest";
import { parseArgs } from ".";
// 需求分析
// -l -p 8080 -d /usr/logs

// tasking
// happy path
// -l ->true
test("当我们给定一个 -l 的时候，应该返回 true", () => {
  const options = {
    l: Boolean,
  };
  const args = parseArgs(options, ["-l"]);
  expect(args).toEqual({
    l: true,
  });
});
// -p ->8080
test("当我们给定一个 -p 的时候，应该返回 number 8080", () => {
  const options = {
    p: Number,
  };
  const args = parseArgs(options, ["-p", "8080"]);
  expect(args).toEqual({
    p: 8080,
  });
});
// -d -> /usr/logs
test("当我们给定一个 -d 的时候，应该返回 /usr/logs", () => {
  const options = {
    d: String,
  };
  const args = parseArgs(options, ["-d", "/usr/logs/"]);
  expect(args).toEqual({
    d: "/usr/logs/",
  });
});
// sad path
// -l t
// -p 8080 9090

test("happy path", () => {
  // vue prop
  const options = {
    l: Boolean,
    p: Number,
    d: String,
  };
  const args = parseArgs(options, ["-l", "-p", "8080", "-d", "/usr/logs"]);
  expect(args).toEqual({
    l: true,
    p: 8080,
    d: "/usr/logs",
  });
});

// test("should", () => {
//   expect(true).toBe(true);
// });
// test("add", () => {
//   expect(add(1, 1)).toBe(2);
// });

