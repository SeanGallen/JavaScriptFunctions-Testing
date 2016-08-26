// Find the largest number from the following series of 7 numbers

// In this exercise you have to the find the largest number from the following series

// 10,12,15,3,5, 22, 2

var numArray = [10, 12, 15, 3, 5, 22, 2];

var sortedArray = numArray.sort(function(a, b) {
  return a - b;
});

var largestNumber = sortedArray[sortedArray.length -1];
console.log(largestNumber);
