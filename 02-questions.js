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
// console.log(secondLargest([0]));

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
// console.log(secondLargestOptimized(arr));


/* 
! Rotate Array by K
! Given an integer array nums, rotate the array to the by k steps, where k is non - negative
*/

/*
* Whave to shift the last elem into the first 
* Input: nums = [1,2,3,4,5,6,7], k=3 --->> output: [5,6,7,1,2,3]

? we have to do is 
* [1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4]
*/

function rotateArray(arr,k){
    let size = arr.length; 
    if(k>size) return "rotate number is too large";

    // let rotateArr=arr;

    for(let i =1; i<= k; i++){
        const lastNum = arr.pop();
    // console.log(lastNum);
    arr.unshift(lastNum)
    // console.log(arr);
    }
    
    return arr;
}
const arr3 = [1,2,3,4,5,6,7]
console.log(rotateArray(arr3,9));