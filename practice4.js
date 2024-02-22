const numArr = (a, b) => {
  const number = [...a, ...b];
  return Math.max(...number);
};
const odd = [1, 3, 5, 7, 9];
const even = [2, 4, 6, 8];
const maxNumber = numArr(odd, even);
console.log(maxNumber);

// PS C:\Projects\Log-27> node practice4.js
// 9
