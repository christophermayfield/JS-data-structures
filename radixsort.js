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
    
}