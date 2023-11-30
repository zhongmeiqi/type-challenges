type Unshift<T extends Array<unknown>, U> = [U, ...T];

// js
function Unshift(T, U) {
  return [U, ...T];
}
