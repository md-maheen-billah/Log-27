# Log 27 (Duration: 1/6 Months)
Today's lesson focused on more javascriptrecap and introduction to es5 and es6.

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
### Practice Task-1:
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the name of your friends
b) Check if the length of each element is even, push elements with even length to a new array and return the result
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
