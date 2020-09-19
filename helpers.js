const ExpressError = require("./expressError")

function convertAndValidateNumsArray(numsAsString) {
    nums = []
    for (let i = 0; i < numsAsString.length; i++) {
        const value = parseInt(numsAsString[i]);
        const numToString = value.toString();
        const removedNonNums = (numToString.length == numsAsString[i].length)
        if (!Number(value) || !removedNonNums){
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

module.exports = { convertAndValidateNumsArray, findMean }