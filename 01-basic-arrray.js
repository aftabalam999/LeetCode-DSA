/**************************
 * Built in LOOPS of javascript
***************************/

const arr = [1,2,3,4,5];

arr.map((item, itemIdx, useArray)=>{
    // console.log(item, itemIdx, useArray);
    return item+5
    
})

arr.filter((item)=>{
    return item > 3
})

const newNum = arr.reduce((acc, item)=>{
    return acc + item 
}, 3)

const res = arr.some((item)=>{
    return item > 3
}); // it returns true if any of the item is greater than 3


const res2 = arr.every((item)=>{
    return item > 3
}); // it returns true if all the item is greater than 3

const res3 = arr.find((item)=>{
    return item > 3
}); // it returns the first item that is greater than 3 and if no item is greater than 3 then it returns undefined

// console.log(res3);


/*********************************
 * Rest and Spread operator in javascript
*******************************/

const num1 = [1,2,3];
const num2 = [4,5,6];

const newArr = [...num1, ...num2]; // it combines the two arrays into one array

const newArr2 = [...num1, 7, 8, 9]; // it combines the num1 array with the new items 7, 8, 9

const newArr3 = [0, ...num1, ...num2, 7, 8, 9]; // it combines the num1 and num2 arrays with the new items 0, 7, 8, 9

// console.log(newArr3);


function sum(...args){
    return args
};

// console.log(sum([1,2,3],[6,7,8],'hello',56));


/***************************
 * Concat, Join, Slice, Splice, Fill in javascript
*****************************/

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const strArr = ['hello', 'world', 'javascript'];

const newArr4 = arr1.concat(arr2); // it combines the two arrays into one array

const newArr5 = arr1.concat(7, 8, 9); // it combines the num1 array with the new items 7, 8, 9

const newArr6 = arr1.concat(arr2, 7, 8, 9); // it combines the num1 and num2 arrays with the new items 7, 8, 9

// console.log(newArr6);

const newStr = strArr.join(' '); // it combines the string array into one string with space as a separator

// console.log(newStr);

const newArr7 = arr1.slice(0, 2); // it returns a new array with the items from index 0 to index 2 (not including index 2)

// console.log(newArr7);

const testArr = [1,2,3,4,5];
testArr.splice(1, 2, 10, 11); // it removes the items from index 1 , 
// and the second params is the count of deletion, so it removes 2 items from index 1, 
// and the third and fourth params are the new items that will be added to the array at index 1 after deletion

// console.log(testArr);
// it modifies the original array by removing the items from index 1 to index 2 (including index 2)

const dummyArr = [1,2,3,4,5];
dummyArr.fill(0, 1, 4); // it fills the array with the specified value from index 1 to index 4 (not including index 4)+
// if the second and third params are not provided then it fills the entire array with the specified value

// console.log(dummyArr);

/***************************
 * FindIndex, flat, sort in javascript
*****************************/

const arr3 = [1,2,3,4,5,3];

const findIdx = arr3.findIndex((item)=>{
    return item === 3
}); // it returns the index of the first item that is equal to 3 and if no item is equal to 3 then it returns -1
// console.log(findIdx);

const flatArr = [1,2,[3,4],[5,6,[7,8]]];
const flattened = flatArr.flat(2); // it flattens the array by one level
// console.log(flattened);


const sortArr = [5,2,8,1,4];
const sorted = sortArr.sort((a, b)=>{
    return a - b
}); // it sorts the array in ascending order
// console.log(sorted);
