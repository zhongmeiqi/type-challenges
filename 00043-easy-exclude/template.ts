type MyExclude<T, U> = T extends U ? never : T;

// js
// ['a','b','c']
// ['a']

type t2 = "a" | "b" | "c";
type t3 = "a";
type t4 = MyExclude<t2, t3>;

function myExclude(T, U: any[]) {
  const result: any[] = [];
  for (let i = 0; i < T.length; i++) {
    const t = T[i];
    // let boo = false;
    // for (let j = 0; j < U.length; j++) {
    //   const u = U[j];
    //   if (t === u) {
    //     boo = true;
    //   }
    // }
    if (!U.includes(t)) {
      result.push(t);
    }
  }
}

