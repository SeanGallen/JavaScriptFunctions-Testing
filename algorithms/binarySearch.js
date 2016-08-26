var list = [1, 3, 4, 67, 44, 33, 22]
var sortedList = list.sort(function (a, b) {
  return a - b;
});

function binarySearch(listTest, item) {
  var low = 0;
  var high = listTest.length - 1;
  while (low <= high)
  {
    var mid = (low + high)/2;
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
