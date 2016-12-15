let list = [1, 3, 4, 67, 44, 33, 22]
let sortedList = list.sort((a, b) => {
  return a - b;
});

let binarySearch = (listTest, item) => {
  let low = 0;
  let high = listTest.length - 1;
  while (low <= high)
  {
    let mid = (low + high)/2;
    guess = listTest[mid];
    if (guess === item)
    {
      return "The index is " + mid;
    }
    if (guess > item)
    {
      high = mid - 1;
    }
    else
    {
      low = mid + 1;
    }
  }
  return null;
};

console.log(binarySearch(sortedList, 3));
