//selection sort 

function selectionSort(arr) {
    let min; 
    
    for(let i = 0; i < arr.length; i++) {
        //index of the smallest element to be the ith element
        min = i;
        
        //check through the array for a lesser value element
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i) {
            [arr[i], arr[min]]= [arr[min], arr[i]];
        }
    }
    return arr;
}



/* 

Time Complexity 

Worst-case time complexity: Big O (n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big omega (n).
Space complexity: Big O(1).

pretty fun to write
*/