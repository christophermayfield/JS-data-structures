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


// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left side OR the right side
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}


