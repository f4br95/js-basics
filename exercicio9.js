// const calc = (n1, n2) =>
//   typeof n1 === "number" && typeof n2 === "number" && n1 >= 0 && n2 >= 0
//     ? Array(n1)
//         .fill(n2)
//         .reduce((a, b) => a + b)
//     : "Invalid input";

// const completa = (param, param2) => Array(param2).fill(param);

// console.log(completa("teste", 5));

const complete = (param, param2) => {
  const foo = [];
  for (let i = 0; i < param2; i++) {
    foo.push(param);
  }
  return foo;
};

console.log(complete("teste", 3));
