const numArr = (array) => Math.max(...array);
const odd = [1, 3, 5, 7, 9];
const even = [2, 4, 6, 8];
const numbers = [...odd, ...even];
const maxNumber = numArr(numbers);
console.log(maxNumber);

// PS C:\Projects\Log-27> node practice4.js
// 9
