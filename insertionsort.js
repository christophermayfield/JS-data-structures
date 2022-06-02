//insertion sort

function insertionSort(arr) {
    //start from element 2
    for(let i = 1; i < arr.length; i++) {
        //start from the elements behind
        for(let j = i - 1; j > -1; j--) {
            if(arr[j+1] > arr[j]) {
                //swap those guys
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
            }
        }
    }
    return arr;
}


console.log(insertionSort([23, 1, 10, 5, 2]));


/* 

Worst-case time complexity: Big O(n^2).

Average-case time complexity: Big theta (n^2).

Best-case time complexity: Big omega (n).

Space complexity: Big O (1).

*/