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