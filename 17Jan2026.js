// Question Number 1 :- Two Sum
let nums = [2,7,11,15];
target = 9;
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let total=nums[i]+nums[j]
            if(total===target){
               return [i,j];
            }
        }
    }
    return [];
};
console.log(twoSum(nums,target));



// 2. Add Two Numbers 
// ! Run this code in leetcode environment there it will work
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    return dummy.next;
};

console.log(addTwoNumbers)