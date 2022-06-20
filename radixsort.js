//radix sort

function getDigit(num, place) {
    //takes a number and place. ex: if # is 354 and then place is 1, then get digit returns 5 (4 is at place 0)
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) { //this allows us to find how many times we need to put numbers into buckets. If the longest number in the array has 4 digits, then we need to put the numbers into buckets 4 times. 
    if (num === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    //will take an array of numbers loop over them, and keep track of the digit count of the longest number
    let maxDigits = 0;
    
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits,digitCount(nums[i]));
        

    }
    return maxDigits;
}


//radix sort algo. 
//takes an array of nums in the parameter.
function radixSort(arrofNums) {
    let maxDigitCount = mostDigits(arrofNums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
    
        for (let i = 0; i < arrOfNums.length; i++) {
      let digit = getDigit(arrOfNums[i], k)
      digitBuckets[digit].push(arrOfNums[i])
    }
    // New order after each loop
    arrOfNums = [].concat(...digitBuckets)
    }
        
}
