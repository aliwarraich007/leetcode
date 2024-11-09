let romans = new Map();
romans
  .set("I", 1)
  .set("V", 5)
  .set("X", 10)
  .set("X", 10)
  .set("L", 50)
  .set("C", 100)
  .set("D", 500)
  .set("M", 1000);

function romanToInt(s: string): number {
  const strArr = Array.from(s).reverse();
  let sum = 0;
  let prev = 0;
  for (let i = 0; i < strArr.length; i++) {
    const digit = romans.get(strArr[i]);
    if (prev > 0 && prev > digit) sum -= digit;
    else sum += digit;
    prev = digit;
  }
  return sum;
}

const result = romanToInt("XX");
