// Find the largest number from the following series of 7 numbers

// In this exercise you have to the find the largest number from the following series

// 10,12,15,3,5, 22, 2

let numArray = [10, 12, 15, 3, 5, 22, 2];

let  sortedArray = numArray.sort((a, b) => {
  return a - b;
});

let largestNumber = sortedArray[sortedArray.length -1];
console.log(largestNumber);
