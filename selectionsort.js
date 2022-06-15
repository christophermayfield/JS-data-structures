//selection sort 

function selectionSort(arr) {
    let min; 
    
    for(let i = 0; i < arr.length; i++) {
        min = i;
        
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i) {
            [arr[i], arr[min]]= [arr[min], arr[i]];
        }
    }
}



/* 

Time Complexity 

Worst-case time complexity: Big O (n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big omega (n).
Space complexity: Big O(1).

pretty fun to write
*/