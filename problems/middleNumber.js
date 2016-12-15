// Find the middle number from the set of 5 numbers

// 12,18,5,22,13

// Please note I do not mean “Median”.  I want you to find the middle number. In case of above series 22 is the largest number and 5 is lowest number and 13 is the middle

let midArray = [12, 18, 5, 22, 13];
let sortedArray = midArray.sort((a, b) => {
  return a - b;
});

let len = sortedArray.length;
let midIndex = ((len -1)/2);  //here it should be (5 - 1)/2 = 2. This is the desired index due to 0 index arrays.
let middleNumber = midArray[midIndex];
console.log(middleNumber);
