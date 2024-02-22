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
