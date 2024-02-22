const arrayNumbers = (array) => {
  let sum = 0;
  for (arr of array) {
    arr = arr * arr;
    sum = sum + arr;
  }
  const avg = sum / array.length;
  return avg;
};
const output = arrayNumbers([5, 4, 3, 2]);
console.log(output);

// PS C:\Projects\Log-27> node practice3.js
// 13.5
