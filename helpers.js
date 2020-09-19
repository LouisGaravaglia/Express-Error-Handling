const ExpressError = require("./expressError")

function convertAndValidateNumsArray(numsAsString) {
    nums = []
    for (let i = 0; i < numsAsString.length; i++) {
        const value = parseInt(numsAsString[i]);
        const numToString = value.toString();
        const removedNonNums = (numToString.length == numsAsString[i].length)
        const notZero = numToString == "0"
        if (!Number(value) && !notZero || !removedNonNums && !notZero){
            return new ExpressError(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`, 403
            );
        }
        nums.push(value)
    }
    return nums;
}

function findMean(nums) {
    if(nums.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    const mean = total / nums.length;
    return mean;
}

function findMedian(nums){
    nums.sort((a, b) => a - b);
    const middleIndex = Math.floor(nums.length / 2);
    let median;
    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median
}

function findMode(array) {
    let results = [];
    let max = 0;
    const modeResults = [];
    let maxOccurance = 0;
    if(array.length === 0) return 0;
    if(array.length === 1) return array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }
    let digitBucket = Array.from({ length: max + 1 }, () => []);
    for (var i = 0; i < array.length; i++) {
        digitBucket[array[i]].push(array[i]);
    }
    for (var i = 0; i < digitBucket.length; i++) {
        if (digitBucket[i].length > 1) results.push(digitBucket[i].length)
    }
    for (let length of results) {
        if (length > maxOccurance) maxOccurance = length
    }
    for (var i = 0; i < digitBucket.length; i++) {
        if (digitBucket[i].length == maxOccurance) modeResults.push(i)
    }
    return modeResults;
}

findMode([1])
module.exports = { convertAndValidateNumsArray, findMean, findMedian, findMode }