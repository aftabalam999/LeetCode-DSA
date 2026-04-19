
// Array.prototype.last = function() {
//      return this.length ? this[this.length-1] : -1;
// };
// const arr = [46];
// console.log(arr.last());

// var twoSum = function (nums, target) {
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             let total = nums[i] + nums[j];
//             if (total == target) {
//                 return [i, j]
//             }
//         }
//     }
// };

//! pending
let l1 = [0];
let l2 = [0];
function myfunc(l1, l2) {
    if(l1.length==1 && l2.length==1) return [0];
    let temp1=0;
    let temp2=0;
    for(let i=l1.length-1; i>=0; i--){
        temp1=(temp1*10)+l1[i]
    }
    for(let j=l2.length-1; j>=0; j--){
        temp2=(temp2*10)+l2[j]
    }
    let total=temp1+temp2;
    let newArr=[];
    let idx=0;
    while(total!=0){
        let lastDigit = total%10;
        total=Math.floor(total/10);
        newArr[idx]=lastDigit;
        idx++
    }
    return newArr;
};
console.log(myfunc(l1,l2))