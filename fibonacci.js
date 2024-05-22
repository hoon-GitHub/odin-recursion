// using iteration
function fibs (n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  else {
    let num1 = 0;
    let num2 = 1;
    let array = [num1, num2];
    for (let i = 2; i < n; i++) {
      let newNum = num1 + num2;
      array.push(newNum);
      num1 = num2;
      num2 = newNum;
    }
    return array;
  }
}

// using recursion
function fibsRec (n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    const prevArray = fibsRec(n - 1);
    const newNum = prevArray[prevArray.length - 2] + prevArray[prevArray.length - 1];
    return prevArray.concat(newNum);
  }
}

console.log(fibs(0), fibsRec(0)); // []
console.log(fibs(1), fibsRec(1)); // [ 0 ]
console.log(fibs(2), fibsRec(2)); // [ 0, 1 ]
console.log(fibs(8), fibsRec(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
