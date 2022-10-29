const matematica = (num1, num2) => {
  if (typeof num1 == "number" && typeof num2 == "number") {
    let num3 = num1;
    for (let i = 0; i < num2 - 1; i++) {
      num3 += num1;
    }
    // num3 = num1;
    return num3;
  }
};

console.log(matematica(0, 7));
