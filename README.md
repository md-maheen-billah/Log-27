# Log 27 (Duration: 1/6 Months)
Today's lesson focused on javascript recap and introduction to es5 and es6.

---

### Practice Task-1:
1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
```js
const multiply = (a, b, c) => a * b * c;
const output = multiply(5, 4, 5);
console.log(output);

// PS C:\Projects\Log-27> node practice1.js
// 100

```
2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.
```js
const sentence = `I am a web developer.
I love to code.
I love to eat biryani.`;
console.log(sentence);
// PS C:\Projects\Log-27> node practice1.js
// I am a web developer.
// I love to code.
// I love to eat biryani.

```
3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
```js
const arrowFunction = (a, b = 10) => a + b;
const sum = arrowFunction(10);
console.log(sum);
// PS C:\Projects\Log-27> node practice1.js
// 20


```
---
### Practice Task-2:
Write an arrow function where it will do the following:

a) It will take an array where the array elements will be the name of your friends.

b) Check if the length of each element is even, push elements with even length to a new array and return the result.

Print the result.
```js
const friendsNames = (array) => {
  const evenNames = [];
  for (arr of array) {
    if (arr.length % 2 === 0) {
      evenNames.push(arr);
    }
  }
  return evenNames;
};
const friends = friendsNames(["rafi", "sameule", "ahmed", "daniel", "mark"]);
console.log(friends);
// PS C:\Projects\Log-27> node practice2.js
// [ 'rafi', 'daniel', 'mark' ]

```
---
### Practice Task-3:
Write an arrow function where it will do the following:

a) Square each array element

b) Calculate the of the squared elements

c) Return the average of the sum of the squared elements

Print the result.
```js
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

```
---
### Practice Task-4:
write an arrow function where it will do the following:

a) It will take two array inputs

b) Combine the two arrays and assign them in a new array

c) Find the maximum number from the new array and return the result

Print the result.

```js
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

```
---
