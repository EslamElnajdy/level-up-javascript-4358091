// Write your code here
function coffeeDate(coffeeArr) {
  let coffeeSum = coffeeArr.reduce(
    (a, b) => (a += b)
  );
  return `The total bill is $${coffeeSum * 1.25}`;
}

console.log(coffeeDate([3, 1, 9, 2, 3]));