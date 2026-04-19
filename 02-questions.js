// ! Second Largest Number

// ? this is not the optimized way

const arr = [32, 54, 21, 76, 43, 89, 12, 12, 98, 11];
function secondLargest(arr) {
  const uniqueArr = [...new Set(arr)]; //* Array.from(new Set(arr));

  const sortedArr = uniqueArr.sort((a, b) => b - a);

  if (sortedArr.length < 2) {
    return "There is no second largest number";
  }
  return sortedArr[1];
}
console.log(secondLargest([0]));

// ? Optimized way
function secondLargestOptimized(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargestOptimized(arr));
