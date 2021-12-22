
function twoSum(nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
       for (let j = 0; j < nums.length; j++) {
           if (i !== j && (nums[i]+nums[j]) === target) {
               !obj[i]?obj[i] = i : null
               !obj[j]?obj[j] = j : null
           }
       }             
    }
    return Object.values(obj)
}

let nums = [2,7,11,15]
let target = 13
console.log(twoSum(nums, target)) // [0,2]

nums = [3,2,4]
target = 6
console.log(twoSum(nums, target)) // [1,2]

nums = [3,3]
target = 6
console.log(twoSum(nums, target)) // [0,1]
