const multiply = (a, b, c) => a * b * c;
const output = multiply(5, 4, 5);
console.log(output);
// PS C:\Projects\Log-27> node practice1.js
// 100

const sentence = `I am a web developer.
I love to code.
I love to eat biryani.`;
console.log(sentence);
// PS C:\Projects\Log-27> node practice1.js
// I am a web developer.
// I love to code.
// I love to eat biryani.

const arrowFunction = (a, b = 10) => a + b;
const sum = arrowFunction(10);
console.log(sum);
// PS C:\Projects\Log-27> node practice1.js
// 20
