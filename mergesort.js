//merge sort implemented in recursion.

function mergeSort(unsortedArray) {


//recursion base case:
    if (unsortedArray <= 1) {
        return unsortedArray;
    }
    
    //figuring out the middle by dividing the array in half
    const middle = Math.floor(unsortedArray.length / 2);
    
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
    return merge(
    merge(left), merge(right)
  );
}