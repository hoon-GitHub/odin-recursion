function mergeSort (array) {

  if (array.length === 1) {
    return array;
  } else {

    // divide array into two, and recursively sort each
    let firstHalf = mergeSort(array.slice(0, array.length / 2));
    let secondHalf = mergeSort(array.slice(array.length / 2));

    // now, merge things in the order
    let temp = [];
    while (firstHalf.length > 0 || secondHalf.length > 0) {
      if (firstHalf.length === 0) return temp.concat(secondHalf);
      if (secondHalf.length === 0) return temp.concat(firstHalf);
      if (firstHalf[0] < secondHalf[0]) {
        temp.push(firstHalf.shift());
      } else {
        temp.push(secondHalf.shift());
      }
    }
    return temp;
  }

}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
